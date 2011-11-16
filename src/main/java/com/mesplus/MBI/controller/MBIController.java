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

import com.mesplus.MBI.dao.FormDao;

@Controller
public class MBIController {

	@Autowired
	private FormDao formDao;

	@RequestMapping(value = "module/MBI/data/consqls.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> consqls(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String fac_id = request.getParameter("fac_id");
		String func_id = request.getParameter("func_id");

		return formDao.controlSqlGenNT(fac_id, func_id);
	}

	// Test URL: module/MBI/data/fsprel_nt.json?fac_id=83&func_id=904&spd_id=1
	@RequestMapping(value = "module/MBI/data/fsprel_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> fsprelNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String fac_id = request.getParameter("fac_id");
		String func_id = request.getParameter("func_id");
		String spd_id = request.getParameter("spd_id");

		return formDao.fsprelNtDao(fac_id, func_id, spd_id);
	}

	// Test URL: module/MBI/data/ftrfld_nt.json?fac_id=83&func_id=904&func_template_id=1
	@RequestMapping(value = "module/MBI/data/ftrfld_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> ftrfldNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String fac_id = request.getParameter("fac_id");
		String func_id = request.getParameter("func_id");
		String func_template_id = request.getParameter("func_template_id");

		return formDao.ftrfldNtDao(fac_id, func_id, func_template_id);
	}

	// Test URL: module/MBI/data/fxtrel_nt.json?fac_id=83&func_id=904
	@RequestMapping(value = "module/MBI/data/fxtrel_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> fxtrelNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String fac_id = request.getParameter("fac_id");
		String func_id = request.getParameter("func_id");

		return formDao.fxtrelNtDao(fac_id, func_id);
	}

	// Test URL: module/MBI/data/grpcol_nt.json?fac_id=83&func_id=904&lang_falg=1
	@RequestMapping(value = "module/MBI/data/grpcol_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> grpcolNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String fac_id = request.getParameter("fac_id");
		String func_id = request.getParameter("func_id");
		String lang_falg = request.getParameter("lang_falg");

		return formDao.grpcolNtDao(fac_id, func_id, lang_falg);
	}

	// Test URL: module/MBI/data/grpmap_nt.json?fac_id=2&func_id=84
	@RequestMapping(value = "module/MBI/data/grpmap_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> grpmapNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String fac_id = request.getParameter("fac_id");
		String func_id = request.getParameter("func_id");

		return formDao.grpmapNtDao(fac_id, func_id);
	}
}
