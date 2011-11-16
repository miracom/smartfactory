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

	@RequestMapping(value = "module/MBI/data/assdef_gen_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> assdefGenNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String fac_id = request.getParameter("fac_id");
		String func_id = request.getParameter("func_id");

		return formDao.assdefGenNtDao(fac_id, func_id);
	}

	@RequestMapping(value = "module/MBI/data/chtinf_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> chtinfNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String fac_id = request.getParameter("fac_id");
		String func_id = request.getParameter("func_id");

		return formDao.chtinfNtDao(fac_id, func_id);
	}

	@RequestMapping(value = "module/MBI/data/consql_gen_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> consqlGenNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String fac_id = request.getParameter("fac_id");
		String func_id = request.getParameter("func_id");

		return formDao.consqlGenNtDao(fac_id, func_id);
	}

	@RequestMapping(value = "module/MBI/data/fscrel_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> fscrelNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String fac_id = request.getParameter("fac_id");
		String func_id = request.getParameter("func_id");
		String spd_id = request.getParameter("spd_id");

		return formDao.fscrelNtDao(fac_id, func_id, spd_id);
	}
}
