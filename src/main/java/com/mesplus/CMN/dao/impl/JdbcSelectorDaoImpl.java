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

import com.mesplus.CMN.dao.SelectorDao;
import com.mesplus.CMN.model.Filter;
import com.mesplus.CMN.model.Sorter;

@Component
public class JdbcSelectorDaoImpl implements SelectorDao {
	private static final Logger logger = LoggerFactory.getLogger(JdbcSelectorDaoImpl.class);
	
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	@Autowired
	public void setDataSource(DataSource dataSource) {
		this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}

	private static String buildSelectClause(String[] selects) {
		if (selects == null || selects.length == 0)
			return "SELECT * ";
		return "SELECT " + StringUtils.arrayToDelimitedString(selects, ", ");
	}

	private static String buildWhereClause(List<Filter> filters) {
		if (filters == null || filters.size() == 0)
			return "";

		String[] clause = new String[filters.size()];

		if (filters != null) {
			Iterator<Filter> it = filters.iterator();
			int i = 0;
			while (it.hasNext()) {
				Filter filter = it.next();
				clause[i++] = filter.getProperty() + "=:" + filter.getProperty();
			}
		}

		return " WHERE " + StringUtils.arrayToDelimitedString(clause, " AND ");
	}

	private static String buildOrderByClause(List<Sorter> sorters) {
		if (sorters == null || sorters.size() == 0)
			return "";

		String[] clause = new String[sorters.size()];

		if (sorters != null) {
			Iterator<Sorter> it = sorters.iterator();
			int i = 0;
			while (it.hasNext()) {
				Sorter sorter = it.next();
				clause[i++] = sorter.getProperty() + " " + sorter.getDirection();
			}
		}
		return " ORDER BY " + StringUtils.arrayToDelimitedString(clause, ", ");
	}

	@Override
	public List<Map<String, Object>> select(String table, String[] selects, List<Filter> filters, List<Sorter> orders, int start, int limit) {
		String selectClause = buildSelectClause(selects);
		String whereClause = buildWhereClause(filters);
		String orderbyClause = buildOrderByClause(orders);
		String pStart = Integer.toString(start);
		String pLimit = Integer.toString(start + limit);

		String sql = selectClause + ", ROWNUM RNUM FROM " + table + whereClause + orderbyClause;
		sql = selectClause + " FROM " + "(" + sql + ") WHERE RNUM > " + pStart + " AND RNUM <= " + pLimit;

		Map<String, Object> params = new HashMap<String, Object>();

		if (filters != null) {
			Iterator<Filter> it = filters.iterator();
			while (it.hasNext()) {
				Filter filter = it.next();
				params.put(filter.getProperty(), filter.getValue());
			}
		}

		return this.namedParameterJdbcTemplate.queryForList(sql, params);
	}

	public int selectCount(String table, List<Filter> filters) {
		String whereClause = buildWhereClause(filters);

		String sql = "SELECT COUNT(*) FROM " + table + whereClause;
		
		logger.info(sql);

		Map<String, Object> params = new HashMap<String, Object>();

		if (filters != null) {
			Iterator<Filter> it = filters.iterator();
			while (it.hasNext()) {
				Filter filter = it.next();
				params.put(filter.getProperty(), filter.getValue());
			}
		}

		return this.namedParameterJdbcTemplate.queryForInt(sql, params);
	}

	@Override
	public Map<String, Object> find(String from, String[] selects, List<Filter> filters) {
		String selectClause = buildSelectClause(selects);
		String whereClause = buildWhereClause(filters);

		String sql = selectClause + " FROM " + from + whereClause;

		Map<String, Object> params = new HashMap<String, Object>();

		if (filters != null) {
			Iterator<Filter> it = filters.iterator();
			while (it.hasNext()) {
				Filter filter = it.next();
				params.put(filter.getProperty(), filter.getValue());
			}
		}

		return this.namedParameterJdbcTemplate.queryForMap(sql, params);
	}

}
