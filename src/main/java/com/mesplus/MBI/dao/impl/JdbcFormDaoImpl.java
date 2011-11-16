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
	
	public List<Map<String, Object>> mapConGenNtDao(String fac_id, String func_id, String lang_flag) throws SQLException {
		if (fac_id == null || func_id == null || lang_flag == null) {
            throw new IllegalArgumentException("Parameters(fac_id, func_id, lang_flag) should not be null.");
        }
		
		MapConGenNt sp = new MapConGenNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id, lang_flag);
		
		return (List<Map<String, Object>>)results.get(MapConGenNt.CUR_REFER_PARAM);
	}
	
	public List<Map<String, Object>> mapDefS2NtDao(String fac_id, String func_id, String admin_user) throws SQLException {
		if (fac_id == null || func_id == null || admin_user == null) {
            throw new IllegalArgumentException("Parameters(fac_id, func_id, admin_user) should not be null.");
        }
		
		MapDefS2Nt sp = new MapDefS2Nt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id, admin_user);
		
		return (List<Map<String, Object>>)results.get(MapDefS2Nt.CUR_REFER_PARAM);
	}
	
	public List<Map<String, Object>> tabVldNtDao(String fac_id, String func_id, String spd_id) throws SQLException {
		if (fac_id == null || func_id == null || spd_id == null) {
            throw new IllegalArgumentException("Parameters(fac_id, func_id, spd_id) should not be null.");
        }
		
		TabVldNt sp = new TabVldNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id, spd_id);
		
		return (List<Map<String, Object>>)results.get(TabVldNt.CUR_REFER_PARAM);
	}
	
	public List<Map<String, Object>> usrColNtDao(String fac_id, String func_id, String grp_usr_id, String lang_flag) throws SQLException {
		if (fac_id == null || func_id == null || grp_usr_id == null || lang_flag == null) {
            throw new IllegalArgumentException("Parameters(fac_id, func_id, grp_usr_id, lang_flag) should not be null.");
        }
		
		UsrColNt sp = new UsrColNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id, grp_usr_id, lang_flag);
		
		return (List<Map<String, Object>>)results.get(UsrColNt.CUR_REFER_PARAM);
	}
	
	public List<Map<String, Object>> usrMapNtDao(String fac_id, String func_id, String grp_usr_id) throws SQLException {
		if (fac_id == null || func_id == null || grp_usr_id == null) {
            throw new IllegalArgumentException("Parameters(fac_id, func_id, grp_usr_id) should not be null.");
        }
		
		UsrMapNt sp = new UsrMapNt(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id, grp_usr_id);
		
		return (List<Map<String, Object>>)results.get(UsrMapNt.CUR_REFER_PARAM);
	}
}
