package com.mesplus.DSN.services.dao.impl;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.mesplus.DSN.services.dao.FormDao;
import com.mesplus.DSN.services.dao.impl.adsn.nt.AssdefGenNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.AssdefNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.ChtdetNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.ChtinfNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.ColdefNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.ColrevNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.ConsqlGenNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.ConsqlNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.FscrelNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.FsprelNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.FtrdefNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.FtrfldNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.FxtrelNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.GrpcolNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.GrpmapNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.MapconGenNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.MapconNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.MapdefS2Nt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.MapdefSplNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.SvcmbrNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.TabvldNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.TbldefNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.TblsynNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.UsrcolNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.UsrmapNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.XtpdefNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.XtpfldNt;
import com.mesplus.DSN.services.dao.impl.adsn.nt.XtpsheNt;
import com.mesplus.DSN.services.dao.impl.adsn.rt.ColdefRT;
import com.mesplus.DSN.services.dao.impl.adsn.rt.TbldefRt;
import com.mesplus.DSN.services.dao.impl.agcm.MtbldatNt;
import com.mesplus.DSN.services.dao.impl.agcm.TbldatNt;
import com.mesplus.DSN.services.dao.impl.asec.Fundef01Nt;
import com.mesplus.DSN.services.dao.impl.asec.FundefCtrlNt;
import com.mesplus.DSN.services.dao.impl.asec.FundefNt;
import com.mesplus.DSN.services.dao.impl.asec.GetuserloginNt;
import com.mesplus.DSN.services.dao.impl.asec.SecfundefNt;
import com.mesplus.DSN.services.dao.impl.dyna.DynamicS2Nt;
import com.mesplus.DSN.services.dao.impl.dyna.DynamicS2Rt;
import com.mesplus.DSN.services.dao.impl.get.SelectresultNt;
import com.mesplus.util.Enums.ReturnType;
import com.mesplus.util.TypeConvert;

//<context:component-scan> 태그를 사용하면 @Component 어노테이션이 적용된 컨트롤러 클래스를 검색하여 Bean으로 등록
@Component
@SuppressWarnings("unchecked")
public class JdbcFormDaoImpl implements FormDao {

	private static FormDao globalFormDao = null;

	public static FormDao getGlobalFormDao() {
		return globalFormDao;
	}

	public JdbcFormDaoImpl() {
		globalFormDao = this;
	}

	@Autowired
	private DataSource dataSource;
	private JdbcTemplate jdbcTemplate;

	public JdbcTemplate getJdbcTemplate() {
		if (jdbcTemplate == null)
			jdbcTemplate = new JdbcTemplate(dataSource);
		return jdbcTemplate;
	}

	// AGCM
	public List<Map<String, Object>> tbldatNtDao(String fac_id, String tbl_code, String lang_flag, String a_params, ReturnType rType)
			throws SQLException {
		if (fac_id == null || tbl_code == null || lang_flag == null || a_params == null) {
			throw new IllegalArgumentException("Parameters(fac_id, tbl_code, lang_flag, a_params) should not be null.");
		}

		TbldatNt sp = new TbldatNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, tbl_code, lang_flag, a_params);

		return (List<Map<String, Object>>) results.get(TbldatNt.CUR_REFER_PARAM);
	}

	// ASEC
	public List<Map<String, Object>> fundefNtDao(String fac_id, String func_group, String func_code, String function_type, ReturnType rType)
			throws SQLException {
		if (fac_id == null || func_group == null || func_code == null || function_type == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_group, func_code, function_type) should not be null.");
		}

		FundefNt sp = new FundefNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_group, func_code, function_type);

		return (List<Map<String, Object>>) results.get(FundefNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> fundef01NtDao(String func_code, ReturnType rType) throws SQLException {
		if (func_code == null) {
			throw new IllegalArgumentException("Parameters(func_code) should not be null.");
		}

		Fundef01Nt sp = new Fundef01Nt(dataSource, rType);
		Map<String, Object> results = sp.execute(func_code);

		return (List<Map<String, Object>>) results.get(Fundef01Nt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> fundefCtrlNtDao(String fac_id, String grp_id, String usr_id, String fun_id, ReturnType rType)
			throws SQLException {
		if (fac_id == null || grp_id == null || usr_id == null || fun_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, grp_id, usr_id, fun_id) should not be null.");
		}

		FundefCtrlNt sp = new FundefCtrlNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, grp_id, usr_id, fun_id);

		return (List<Map<String, Object>>) results.get(FundefCtrlNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> getuserloginNtDao(String fac_id, String grp_code, String user_id, String password, String lang_flag,
			ReturnType rType) throws SQLException {
		if (fac_id == null || grp_code == null || user_id == null || password == null || lang_flag == null) {
			throw new IllegalArgumentException("Parameters(fac_id, grp_code, user_id, password, lang_flag) should not be null.");
		}

		GetuserloginNt sp = new GetuserloginNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, grp_code, user_id, password, lang_flag);

		return (List<Map<String, Object>>) results.get(GetuserloginNt.CUR_REFER_PARAM);
	}

	// ADSN
	public List<Map<String, Object>> fxtrelNtDao(String fac_id, String func_id, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id) should not be null.");
		}

		FxtrelNt sp = new FxtrelNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id);

		return (List<Map<String, Object>>) results.get(FxtrelNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> mapconNtDao(String fac_id, String func_id, String admin_user, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null || admin_user == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, admin_user ) should not be null.");
		}

		MapconNt sp = new MapconNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id, admin_user);

		return (List<Map<String, Object>>) results.get(AssdefGenNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> mapdefS2NtDao(String fac_id, String func_id, String admin_user, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null || admin_user == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, admin_user) should not be null.");
		}

		MapdefS2Nt sp = new MapdefS2Nt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id, admin_user);

		return (List<Map<String, Object>>) results.get(MapdefS2Nt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> mapdefSplNtDao(String fac_id, String func_id, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id) should not be null.");
		}

		MapdefSplNt sp = new MapdefSplNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id);

		return (List<Map<String, Object>>) results.get(MapdefSplNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> consqlNtDao(String tab_id, String admin_user, ReturnType rType) throws SQLException {
		if (tab_id == null || admin_user == null) {
			throw new IllegalArgumentException("Parameters(tab_id, admin_user) should not be null.");
		}

		ConsqlNt sp = new ConsqlNt(dataSource, rType);
		Map<String, Object> results = sp.execute(tab_id, admin_user);

		return (List<Map<String, Object>>) results.get(ConsqlNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> ftrdefNtDao(String fac_id, String func_id, String spd_id, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null || spd_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, spd_id) should not be null.");
		}

		FtrdefNt sp = new FtrdefNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id, spd_id);

		return (List<Map<String, Object>>) results.get(FtrdefNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> fsprelNtDao(String fac_id, String func_id, String spd_id, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null || spd_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, spd_id) should not be null.");
		}

		FsprelNt sp = new FsprelNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id, spd_id);

		return (List<Map<String, Object>>) results.get(FsprelNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> fscrelNtDao(String fac_id, String func_id, String spd_id, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null || spd_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, spd_id) should not be null.");
		}

		FscrelNt sp = new FscrelNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id, spd_id);

		return (List<Map<String, Object>>) results.get(FscrelNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> chtdetNtDao(String tab_id, ReturnType rType) throws SQLException {
		if (tab_id == null) {
			throw new IllegalArgumentException("Parameters(tab_id) should not be null.");
		}

		ChtdetNt sp = new ChtdetNt(dataSource, rType);
		Map<String, Object> results = sp.execute(tab_id);

		return (List<Map<String, Object>>) results.get(ChtdetNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> assdefNtDao(String tab_id, ReturnType rType) throws SQLException {
		if (tab_id == null) {
			throw new IllegalArgumentException("Parameters(tab_id) should not be null.");
		}

		AssdefNt sp = new AssdefNt(dataSource, rType);
		Map<String, Object> results = sp.execute(tab_id);

		return (List<Map<String, Object>>) results.get(AssdefNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> svcmbrNtDao(String service_id, ReturnType rType) throws SQLException {
		if (service_id == null) {
			throw new IllegalArgumentException("Parameters(service_id) should not be null.");
		}

		SvcmbrNt sp = new SvcmbrNt(dataSource, rType);
		Map<String, Object> results = sp.execute(service_id);

		return (List<Map<String, Object>>) results.get(SvcmbrNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> tbldefNtDao(String fac_id, String tbl_grp, String tbl_code, String physical_table,
			String physical_view, String logical_view, ReturnType rType) throws SQLException {
		if (fac_id == null || tbl_grp == null || tbl_code == null || physical_table == null || physical_view == null
				|| logical_view == null) {
			throw new IllegalArgumentException(
					"Parameters(fac_id, tbl_grp, tbl_code, physical_table, physical_view, logical_view) should not be null.");
		}

		TbldefNt sp = new TbldefNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, tbl_grp, tbl_code, physical_table, physical_view, logical_view);

		return (List<Map<String, Object>>) results.get(TbldefNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> tblsynNtDao(ReturnType rType) throws SQLException {
		TblsynNt sp = new TblsynNt(dataSource, rType);
		Map<String, Object> results = sp.execute();

		return (List<Map<String, Object>>) results.get(TblsynNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> coldefNtDao(String fac_id, String tbl_id, ReturnType rType) throws SQLException {
		if (fac_id == null || tbl_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, tbl_id) should not be null.");
		}

		ColdefNt sp = new ColdefNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, tbl_id);

		return (List<Map<String, Object>>) results.get(ColdefNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> colrevNtDao(String tbl_id, String tbl_name, ReturnType rType) throws SQLException {
		if (tbl_id == null || tbl_name == null) {
			throw new IllegalArgumentException("Parameters(tbl_id, tbl_name) should not be null.");
		}

		ColrevNt sp = new ColrevNt(dataSource, rType);
		Map<String, Object> results = sp.execute(tbl_id, tbl_name);

		return (List<Map<String, Object>>) results.get(ColrevNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> xtpsheNtDao(String template_id, ReturnType rType) throws SQLException {
		if (template_id == null) {
			throw new IllegalArgumentException("Parameters(template_id) should not be null.");
		}

		XtpsheNt sp = new XtpsheNt(dataSource, rType);
		Map<String, Object> results = sp.execute(template_id);

		return (List<Map<String, Object>>) results.get(XtpsheNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> xtpfldNtDao(String sheet_id, ReturnType rType) throws SQLException {
		if (sheet_id == null) {
			throw new IllegalArgumentException("Parameters(sheet_id) should not be null.");
		}

		XtpfldNt sp = new XtpfldNt(dataSource, rType);
		Map<String, Object> results = sp.execute(sheet_id);

		return (List<Map<String, Object>>) results.get(XtpfldNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> xtpdefNtDao(String template_name, String template_filename, ReturnType rType) throws SQLException {
		if (template_name == null || template_filename == null) {
			throw new IllegalArgumentException("Parameters(template_name, template_filename) should not be null.");
		}

		XtpdefNt sp = new XtpdefNt(dataSource, rType);
		Map<String, Object> results = sp.execute(template_name, template_filename);

		return (List<Map<String, Object>>) results.get(XtpdefNt.CUR_REFER_PARAM);
	}

	// GET
	public List<Map<String, Object>> selectresultNtDao(String a_sql_txt1, String a_sql_txt2, String a_sql_txt3, String a_sql_txt4,
			String a_sql_txt5, ReturnType rType) throws SQLException {
		if (a_sql_txt1 == null || a_sql_txt2 == null || a_sql_txt3 == null || a_sql_txt4 == null || a_sql_txt5 == null) {
			throw new IllegalArgumentException("Parameters(a_sql_txt1, a_sql_txt2, a_sql_txt3, a_sql_txt4, a_sql_txt5) should not be null.");
		}

		SelectresultNt sp = new SelectresultNt(dataSource, rType);
		Map<String, Object> results = sp.execute(a_sql_txt1, a_sql_txt2, a_sql_txt3, a_sql_txt4, a_sql_txt5);

		return (List<Map<String, Object>>) results.get(AssdefGenNt.CUR_REFER_PARAM);
	}

	/*
	 * division line
	 */
	public List<Map<String, Object>> assdefGenNtDao(String fac_id, String func_id, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id) should not be null.");
		}

		AssdefGenNt sp = new AssdefGenNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id);

		return (List<Map<String, Object>>) results.get(AssdefGenNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> chtinfNtDao(String fac_id, String func_id, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id) should not be null.");
		}

		ChtinfNt sp = new ChtinfNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id);

		return (List<Map<String, Object>>) results.get(ChtinfNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> consqlGenNtDao(String fac_id, String func_id, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id) should not be null.");
		}

		ConsqlGenNt sp = new ConsqlGenNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id);

		return (List<Map<String, Object>>) results.get(ConsqlGenNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> ftrfldNtDao(String fac_id, String func_id, String func_template_id, ReturnType rType)
			throws SQLException {
		if (fac_id == null || func_id == null || func_template_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, func_template_id) should not be null.");
		}

		FtrfldNt sp = new FtrfldNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id, func_template_id);

		return (List<Map<String, Object>>) results.get(FtrfldNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> grpcolNtDao(String fac_id, String func_id, String lang_flag, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null || lang_flag == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, lang_falg) should not be null.");
		}

		GrpcolNt sp = new GrpcolNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id, lang_flag);

		return (List<Map<String, Object>>) results.get(GrpcolNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> grpmapNtDao(String fac_id, String func_id, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id) should not be null.");
		}

		GrpmapNt sp = new GrpmapNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id);

		return (List<Map<String, Object>>) results.get(GrpmapNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> mapconGenNtDao(String fac_id, String func_id, String lang_flag, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null || lang_flag == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, lang_flag) should not be null.");
		}

		MapconGenNt sp = new MapconGenNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id, lang_flag);

		return (List<Map<String, Object>>) results.get(MapconGenNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> tabvldNtDao(String fac_id, String func_id, String spd_id, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null || spd_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, spd_id) should not be null.");
		}

		TabvldNt sp = new TabvldNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id, spd_id);

		return (List<Map<String, Object>>) results.get(TabvldNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> usrcolNtDao(String fac_id, String func_id, String grp_usr_id, String lang_flag, ReturnType rType)
			throws SQLException {
		if (fac_id == null || func_id == null || grp_usr_id == null || lang_flag == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, grp_usr_id, lang_flag) should not be null.");
		}

		UsrcolNt sp = new UsrcolNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id, grp_usr_id, lang_flag);

		return (List<Map<String, Object>>) results.get(UsrcolNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> usrmapNtDao(String fac_id, String func_id, String grp_usr_id, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null || grp_usr_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, grp_usr_id) should not be null.");
		}

		UsrmapNt sp = new UsrmapNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id, grp_usr_id);

		return (List<Map<String, Object>>) results.get(UsrmapNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> mtbldatNtDao(String a_fac_id, String a_tbl_code, String a_lang_flag, String a_params, ReturnType rType)
			throws SQLException {
		if (a_fac_id == null || a_tbl_code == null || a_lang_flag == null || a_params == null) {
			throw new IllegalArgumentException("Parameters(a_fac_id, a_tbl_code, a_lang_flag, a_params) should not be null");
		}

		MtbldatNt sp = new MtbldatNt(dataSource, rType);
		Map<String, Object> results = sp.execute(a_fac_id, a_tbl_code, a_lang_flag, a_params);

		return (List<Map<String, Object>>) results.get(MtbldatNt.CUR_REFER_PARAM);
	}

	public Map<String, Object> dynamicS2NtDao(String fac_id, String func_id, String spd_id, String col_param, String cond_param,
			String lang_flag, ReturnType rType) throws Exception {
		if (fac_id == null || func_id == null || spd_id == null || col_param == null || cond_param == null || lang_flag == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, spd_id, col_param, cond_param, lang_flag) should not be null.");
		}

		DynamicS2Nt sp = new DynamicS2Nt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id, spd_id, col_param, cond_param, lang_flag);

		return results;
	}

	// Call function List
	public List<Map<String, Object>> secfundefNtDao(String fac_id, String func_group, String func_code, String func_type, ReturnType rType)
			throws SQLException {
		if (fac_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_group, func_code, func_type) should not be null.");
		}

		SecfundefNt sp = new SecfundefNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_group, func_code, func_type);

		return (List<Map<String, Object>>) results.get(SecfundefNt.CUR_REFER_PARAM);
	}

	// RT
	public String tbldefRtDao(List<String> arrParams, String methodName) throws Exception {
		boolean bSuccess = true; //프로시저 복수 실행시 성공여부 flag
		String returnValue = null;
		TbldefRt sp = new TbldefRt(dataSource);
		if(bSuccess)
		{
			returnValue =  sp.execute(arrParams, methodName);
			if (returnValue.equals("1")) {
				bSuccess = true;
			}
			else
			{
				bSuccess = false;
			}
		}
		
		if(bSuccess)
		{
			// 처리성공(Commit)
			dataSource.getConnection().commit();
		}
		else
		{
			// 처리실패(Rollback)
			dataSource.getConnection().rollback();
		}
		
		return returnValue;
	}

	public String coldefRTDao(List<String> arrParams, String methodName) throws Exception {
		boolean bSuccess = true; //프로시저 복수 실행시 성공여부 flag
		String returnValue = null;
		
		ColdefRT sp = new ColdefRT(dataSource);
		if(bSuccess)
		{
			returnValue =  sp.execute(arrParams, methodName);
			if (returnValue.equals("1")) {
				bSuccess = true;
			}
			else
			{
				bSuccess = false;
			}
		}
		
		if(bSuccess)
		{
			// 처리성공(Commit)
			dataSource.getConnection().commit();
		}
		else
		{
			// 처리실패(Rollback)
			dataSource.getConnection().rollback();
		}
		
		return returnValue;
	}

	public Map<String, Object> dynamicS2RtDao(String status, String func_id, String spd_id, String fac_id, String user_id,
			String lang_flag, String arrlst, ReturnType rType) throws Exception {
		if (status == null || func_id == null || spd_id == null || fac_id == null || user_id == null || lang_flag == null || arrlst == null) {
			throw new IllegalArgumentException("Parameters(status, func_id, spd_id, fac_id, user_id, lang_flag, arrlst) should not be null");
		}

		DynamicS2Rt sp = new DynamicS2Rt(dataSource, rType);
		Map<String, Object> results = sp.execute(status, func_id, spd_id, fac_id, user_id, lang_flag, arrlst);

		return results;
	}
}