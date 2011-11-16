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
}
