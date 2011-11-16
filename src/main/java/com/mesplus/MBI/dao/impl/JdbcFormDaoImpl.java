package com.mesplus.MBI.dao.impl;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.mesplus.MBI.dao.FormDao;

@Component
public class JdbcFormDaoImpl implements FormDao {

	@Autowired
	private DataSource dataSource;
	private JdbcTemplate jdbcTemplate;
	
	public JdbcTemplate getJdbcTemplate() {
		if(jdbcTemplate == null)
			jdbcTemplate = new JdbcTemplate(dataSource);
		return jdbcTemplate;
	}

	public List<Map<String, Object>> controlSqlGenNT(String fac_id, String func_id) throws SQLException {
		if (fac_id == null || func_id == null) {
            throw new IllegalArgumentException("Parameters(fac_id, func_id) should not be null.");
        }
		
		ControlSQLProcedure sp = new ControlSQLProcedure(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id);
		
		return (List<Map<String, Object>>)results.get(ControlSQLProcedure.CUR_REFER_PARAM);
	}
	
	public List<Map<String, Object>> fsprelNtDao(String fac_id, String func_id, String spd_id) throws SQLException {
		if (fac_id == null || func_id == null || spd_id == null) {
            throw new IllegalArgumentException("Parameters(fac_id, func_id, spd_id) should not be null.");
        }
		
		FsprelNt sp = new FsprelNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id, spd_id);
		
		return (List<Map<String, Object>>)results.get(FsprelNt.CUR_REFER_PARAM);
	}
	
	public List<Map<String, Object>> ftrfldNtDao(String fac_id, String func_id, String func_template_id) throws SQLException {
		if (fac_id == null || func_id == null || func_template_id == null) {
            throw new IllegalArgumentException("Parameters(fac_id, func_id, func_template_id) should not be null.");
        }
		
		FtrfldNt sp = new FtrfldNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id, func_template_id);
		
		return (List<Map<String, Object>>)results.get(FtrfldNt.CUR_REFER_PARAM);
	}
	
	public List<Map<String, Object>> fxtrelNtDao (String fac_id, String func_id) throws SQLException {
		if (fac_id == null || func_id == null) {
            throw new IllegalArgumentException("Parameters(fac_id, func_id) should not be null.");
        }
		
		FxtrelNt sp = new FxtrelNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id);
		
		return (List<Map<String, Object>>)results.get(FxtrelNt.CUR_REFER_PARAM);
	}
	
	public List<Map<String, Object>> grpcolNtDao(String fac_id, String func_id, String lang_falg) throws SQLException {
		if (fac_id == null || func_id == null || lang_falg == null) {
            throw new IllegalArgumentException("Parameters(fac_id, func_id, lang_falg) should not be null.");
        }
		
		GrpcolNt sp = new GrpcolNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id, lang_falg);
		
		return (List<Map<String, Object>>)results.get(GrpcolNt.CUR_REFER_PARAM);
	}
	
	public List<Map<String, Object>> grpmapNtDao(String fac_id, String func_id) throws SQLException {
		if (fac_id == null || func_id == null) {
            throw new IllegalArgumentException("Parameters(fac_id, func_id) should not be null.");
        }
		
		GrpmapNt sp = new GrpmapNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id);
		
		return (List<Map<String, Object>>)results.get(GrpmapNt.CUR_REFER_PARAM);
	}
}
