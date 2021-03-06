package com.mesplus.RAS.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mesplus.RAS.dao.ResourceDao;
import com.mesplus.RAS.model.Resource;
import com.mesplus.SEC.model.CustomUserDetails;
import com.mesplus.smartfactory.HomeController;
import com.mesplus.util.SessionUtils;

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
		CustomUserDetails user = SessionUtils.currentUserDetails();

		Map<String, Object> params = new HashMap<String, Object>();
		
		params.put("factory", user.getFactory());
		params.put("user", user.getUser_id());

		
		return resourceDao.selectResources(params);
	}

	@RequestMapping(value = "module/RAS/data/resource.json", method = RequestMethod.GET)
	public @ResponseBody
	Resource resource(HttpServletRequest request,
			HttpServletResponse response) {
		CustomUserDetails user = SessionUtils.currentUserDetails();

		Map<String, Object> params = new HashMap<String, Object>();
		String res_id = request.getParameter("res_id");
		
		params.put("factory", user.getFactory());
		params.put("user", user.getUser_id());
		params.put("res_id", res_id);

		Resource ret = 	resourceDao.findResource(params);
		
		return ret;
	}
}
