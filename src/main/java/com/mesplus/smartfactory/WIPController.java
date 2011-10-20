package com.mesplus.smartfactory;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mesplus.smartfactory.model.Operation;

@Controller
public class WIPController {
	private static final Logger logger = LoggerFactory
			.getLogger(HomeController.class);

	@RequestMapping(value = "module/WIP/data/operations.json", method = RequestMethod.GET)
	public @ResponseBody
	Operation[] operations(HttpServletRequest request,
			HttpServletResponse response) {
		String factory_id = request.getParameter("factory_id");
		
		logger.info("factory_id : " + request.getParameter("factory_id"));
		return new Operation[] {
			new Operation("1000", "operation 1000", factory_id),
			new Operation("1000", "operation 1000", factory_id),
			new Operation("1000", "operation 1000", factory_id),
			new Operation("1000", "operation 1000", factory_id),
			new Operation("1000", "operation 1000", factory_id),
			new Operation("1000", "operation 1000", factory_id),
			new Operation("1000", "operation 1000", factory_id),
			new Operation("1000", "operation 1000", factory_id)
		};
	}

}
