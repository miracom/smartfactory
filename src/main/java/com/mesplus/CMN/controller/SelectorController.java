package com.mesplus.CMN.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mesplus.CMN.dao.SelectorDao;

@Controller
public class SelectorController {
	private static final Logger logger = LoggerFactory.getLogger(SelectorController.class);

	@Autowired
	private SelectorDao selectorDao;

	@RequestMapping(value = "module/CMN/data/select.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> select(HttpServletRequest request, HttpServletResponse response) {
		String table = (String) request.getParameter("table");
		String[] selects = (String[]) request.getParameterValues("selects");
		String[] filters = (String[]) request.getParameterValues("filters");
		String[] orders = (String[]) request.getParameterValues("orders");
		Map<String, Object> params = null;//(Map<String, Object>) request.getParameter("params");

		return selectorDao.select(table, selects, filters, orders, params);
	}
	
	@RequestMapping(value = "module/CMN/data/select.json", method = RequestMethod.POST, headers = "Accept=application/json")
	public @ResponseBody
	List<Map<String, Object>> another_select(@RequestBody Map<String, Object> request, HttpServletResponse response) {
		String table = (String) request.get("table");
		String[] selects = (String[]) request.get("selects");
		String[] filters = (String[]) request.get("filters");
		String[] orders = (String[]) request.get("orders");
		Map<String, Object> params = (Map<String, Object>) request.get("params");

		return selectorDao.select(table, selects, filters, orders, params);
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
