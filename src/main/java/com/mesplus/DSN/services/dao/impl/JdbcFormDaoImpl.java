package com.mesplus.DSN.services.dao.impl;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.mesplus.DSN.services.dao.FormDao;
import com.mesplus.util.EnumUtils.ReturnType;

//<context:component-scan> 태그를 사용하면 @Component 어노테이션이 적용된 컨트롤러 클래스를 검색하여 Bean으로 등록
@Component
public class JdbcFormDaoImpl implements FormDao {

	private static FormDao globalFormDao = null;
	
	public static FormDao getGlobalFormDao() {
		return globalFormDao;
	}
	
	public JdbcFormDaoImpl()
	{
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

	public List<Map<String, Object>> fscrelNtDao(String fac_id, String func_id, String spd_id, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null || spd_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, spd_id) should not be null.");
		}

		FscrelNt sp = new FscrelNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id, spd_id);

		return (List<Map<String, Object>>) results.get(FscrelNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> fsprelNtDao(String fac_id, String func_id, String spd_id, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null || spd_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, spd_id) should not be null.");
		}

		FsprelNt sp = new FsprelNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id, spd_id);

		return (List<Map<String, Object>>) results.get(FsprelNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> ftrfldNtDao(String fac_id, String func_id, String func_template_id, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null || func_template_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, func_template_id) should not be null.");
		}

		FtrfldNt sp = new FtrfldNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id, func_template_id);

		return (List<Map<String, Object>>) results.get(FtrfldNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> fxtrelNtDao(String fac_id, String func_id, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id) should not be null.");
		}

		FxtrelNt sp = new FxtrelNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id);

		return (List<Map<String, Object>>) results.get(FxtrelNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> grpcolNtDao(String fac_id, String func_id, String lang_falg, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null || lang_falg == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, lang_falg) should not be null.");
		}

		GrpcolNt sp = new GrpcolNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id, lang_falg);

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

	public List<Map<String, Object>> mapdefS2NtDao(String fac_id, String func_id, String admin_user, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null || admin_user == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, admin_user) should not be null.");
		}

		MapdefS2Nt sp = new MapdefS2Nt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id, admin_user);

		return (List<Map<String, Object>>) results.get(MapdefS2Nt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> tabvldNtDao(String fac_id, String func_id, String spd_id, ReturnType rType) throws SQLException {
		if (fac_id == null || func_id == null || spd_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, spd_id) should not be null.");
		}

		TabvldNt sp = new TabvldNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_id, spd_id);

		return (List<Map<String, Object>>) results.get(TabvldNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> usrcolNtDao(String fac_id, String func_id, String grp_usr_id, String lang_flag, ReturnType rType) throws SQLException {
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

	// Call function List
	public List<Map<String, Object>> secfundefNtDao(String fac_id, String func_group, String func_code, String func_type, ReturnType rType) throws SQLException {
		if (fac_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_group, func_code, func_type) should not be null.");
		}

		SecfundefNt sp = new SecfundefNt(dataSource, rType);
		Map<String, Object> results = sp.execute(fac_id, func_group, func_code, func_type);

		return (List<Map<String, Object>>) results.get(SecfundefNt.CUR_REFER_PARAM);
	}

	// rt Test
	public Map<String, Object> dynamicS2RtDao(String status, String func_id, String spd_id, String fac_id, String user_id, String lang_flag, String arrlst,
			ReturnType rType) throws SQLException {
		if (status == null || func_id == null || spd_id == null || fac_id == null || user_id == null || lang_flag == null || arrlst == null) {
			throw new IllegalArgumentException("Parameters(status, func_id, spd_id, fac_id, user_id, lang_flag, arrlst) should not be null");
		}

		DynamicS2Rt sp = new DynamicS2Rt(dataSource, rType);
		Map<String, Object> results = sp.execute(status, func_id, spd_id, fac_id, user_id, lang_flag, arrlst);

		return results;
	}

	public Map<String, Object> testRtDao(String lot_id, String fac_id, String mat_id, String order_id, String user_id, ReturnType rType) throws SQLException {
		if (lot_id == null) {
			throw new IllegalArgumentException("Parameters should not be null");
		}

		TestRt sp = new TestRt(dataSource, rType);
		Map<String, Object> results = sp.execute(lot_id, fac_id, mat_id, order_id, user_id);

		return results;
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
	
	public List<Map<String, Object>> dynamicS2NtDao(String fac_id, String func_id, String spd_id, String col_param, String cond_param, String lang_flag) throws SQLException {
		if (fac_id == null||func_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, spd_id, col_param,cond_param,lang_flag) should not be null.");
		}

		DynamicS2Nt sp = new DynamicS2Nt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id, spd_id, col_param,cond_param,lang_flag);
		
//		Map<String, Object> params = new HashMap<String, Object>();
//		
//		params.put("sqltext1", results.get(DynamicS2Nt.SQLTEXT1_PARAM));
//		params.put("sqltext2", results.get(DynamicS2Nt.SQLTEXT1_PARAM));
//		params.put("sqltext3", results.get(DynamicS2Nt.SQLTEXT1_PARAM));
//		params.put("sqltext4", results.get(DynamicS2Nt.SQLTEXT1_PARAM));
//		params.put("sqltext5", results.get(DynamicS2Nt.SQLTEXT1_PARAM));
//		
		//results.put("sqltext", params);
		return (List<Map<String, Object>>) results.get(DynamicS2Nt.CUR_REFER_PARAM);
	}
}