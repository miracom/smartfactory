package com.mesplus.MBI.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mesplus.MBI.dao.FormDao;

//@Controller
public class MBIController {

	@Autowired
	private FormDao formDao;

	@RequestMapping(value = "module/MBI/data/consqls.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> consqls(HttpServletRequest request, HttpServletResponse response) {
		String fac_id = request.getParameter("fac_id");
		String func_id = request.getParameter("func_id");
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("fac_id",fac_id);
		params.put("func_id", func_id);
		
		return formDao.controlSqlGenNT(params);
	}
}
