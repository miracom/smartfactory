package com.mesplus.RAS.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.cometd.bayeux.Channel;
import org.cometd.bayeux.Message;
import org.cometd.bayeux.client.ClientSessionChannel;
import org.cometd.bayeux.server.BayeuxServer;
import org.cometd.bayeux.server.LocalSession;
import org.cometd.client.BayeuxClient;
import org.cometd.client.transport.ClientTransport;
import org.cometd.client.transport.LongPollingTransport;
import org.cometd.common.JSONContext;
import org.cometd.common.JacksonJSONContextClient;
import org.eclipse.jetty.client.HttpClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mesplus.RAS.dao.ResourceDao;
import com.mesplus.RAS.model.Resource;
import com.mesplus.smartfactory.HomeController;

@Controller
public class RASController {
	private static final Logger logger = LoggerFactory
			.getLogger(HomeController.class);
	
	@Autowired
	private ResourceDao resourceDao;
	
	@RequestMapping(value = "module/RAS/data/resources.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Resource> resources(HttpServletRequest request,
			HttpServletResponse response) {
		String factory = request.getParameter("factory");
		String user = request.getParameter("user");

		Map<String, Object> params = new HashMap<String, Object>();
		
		params.put("factory", factory);
		params.put("user", user);
		
		return resourceDao.selectResources(params);
	}

	@Autowired
	private BayeuxServer bayeux;
	
	@RequestMapping(value = "module/RAS/data/resource.json", method = RequestMethod.GET)
	public @ResponseBody
	Resource resource(HttpServletRequest request,
			HttpServletResponse response) {
		String factory = request.getParameter("factory");
		String user = request.getParameter("user");
		String res_id = request.getParameter("res_id");

		Map<String, Object> params = new HashMap<String, Object>();
		
		params.put("factory", factory);
		params.put("user", user);
		params.put("res_id", res_id);
		
		Resource ret = 	resourceDao.findResource(params);
		
		/** FROM HERE for TEST COMET **/
		
		try {  
			LocalSession client = bayeux.newLocalSession("server");
			
			client.handshake();
    		Map<String, Object> data = new HashMap<String, Object>();
    		data.put("mymessage", "안냐쇼");
    		client.getChannel("/echo").publish(data);
			client.disconnect();
			
//			HttpClient httpClient = new HttpClient();
//			
//			httpClient.setMaxConnectionsPerAddress(2);
//			httpClient.start();
//
//			Map<String, Object> options = new HashMap<String, Object>();
//			JSONContext.Client jsonContext = new JacksonJSONContextClient();
//			options.put(ClientTransport.JSON_CONTEXT, jsonContext);
//			
//			ClientTransport transport = LongPollingTransport.create(options, httpClient);
//
//			BayeuxClient client = new BayeuxClient("http://localhost:8080/smartfactory/cometd", transport);
//
//			client.getChannel(Channel.META_CONNECT).addListener(new ClientSessionChannel.MessageListener() {
//				
//				@Override
//				public void onMessage(ClientSessionChannel channel, Message message) {
//					logger.info("Comet Channel [" + channel + "] : " + message.getJSON());
//				}
//			});
//			client.getChannel(Channel.META_HANDSHAKE).addListener(new ClientSessionChannel.MessageListener() 
//			{ 
//			    public void onMessage(ClientSessionChannel channel, Message message)
//			    {
//		        	logger.info("Comet Channel [" + channel + "] : " + message.getJSON());
//			    }
//			});
//			client.handshake();
//			boolean handshaken = client.waitFor(1000, BayeuxClient.State.CONNECTED);
//			if (handshaken)
//			{
//	    		Map<String, Object> data = new HashMap<String, Object>();
//	    		data.put("mymessage", "안냐쇼");
//	    		client.getChannel("/email/new").publish(data);
//			}
//			client.disconnect();
//			client.waitFor(1000, BayeuxClient.State.DISCONNECTED);
		} catch(Exception e) {
			logger.error(e.getMessage());
		}
		
		return ret;
	}
}
