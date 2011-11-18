package com.mesplus.MBI.dao.impl;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.mesplus.MBI.dao.FormDao;

//<context:component-scan> 태그를 사용하면 @Component 어노테이션이 적용된 컨트롤러 클래스를 검색하여 Bean으로 등록
@Component
public class JdbcFormDaoImpl implements FormDao {

	@Autowired
	private DataSource dataSource;
	private JdbcTemplate jdbcTemplate;

	public JdbcTemplate getJdbcTemplate() {
		if (jdbcTemplate == null)
			jdbcTemplate = new JdbcTemplate(dataSource);
		return jdbcTemplate;
	}

	public List<Map<String, Object>> assdefGenNtDao(String fac_id, String func_id) throws SQLException {
		if (fac_id == null || func_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id) should not be null.");
		}

		AssdefGenNt sp = new AssdefGenNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id);

		return (List<Map<String, Object>>) results.get(AssdefGenNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> chtinfNtDao(String fac_id, String func_id) throws SQLException {
		if (fac_id == null || func_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id) should not be null.");
		}

		ChtinfNt sp = new ChtinfNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id);

		return (List<Map<String, Object>>) results.get(ChtinfNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> consqlGenNtDao(String fac_id, String func_id) throws SQLException {
		if (fac_id == null || func_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id) should not be null.");
		}

		ConsqlGenNt sp = new ConsqlGenNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id);

		return (List<Map<String, Object>>) results.get(ConsqlGenNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> fscrelNtDao(String fac_id, String func_id, String spd_id) throws SQLException {
		if (fac_id == null || func_id == null || spd_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, spd_id) should not be null.");
		}

		FscrelNt sp = new FscrelNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id, spd_id);

		return (List<Map<String, Object>>) results.get(FscrelNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> fsprelNtDao(String fac_id, String func_id, String spd_id) throws SQLException {
		if (fac_id == null || func_id == null || spd_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, spd_id) should not be null.");
		}

		FsprelNt sp = new FsprelNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id, spd_id);

		return (List<Map<String, Object>>) results.get(FsprelNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> ftrfldNtDao(String fac_id, String func_id, String func_template_id) throws SQLException {
		if (fac_id == null || func_id == null || func_template_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, func_template_id) should not be null.");
		}

		FtrfldNt sp = new FtrfldNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id, func_template_id);

		return (List<Map<String, Object>>) results.get(FtrfldNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> fxtrelNtDao(String fac_id, String func_id) throws SQLException {
		if (fac_id == null || func_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id) should not be null.");
		}

		FxtrelNt sp = new FxtrelNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id);

		return (List<Map<String, Object>>) results.get(FxtrelNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> grpcolNtDao(String fac_id, String func_id, String lang_falg) throws SQLException {
		if (fac_id == null || func_id == null || lang_falg == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, lang_falg) should not be null.");
		}

		GrpcolNt sp = new GrpcolNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id, lang_falg);

		return (List<Map<String, Object>>) results.get(GrpcolNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> grpmapNtDao(String fac_id, String func_id) throws SQLException {
		if (fac_id == null || func_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id) should not be null.");
		}

		GrpmapNt sp = new GrpmapNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id);

		return (List<Map<String, Object>>) results.get(GrpmapNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> mapconGenNtDao(String fac_id, String func_id, String lang_flag) throws SQLException {
		if (fac_id == null || func_id == null || lang_flag == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, lang_flag) should not be null.");
		}

		MapconGenNt sp = new MapconGenNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id, lang_flag);

		return (List<Map<String, Object>>) results.get(MapconGenNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> mapdefS2NtDao(String fac_id, String func_id, String admin_user) throws SQLException {
		if (fac_id == null || func_id == null || admin_user == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, admin_user) should not be null.");
		}

		MapdefS2Nt sp = new MapdefS2Nt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id, admin_user);

		return (List<Map<String, Object>>) results.get(MapdefS2Nt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> tabvldNtDao(String fac_id, String func_id, String spd_id) throws SQLException {
		if (fac_id == null || func_id == null || spd_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, spd_id) should not be null.");
		}

		TabvldNt sp = new TabvldNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id, spd_id);

		return (List<Map<String, Object>>) results.get(TabvldNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> usrcolNtDao(String fac_id, String func_id, String grp_usr_id, String lang_flag) throws SQLException {
		if (fac_id == null || func_id == null || grp_usr_id == null || lang_flag == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, grp_usr_id, lang_flag) should not be null.");
		}

		UsrcolNt sp = new UsrcolNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id, grp_usr_id, lang_flag);

		return (List<Map<String, Object>>) results.get(UsrcolNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> usrmapNtDao(String fac_id, String func_id, String grp_usr_id) throws SQLException {
		if (fac_id == null || func_id == null || grp_usr_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_id, grp_usr_id) should not be null.");
		}

		UsrmapNt sp = new UsrmapNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id, grp_usr_id);

		return (List<Map<String, Object>>) results.get(UsrmapNt.CUR_REFER_PARAM);
	}

	public List<Map<String, Object>> secfundefNtDao(String fac_id, String func_group, String func_code, String func_type) throws SQLException {
		if (fac_id == null) {
			throw new IllegalArgumentException("Parameters(fac_id, func_group, func_code, func_type) should not be null.");
		}

		SecfundefNt sp = new SecfundefNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_group, func_code, func_type);

		return (List<Map<String, Object>>) results.get(SecfundefNt.CUR_REFER_PARAM);
	}
}
