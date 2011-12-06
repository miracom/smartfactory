/*
 * Copyright (c) 2010 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 *
 */
package com.mesplus.WMG.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

import javax.inject.Inject;

import org.cometd.bayeux.client.ClientSessionChannel;
import org.cometd.bayeux.server.BayeuxServer;
import org.cometd.bayeux.server.ConfigurableServerChannel;
import org.cometd.bayeux.server.ServerMessage;
import org.cometd.bayeux.server.ServerSession;
import org.cometd.java.annotation.Configure;
import org.cometd.java.annotation.Listener;
import org.cometd.java.annotation.Service;
import org.cometd.java.annotation.Session;
import org.cometd.server.authorizer.GrantAuthorizer;
import org.cometd.server.filter.DataFilterMessageListener;
import org.cometd.server.filter.NoMarkupFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.mesplus.WMG.service.filter.BadWordFilter;

@Service("communicator")
public class CommunicatorService {
	private static final Logger logger = LoggerFactory.getLogger(CommunicatorService.class);
	
	private final ConcurrentMap<String, Map<String, String>> spaceMembersMap = new ConcurrentHashMap<String, Map<String, String>>();
	@Inject
	private BayeuxServer bayeuxServer;
	@Session
	private ServerSession serverSession;

	@Configure({ "/communicator/**" })
	protected void configureCommunicatorStarStar(ConfigurableServerChannel channel) {
		DataFilterMessageListener noMarkup = new DataFilterMessageListener(new NoMarkupFilter(), new BadWordFilter());
		channel.addListener(noMarkup);
		channel.addAuthorizer(GrantAuthorizer.GRANT_ALL);
	}

	@Configure("/communicator/private")
	protected void configurePrivateChat(ConfigurableServerChannel channel) {
		DataFilterMessageListener noMarkup = new DataFilterMessageListener(new NoMarkupFilter(), new BadWordFilter());
		channel.setPersistent(true);
		channel.addListener(noMarkup);
		channel.addAuthorizer(GrantAuthorizer.GRANT_PUBLISH);
	}

	@Configure("/service/members")
	protected void configureMembers(ConfigurableServerChannel channel) {
		channel.addAuthorizer(GrantAuthorizer.GRANT_PUBLISH);
		channel.setPersistent(true);
	}

	/*
	 * When any client get connectionEstablished, it will publish '/service/members' message with user and space.
	 */
	@Listener("/service/members")
	public void handleMembership(ServerSession client, ServerMessage message) {
		Map<String, Object> data = message.getDataAsMap();
		final String space = ((String) data.get("space")).substring("/communicator/space".length());
		Map<String, String> spaceMembers = spaceMembersMap.get(space);
		if (spaceMembers == null) {
			Map<String, String> new_space = new ConcurrentHashMap<String, String>();
			spaceMembers = spaceMembersMap.putIfAbsent(space, new_space);
			if (spaceMembers == null)
				spaceMembers = new_space;
		}
		final Map<String, String> members = spaceMembers;
		String userName = (String) data.get("user");
		members.put(userName, client.getId());
		client.addListener(new ServerSession.RemoveListener() {
			public void removed(ServerSession session, boolean timeout) {
				members.values().remove(session.getId());
				broadcastMembers(space, members.keySet());
			}
		});

		broadcastMembers(space, members.keySet());
	}

	private void broadcastMembers(String space, Set<String> members) {
		// Broadcast the new members list
		ClientSessionChannel channel = serverSession.getLocalSession().getChannel("/communicator/member/" + space);
		channel.publish(members);
	}

	@Listener("/communicator/private")
	protected void privateChat(ServerSession client, ServerMessage message) {
		Map<String, Object> data = message.getDataAsMap();
		
		logger.error("PrivateChat : " + data.get("chat"));
		
		String space = ((String) data.get("space")).substring("/chat/".length());
		Map<String, String> membersMap = spaceMembersMap.get(space);
		if (membersMap == null) {
			Map<String, String> new_space = new ConcurrentHashMap<String, String>();
			membersMap = spaceMembersMap.putIfAbsent(space, new_space);
			if (membersMap == null)
				membersMap = new_space;
		}
		String[] peerNames = ((String) data.get("peer")).split(",");
		ArrayList<ServerSession> peers = new ArrayList<ServerSession>(peerNames.length);

		for (String peerName : peerNames) {
			String peerId = membersMap.get(peerName);
			if (peerId != null) {
				ServerSession peer = bayeuxServer.getSession(peerId);
				if (peer != null)
					peers.add(peer);
			}
		}

		if (peers.size() > 0) {
			Map<String, Object> chat = new HashMap<String, Object>();
			String text = (String) data.get("chat");
			chat.put("chat", text);
			chat.put("user", data.get("user"));
			chat.put("scope", "private");
			ServerMessage.Mutable forward = bayeuxServer.newMessage();
			forward.setChannel("/communicator/" + space);
			forward.setId(message.getId());
			forward.setData(chat);

			// test for lazy messages
			if (text.lastIndexOf("lazy") > 0)
				forward.setLazy(true);

			for (ServerSession peer : peers)
				if (peer != client)
					peer.deliver(serverSession, forward);
			client.deliver(serverSession, forward);
		}
	}
}
