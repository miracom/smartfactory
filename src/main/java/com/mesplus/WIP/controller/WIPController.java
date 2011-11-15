package com.mesplus.WIP.controller;

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

import com.mesplus.WIP.dao.OperationDao;
import com.mesplus.WIP.model.Operation;
import com.mesplus.smartfactory.HomeController;

@Controller
public class WIPController {
	private static final Logger logger = LoggerFactory
			.getLogger(HomeController.class);
	
	@Autowired
	private OperationDao operationDao; 
	
	@RequestMapping(value = "module/WIP/data/operations.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Operation> operations(HttpServletRequest request,
			HttpServletResponse response) {
		String factory = request.getParameter("factory");
		String user = request.getParameter("user");

		Map<String, Object> params = new HashMap<String, Object>();
		
		params.put("factory", factory);
		params.put("user", user);
		
		return operationDao.selectOperations(params);
	}
}
