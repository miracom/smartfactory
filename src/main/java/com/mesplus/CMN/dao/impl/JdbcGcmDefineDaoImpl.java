package com.mesplus.CMN.dao.impl;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.mesplus.CMN.dao.GcmDefineDao;
import com.mesplus.SEC.model.CustomUserDetails;
import com.mesplus.util.SessionUtils;

@Component
public class JdbcGcmDefineDaoImpl implements GcmDefineDao {
	private static final Logger logger = LoggerFactory.getLogger(JdbcGcmDefineDaoImpl.class);
	
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	@Autowired
	public void setDataSource(DataSource dataSource) {
		this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}

	@Override
	public Map<String, Object> select(String table) {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		
		String sql = "SELECT * FROM MGCMTBLDEF WHERE TABLE_NAME = :tableName AND FACTORY =:factory ORDER BY TABLE_NAME ASC";

		Map<String, Object> params = new HashMap<String, Object>();
		params.put("tableName", table);
		params.put("factory", String.valueOf(user.getFactory()));

		return  this.namedParameterJdbcTemplate.queryForMap(sql, params);
	}
}
