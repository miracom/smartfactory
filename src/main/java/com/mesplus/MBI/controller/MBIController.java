package com.mesplus.MBI.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mesplus.MBI.dao.QueryDao;
import com.mesplus.MBI.model.Query;

@Controller
public class MBIController {

	@Autowired
	private QueryDao queryDao;

	@RequestMapping(value = "module/MBI/data/queries.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> menus(HttpServletRequest request, HttpServletResponse response) {
		String factory = request.getParameter("factory");

		return queryDao.selectQueries(factory);
	}
	
	@RequestMapping(value = "module/MBI/data/query.json", method = RequestMethod.GET)
	public @ResponseBody
	Query favorites(HttpServletRequest request, HttpServletResponse response) {
		String factory = request.getParameter("factory");
		String queryid = request.getParameter("queryid");

		return queryDao.findQuery(factory, queryid);
	}
}
