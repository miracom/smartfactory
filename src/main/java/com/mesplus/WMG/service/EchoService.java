package com.mesplus.WMG.service;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.cometd.bayeux.server.BayeuxServer;
import org.cometd.bayeux.server.ServerMessage;
import org.cometd.bayeux.server.ServerSession;
import org.cometd.java.annotation.Listener;
import org.cometd.java.annotation.Session;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.mesplus.smartfactory.HomeController;

@javax.inject.Named
@javax.inject.Singleton
@Service("echoService")
public class EchoService {
	private static final Logger logger = LoggerFactory
			.getLogger(HomeController.class);
	
	@Inject
	private BayeuxServer bayeux;

	@Session
	private ServerSession serverSession;

	@PostConstruct
	public void init() {
		System.out.println("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% " + "Echo Service Initialized" + " %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
	}

	@Listener("/echo")
	public void echo(ServerSession remote, ServerMessage.Mutable message) {
		String channel = message.getChannel();
		Object data = message.getData();
		logger.info("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% " + message.get("mymessage") + " %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
		remote.deliver(serverSession, channel, data, null);
	}
}