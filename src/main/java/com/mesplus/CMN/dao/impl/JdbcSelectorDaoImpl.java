package com.mesplus.CMN.dao.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.mesplus.CMN.dao.SelectorDao;

@Component
public class JdbcSelectorDaoImpl implements SelectorDao {
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	@Autowired
	public void setDataSource(DataSource dataSource) {
		this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}

	private static String buildSelectClause(String[] selects) {
		if(selects == null || selects.length == 0)
			return "SELECT * ";
		return "SELECT " + StringUtils.arrayToDelimitedString(selects, ", ");
	}
	
	private static String buildWhereClause(String[] filters, Map<String, Object> parameters) {
		if(filters == null || filters.length == 0 || parameters == null || parameters.size() == 0)
			return "";
		
		ArrayList<String> clause = new ArrayList<String>();
		for(String field : filters) {
			if(parameters.containsKey(field.toLowerCase()))
				clause.add(field + "=:" + field);
		}
		if(clause.isEmpty())
			return "";
		return " WHERE " + StringUtils.arrayToDelimitedString(clause.toArray(), " AND ");
	}
	
	private static String buildOrderByClause(String[] orders) {
		if(orders == null || orders.length == 0)
			return "";
		
		return " ORDER BY " + StringUtils.arrayToDelimitedString(orders, ", ");
	}
	
	@Override
	public List<Map<String, Object>> select(String table, String[] selects, String[] filters, String[] orders, Map<String, Object> parameters, int start, int limit) {
		String selectClause = buildSelectClause(selects);
		String whereClause = buildWhereClause(filters, parameters);
		String orderbyClause = buildOrderByClause(orders);
		String pStart = Integer.toString(start);
		String pLimit = Integer.toString(start + limit);
		
		String sql = selectClause + ", ROWNUM RNUM FROM " + table + whereClause + orderbyClause;
		sql = selectClause + " FROM " + "(" + sql + ") WHERE RNUM > " + pStart + " AND RNUM <= " + pLimit;
		
		//System.out.println(sql);
		
		return this.namedParameterJdbcTemplate.queryForList(sql, parameters);
	}
	
	public int selectCount(String table, String[] filters, Map<String, Object> parameters) {
		String whereClause = buildWhereClause(filters, parameters);
		
		String sql = "SELECT COUNT(*) FROM " + table + whereClause;
	
		return this.namedParameterJdbcTemplate.queryForInt(sql, parameters);
	}

	@Override
	public Map<String, Object> find(String from, String[] selects, String[] filters, Map<String, Object> parameters) {
		String selectClause = buildSelectClause(selects);
		String whereClause = buildWhereClause(filters, parameters);
		
		String sql = selectClause + " FROM " + from + whereClause;

		return this.namedParameterJdbcTemplate.queryForMap(sql, parameters);
	}

}
