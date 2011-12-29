package com.mesplus.ARC.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

import com.mesplus.ARC.dao.OriginalDao;

@Component
public class JdbcOriginalDaoImpl implements OriginalDao{

	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	@Autowired
	@Qualifier("originalDataSource")
	public void setDataSource(DataSource dataSource) {
		this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}
	
	public List<Map<String, Object>> getColumnList(String tableName)
	{
		String columnQuery = 
				" SELECT COLUMN_NAME, DATA_TYPE, DATA_LENGTH" +
				" FROM USER_TAB_COLS WHERE TABLE_NAME = :TABLENAME ORDER BY COLUMN_NAME ";
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("TABLENAME", tableName);
		
		return this.namedParameterJdbcTemplate.queryForList(columnQuery, params);
	}
}
