package com.mesplus.CMN.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mesplus.CMN.dao.SelectorDao;
import com.mesplus.SEC.model.CustomUserDetails;
import com.mesplus.WIP.model.Operation;
import com.mesplus.util.SessionUtils;

@Controller
public class SelectorController {
	private static final Logger logger = LoggerFactory.getLogger(SelectorController.class);

	@Autowired
	private SelectorDao selectorDao;

	@RequestMapping(value = "module/CMN/data/select.json", method = RequestMethod.GET)
	public @ResponseBody
	Map<String, Object> select(HttpServletRequest request, HttpServletResponse response) {
		String table = (String) request.getParameter("table");
		String[] selects = (String[]) request.getParameterValues("selects");
		String[] filters = (String[]) request.getParameterValues("filters");
		String[] orders = (String[]) request.getParameterValues("orders");
		String start = request.getParameter("start");
		String limit = request.getParameter("limit");
		//System.out.println("start= " +  start);
		//System.out.println("limit= " +  limit);
		
		CustomUserDetails user = SessionUtils.currentUserDetails();

		Map<String, Object> params = new HashMap<String, Object>();
		
		params.put("factory", user.getFactory());

		//(Map<String, Object>) request.getParameter("params");
		
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("total",selectorDao.selectCount(table, filters, params));
		resultMap.put("daoResult",selectorDao.select(table, selects, filters, orders, params, Integer.parseInt(start) ,Integer.parseInt(limit)));

		return resultMap;
	}
	
//	@RequestMapping(value = "module/CMN/data/select.json", method = RequestMethod.POST)
//	public @ResponseBody
//	Map<String, Object> select2(HttpServletRequest request, HttpServletResponse response) {
//		String startDate = (String)request.getAttribute("sd");
//		String startDate2 = (String)request.getAttribute("fd");
//		Map<String, Object> resultMap = new HashMap<String, Object>();
//		resultMap.put("aaaaa", "aaaaa");
//		resultMap.put("table", startDate);
//		resultMap.put("table2", startDate2);
//		
//		return resultMap;
//	}
	
//	@RequestMapping(value = "module/CMN/data/select.json", method = RequestMethod.POST)
//	public @ResponseBody
//	Map<String, Object> select2(@ModelAttribute("Operation") Operation oper) {
//		//String table = (String) request.getParameter("table");
//		Map<String, Object> resultMap = new HashMap<String, Object>();
//		resultMap.put("aaaaa", "aaaaa");
//		//resultMap.put("table", table);
//		
//		return resultMap;
//	}
	
	@RequestMapping(value = "module/CMN/data/select.json", method = RequestMethod.POST, headers = "Accept=application/json-rpc")
	public @ResponseBody
	Map<String, Object> another_select(@RequestBody Map<String, Object> request, HttpServletResponse response) {
		String table = (String) request.get("table");
		String[] selects = (String[]) request.get("selects");
		String[] filters = (String[]) request.get("filters");
		String[] orders = (String[]) request.get("orders");
		Map<String, Object> params = (Map<String, Object>) request.get("params");
		String start = (String) request.get("start");
		String limit = (String) request.get("limit");

		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("total",selectorDao.selectCount(table, filters, params));
		resultMap.put("daoResult",selectorDao.select(table, selects, filters, orders, params, Integer.parseInt(start) ,Integer.parseInt(limit)));
		
		return resultMap;
	}

	@RequestMapping(value = "module/CMN/data/find.json", method = RequestMethod.POST, headers = "Accept=application/json")
	public @ResponseBody
	Map<String, Object> find(@RequestBody Map<String, Object> request, HttpServletResponse response) {
		String table = (String) request.get("table");
		String[] selects = (String[]) request.get("selects");
		String[] filters = (String[]) request.get("filters");
		Map<String, Object> params = (Map<String, Object>) request.get("params");

		return selectorDao.find(table, selects, filters, params);
	}
}
