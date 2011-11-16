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
	
	@RequestMapping(value = "module/MBI/data/mapcon_gen_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> mapConGenNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String fac_id = request.getParameter("fac_id");
		String func_id = request.getParameter("func_id");
		String lang_flag = request.getParameter("lang_flag");
		
		return formDao.mapConGenNtDao(fac_id, func_id, lang_flag);
	}
	
	@RequestMapping(value = "module/MBI/data/mapdef_s2_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> mapDefS2Nt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String fac_id = request.getParameter("fac_id");
		String func_id = request.getParameter("func_id");
		String admin_user = request.getParameter("admin_user");
		
		return formDao.mapDefS2NtDao(fac_id, func_id, admin_user);
	}
	
	@RequestMapping(value = "module/MBI/data/tabvld_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> tabVldNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String fac_id = request.getParameter("fac_id");
		String func_id = request.getParameter("func_id");
		String spd_id = request.getParameter("spd_id");
		
		return formDao.tabVldNtDao(fac_id, func_id, spd_id);
	}
	
	@RequestMapping(value = "module/MBI/data/usrcol_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> usrColNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String fac_id = request.getParameter("fac_id");
		String func_id = request.getParameter("func_id");
		String grp_usr_id = request.getParameter("grp_usr_id");
		String lang_flag = request.getParameter("lang_flag");
		
		return formDao.usrColNtDao(fac_id, func_id, grp_usr_id, lang_flag);
	}
	
	@RequestMapping(value = "module/MBI/data/usrmap_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> usrMapNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String fac_id = request.getParameter("fac_id");
		String func_id = request.getParameter("func_id");
		String grp_usr_id = request.getParameter("grp_usr_id");
		
		return formDao.usrMapNtDao(fac_id, func_id, grp_usr_id);
	}
}
