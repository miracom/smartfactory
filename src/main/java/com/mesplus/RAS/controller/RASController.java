package com.mesplus.RAS.controller;

import java.util.List;

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
		String factory_id = request.getParameter("factory_id");

		logger.info("factory_id : " + factory_id);
		
		return resourceDao.selectResources();
	}

	@RequestMapping(value = "module/RAS/data/resource.json", method = RequestMethod.GET)
	public @ResponseBody
	Resource resource(HttpServletRequest request,
			HttpServletResponse response) {
		String factory_id = request.getParameter("factory_id");
		String resource_id = request.getParameter("resource_id");

		logger.info("factory_id : " + factory_id);
		logger.info("resource_id : " + resource_id);
		
		Resource ret = 	resourceDao.findResource(resource_id);
		return ret;
	}
}
