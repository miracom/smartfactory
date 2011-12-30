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
		String columnSelectQuery = 
				" SELECT COLUMN_NAME, DATA_TYPE, DATA_LENGTH" +
				" FROM USER_TAB_COLS " +
				" WHERE TABLE_NAME = UPPER(:TABLENAME) " +
				" ORDER BY COLUMN_NAME ";
		
		String constraintsSelectQuery = 
				" SELECT COLUMN_NAME, B.CONSTRAINT_TYPE" + 
			    " FROM USER_CONS_COLUMNS A, USER_CONSTRAINTS B" +
				" WHERE A.TABLE_NAME = UPPER(:TABLENAME)" +
			    " AND A.TABLE_NAME = B.TABLE_NAME" +
			    " AND A.CONSTRAINT_NAME = B.CONSTRAINT_NAME" +
			    " ORDER BY COLUMN_NAME";
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("TABLENAME", tableName);
		
		List<Map<String, Object>> columnList = this.namedParameterJdbcTemplate.queryForList(columnSelectQuery, params);
		List<Map<String, Object>> constraintsList =this.namedParameterJdbcTemplate.queryForList(constraintsSelectQuery, params);
		
		for (Map<String, Object> constraintsMap : constraintsList) {
			for (Map<String, Object> columnMap : columnList) {
				if(constraintsMap.get("COLUMN_NAME").equals(columnMap.get("COLUMN_NAME")))
				{
					if(columnMap.get("CONSTRAINT_TYPE") == null)
					{
						columnMap.put("CONSTRAINT_TYPE", constraintsMap.get("CONSTRAINT_TYPE"));
					}
					else
					{
						String constraintType = columnMap.get("CONSTRAINT_TYPE") + "/" + constraintsMap.get("CONSTRAINT_TYPE");
						columnMap.put("CONSTRAINT_TYPE", constraintType);
					}
					break;
				}
			}
		}
		
		return columnList;
	}
	
	public List<Map<String, Object>> getTableList(String owner)
	{
		String TableSelectQuery = "SELECT U.TABLE_NAME, C.COMMENTS " +
				" FROM USER_TABLES U, ALL_TAB_COMMENTS C " +
				" WHERE U.TABLE_NAME = C.TABLE_NAME AND C.OWNER = UPPER(:OWNER)" +
				" ORDER BY TABLE_NAME";
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("OWNER", owner);
		
		return this.namedParameterJdbcTemplate.queryForList(TableSelectQuery, params);
	}
}
