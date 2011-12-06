package com.mesplus.MBI.controller;

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

import com.mesplus.MBI.dao.FormDao;
import com.mesplus.SEC.model.CustomUserDetails;
import com.mesplus.smartfactory.HomeController;
import com.mesplus.util.SessionUtils;

@Controller
public class MBIController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	// TODO 모든 fac_id를  factory code 수정 , lang_flag 수정
	@Autowired
	private FormDao formDao;

	// Test URL:
	// module/MBI/data/get_design.json?fac_id=83&func_id=904&spd_id=1&func_template_id=&lang_flag=1&admin_user=ADMIN&grp_user_id=
	@RequestMapping(value = "module/MBI/data/get_design.json", method = RequestMethod.GET)
	public @ResponseBody
	Map<String, Object> getDesign(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		CustomUserDetails user = SessionUtils.currentUserDetails();
		// TODO fac_id => factory code	
		String fac_id = String.valueOf(user.getFac_id());
		
		String func_id = request.getParameter("func_id");
		String spd_id = request.getParameter("spd_id");
		String func_template_id = request.getParameter("func_template_id");
		String lang_flag = "1";
		String admin_user = user.getUser_id();
		String grp_user_id = "";

		Map<String, Object> design = new HashMap<String, Object>();

		design.put("fsprelNt", formDao.fsprelNtDao(fac_id, func_id, spd_id));
		design.put("ftrfldNt", formDao.ftrfldNtDao(fac_id, func_id, func_template_id));
		design.put("fxtrelNt", formDao.fxtrelNtDao(fac_id, func_id));
		design.put("grpcolNt", formDao.grpcolNtDao(fac_id, func_id, lang_flag));
		design.put("grpmapNt", formDao.grpmapNtDao(fac_id, func_id));
		design.put("assdefGenNt", formDao.assdefGenNtDao(fac_id, func_id));
		design.put("chtinfNt", formDao.chtinfNtDao(fac_id, func_id));
		design.put("consqlGenNt", formDao.consqlGenNtDao(fac_id, func_id));
		design.put("fscrelNt", formDao.fscrelNtDao(fac_id, func_id, spd_id));
		design.put("mapconGenNt", formDao.mapconGenNtDao(fac_id, func_id, lang_flag));
		design.put("mapdefS2Nt", formDao.mapdefS2NtDao(fac_id, func_id, admin_user));
		design.put("tabvldNt", formDao.tabvldNtDao(fac_id, func_id, spd_id));
		design.put("usrcolNt", formDao.usrcolNtDao(fac_id, func_id, grp_user_id, lang_flag));
		design.put("usrmapNt", formDao.usrmapNtDao(fac_id, func_id, grp_user_id));

		return design;
	}

	@RequestMapping(value = "module/MBI/data/consql_gen_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> consqlGenNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		// TODO fac_id => factory code	
		String fac_id = String.valueOf(user.getFac_id());
		
		String func_id = request.getParameter("func_id");

		return formDao.consqlGenNtDao(fac_id, func_id);
	}

	@RequestMapping(value = "module/MBI/data/fscrel_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> fscrelNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		// TODO fac_id => factory code	
		String fac_id = String.valueOf(user.getFac_id());
		
		String func_id = request.getParameter("func_id");
		String spd_id = request.getParameter("spd_id");

		return formDao.fscrelNtDao(fac_id, func_id, spd_id);
	}

	@RequestMapping(value = "module/MBI/data/mapcon_gen_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> mapconGenNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		// TODO fac_id => factory code	
		String fac_id = String.valueOf(user.getFac_id());
		
		String func_id = request.getParameter("func_id");
		String lang_flag = "1";

		return formDao.mapconGenNtDao(fac_id, func_id, lang_flag);
	}

	@RequestMapping(value = "module/MBI/data/mapdef_s2_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> mapdefS2Nt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		// TODO fac_id => factory code	
		String fac_id = String.valueOf(user.getFac_id());
		
		String func_id = request.getParameter("func_id");
		String admin_user = user.getUser_id();

		return formDao.mapdefS2NtDao(fac_id, func_id, admin_user);
	}

	@RequestMapping(value = "module/MBI/data/tabvld_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> tabvldNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		// TODO fac_id => factory code	
		String fac_id = String.valueOf(user.getFac_id());
		
		String func_id = request.getParameter("func_id");
		String spd_id = request.getParameter("spd_id");

		return formDao.tabvldNtDao(fac_id, func_id, spd_id);
	}

	@RequestMapping(value = "module/MBI/data/usrcol_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> usrcolNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		// TODO fac_id => factory code	
		String fac_id = String.valueOf(user.getFac_id());
		
		String func_id = request.getParameter("func_id");
		String grp_usr_id = "";
		String lang_flag = "1";

		return formDao.usrcolNtDao(fac_id, func_id, grp_usr_id, lang_flag);
	}

	@RequestMapping(value = "module/MBI/data/usrmap_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> usrmapNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		// TODO fac_id => factory code	
		String fac_id = String.valueOf(user.getFac_id());
		
		String func_id = request.getParameter("func_id");
		String grp_usr_id = "";

		return formDao.usrmapNtDao(fac_id, func_id, grp_usr_id);
	}

	// Test URL: module/MBI/data/fsprel_nt.json?fac_id=83&func_id=904&spd_id=1
	@RequestMapping(value = "module/MBI/data/fsprel_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> fsprelNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		// TODO fac_id => factory code	
		String fac_id = String.valueOf(user.getFac_id());
		
		String func_id = request.getParameter("func_id");
		String spd_id = request.getParameter("spd_id");

		return formDao.fsprelNtDao(fac_id, func_id, spd_id);
	}

	// Test URL:
	// module/MBI/data/ftrfld_nt.json?fac_id=83&func_id=904&func_template_id=1
	@RequestMapping(value = "module/MBI/data/ftrfld_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> ftrfldNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		// TODO fac_id => factory code	
		String fac_id = String.valueOf(user.getFac_id());
		
		String func_id = request.getParameter("func_id");
		String func_template_id = request.getParameter("func_template_id");

		return formDao.ftrfldNtDao(fac_id, func_id, func_template_id);
	}

	// Test URL: module/MBI/data/fxtrel_nt.json?fac_id=83&func_id=904
	@RequestMapping(value = "module/MBI/data/fxtrel_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> fxtrelNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		// TODO fac_id => factory code	
		String fac_id = String.valueOf(user.getFac_id());
		
		String func_id = request.getParameter("func_id");

		return formDao.fxtrelNtDao(fac_id, func_id);
	}

	// Test URL:
	// module/MBI/data/grpcol_nt.json?fac_id=83&func_id=904&lang_falg=1
	@RequestMapping(value = "module/MBI/data/grpcol_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> grpcolNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		// TODO fac_id => factory code	
		String fac_id = String.valueOf(user.getFac_id());
		
		String func_id = request.getParameter("func_id");
		String lang_falg = "1";

		return formDao.grpcolNtDao(fac_id, func_id, lang_falg);
	}

	// Test URL: module/MBI/data/grpmap_nt.json?fac_id=2&func_id=84
	@RequestMapping(value = "module/MBI/data/grpmap_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> grpmapNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		// TODO fac_id => factory code	
		String fac_id = String.valueOf(user.getFac_id());
		
		String func_id = request.getParameter("func_id");

		return formDao.grpmapNtDao(fac_id, func_id);
	}

	@RequestMapping(value = "module/MBI/data/assdef_gen_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> assdefGenNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		// TODO fac_id => factory code	
		String fac_id = String.valueOf(user.getFac_id());
		
		String func_id = request.getParameter("func_id");

		return formDao.assdefGenNtDao(fac_id, func_id);
	}

	@RequestMapping(value = "module/MBI/data/chtinf_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> chtinfNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		// TODO fac_id => factory code	
		String fac_id = String.valueOf(user.getFac_id());
		
		String func_id = request.getParameter("func_id");

		return formDao.chtinfNtDao(fac_id, func_id);
	}

	@RequestMapping(value = "module/MBI/data/secfundef_nt.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> secfundefNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		// TODO fac_id => factory code	
		String fac_id = String.valueOf(user.getFac_id());
		
		String func_group = request.getParameter("func_group");
		String func_code = request.getParameter("func_code");
		String func_type = request.getParameter("func_type");

		return formDao.secfundefNtDao(fac_id, func_group, func_code, func_type);
	}

	//http://localhost:8080/smartfactory/modul/MBI/data/dynamic_s2_rt.json?status=U&func_id=1042&spd_id=1&fac_id=83&user_id=ADMIN&lang_flag=1&arrlst=LOT0001`^55555`^A`^xxxxx
	@RequestMapping(value = "modul/MBI/data/dynamic_s2_rt.json", method = RequestMethod.GET)
	public @ResponseBody
	Map<String, Object> dynamicS2Rt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		// TODO fac_id => factory code	
		String fac_id = String.valueOf(user.getFac_id());
				
		String status = request.getParameter("status");
		String func_id = request.getParameter("func_id");
		String spd_id = request.getParameter("spd_id");
		String user_id = user.getUser_id();
		String lang_flag = "1";
		String arrlst = request.getParameter("arrlst");
		
		return formDao.dynamicS2RtDao(status, func_id, spd_id, fac_id, user_id, lang_flag, arrlst);
	}
	
	//http://localhost:8080/smartfactory/modul/MBI/data/test_rt.json?lot_id=LOT0001&fac_id=1000&mat_id=33333&order_id=kkh&user_id=ADMIN
	@RequestMapping(value = "modul/MBI/data/test_rt.json", method = RequestMethod.GET)
	public @ResponseBody
	Map<String, Object> testRt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		
		String lot_id = request.getParameter("lot_id");
		String fac_id = request.getParameter("fac_id");
		String mat_id = request.getParameter("mat_id");
		String order_id = request.getParameter("order_id");
		String user_id = user.getUser_id();
		
		return formDao.testRtDao(lot_id, fac_id, mat_id, order_id, user_id);
	}
	
	//http://localhost:8080/smartfactory/home/module/MBI/data/dynamic_s2_nt.json?fac_id=83&func_id=1062&spd_id=1&param=''&cond_param=''&lang_flag=1
	@RequestMapping(value = "module/MBI/data/dynamic_s2_nt.json", method = RequestMethod.GET) 
	public @ResponseBody
	List<Map<String, Object>> dynamicS2Nt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		// TODO fac_id => factory code	
		String fac_id = String.valueOf(user.getFac_id());
		
		String func_id = request.getParameter("func_id");
		String spd_id = request.getParameter("spd_id");
		String col_param = request.getParameter("col_param");
		String cond_param = request.getParameter("cond_param");
		String lang_flag = "1";
		
		logger.info("CondParam : " + cond_param);
		
		return formDao.dynamicS2NtDao(fac_id, func_id, spd_id, col_param,cond_param,lang_flag);
	}
	
	@RequestMapping(value = "module/MBI/data/tbldat_nt.json", method = RequestMethod.GET) 
	public @ResponseBody 
	List<Map<String, Object>> tbldatNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		// TODO fac_id => factory code	
		String fac_id = String.valueOf(user.getFac_id());
		
		String tbl_code = request.getParameter("tbl_code");
		String lang_flag = "1";
		String params = request.getParameter("params");
		
		return formDao.tbldatNtDao(fac_id, tbl_code, lang_flag, params);
	}
	
	@RequestMapping(value = "module/MBI/data/selectresult_nt.json", method = RequestMethod.GET) 
	public @ResponseBody  
	List<Map<String, Object>> selectresultNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String a_sql_txt1 = request.getParameter("a_sql_txt1");
		String a_sql_txt2 = request.getParameter("a_sql_txt2");
		String a_sql_txt3 = request.getParameter("a_sql_txt3");
		String a_sql_txt4 = request.getParameter("a_sql_txt4");
		String a_sql_txt5 = request.getParameter("a_sql_txt5");
		
		return formDao.selectresultNtDao(a_sql_txt1, a_sql_txt2, a_sql_txt3, a_sql_txt4, a_sql_txt5);
	}

	@RequestMapping(value = "module/MBI/data/tbldef_nt.json", method = RequestMethod.GET) 
	public @ResponseBody 
	List<Map<String, Object>> tbldefNt(HttpServletRequest request, HttpServletResponse response) throws Exception {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		// TODO fac_id => factory code	
		String fac_id = String.valueOf(user.getFac_id());
		
		String tbl_grp = request.getParameter("a_tbl_grp");
		String tbl_code = request.getParameter("a_tbl_code");

		return formDao.tbldefNtDao(fac_id, tbl_grp,tbl_code);
	}
}
