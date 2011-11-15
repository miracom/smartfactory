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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mesplus.WIP.dao.MaterialDao;
import com.mesplus.smartfactory.HomeController;

@Controller
public class MaterialController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	@Autowired
	private MaterialDao materialDao;

	@RequestMapping(value = "module/WIP/data/materials.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> materials(HttpServletRequest request, HttpServletResponse response) {
		String[] selects = (String[])request.getParameterValues("selects");
		
		Map<String, String> params = new HashMap<String, String>();
		params.put("factory", "FAB");
//		return materialDao.selectMaterials(new String[] { "factory", "mat_id", "mat_ver" }, params);
		return materialDao.selectMaterials(selects, params);
	}

	@RequestMapping(value = "module/WIP/data/materials.json", method = RequestMethod.POST, headers = "Accept=application/json")
	public @ResponseBody
	List<Map<String, Object>> another_materials(@RequestBody Map<String, Object> request, HttpServletResponse response) {
		String[] selects = (String[])request.get("selects");
		return materialDao.selectMaterials(selects, null);
	}

	@RequestMapping(value = "module/WIP/data/material.json", method = RequestMethod.GET)
	public @ResponseBody
	Map<String, Object> material(HttpServletRequest request, HttpServletResponse response) {
		String factory = request.getParameter("factory");
		String mat_id = request.getParameter("mat_id");
		String mat_ver = request.getParameter("mat_ver");

		return materialDao.findMaterial(factory, mat_id, Integer.parseInt(mat_ver));
	}
}
