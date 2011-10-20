package com.mesplus.smartfactory;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mesplus.smartfactory.model.Resource;

@Controller
public class RASController {
	private static final Logger logger = LoggerFactory
			.getLogger(HomeController.class);

	@RequestMapping(value = "module/RAS/data/resources.json", method = RequestMethod.GET)
	public @ResponseBody
	Resource[] resources(HttpServletRequest request,
			HttpServletResponse response) {
		String factory_id = request.getParameter("factory_id");

		logger.info("factory_id : " + request.getParameter("factory_id"));
		return new Resource[] {
				new Resource("1000", "resource 1000", factory_id),
				new Resource("1000", "resource 1000", factory_id),
				new Resource("1000", "resource 1000", factory_id),
				new Resource("1000", "resource 1000", factory_id),
				new Resource("1000", "resource 1000", factory_id),
				new Resource("1000", "resource 1000", factory_id),
				new Resource("1000", "resource 1000", factory_id),
				new Resource("1000", "resource 1000", factory_id) };
	}

	@RequestMapping(value = "module/RAS/data/resource.json", method = RequestMethod.GET)
	public @ResponseBody
	Resource resource(HttpServletRequest request,
			HttpServletResponse response) {
		String factory_id = request.getParameter("factory_id");
		String resource_id = request.getParameter("resource_id");

		logger.info("factory_id : " + factory_id);
		logger.info("resource_id : " + resource_id);
		
		return 	new Resource(resource_id, "Resource " + resource_id, factory_id);
	}
}
