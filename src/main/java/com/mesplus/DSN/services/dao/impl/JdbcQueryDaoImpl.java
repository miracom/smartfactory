package com.mesplus.DSN.services.dao.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

import com.mesplus.DSN.services.dao.QueryDao;
import com.mesplus.MBI.model.Query;
import com.mesplus.MBI.model.QueryParameter;

@Component
public class JdbcQueryDaoImpl implements QueryDao {

	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	@Autowired
	public void setDataSource(DataSource dataSource) {
		this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}

	@Override
	public List<Map<String, Object>> selectQueries(String factory) {
		String sql = "SELECT * FROM QUERIES WHERE FACTORY=:factory ORDER BY QUERYID";

		Map<String, String> namedParameters = Collections.singletonMap("factory", factory);

		return this.namedParameterJdbcTemplate.queryForList(sql, namedParameters);
	}

	@Override
	public Query findQuery(String factory, String queryid) {
		String sql = "SELECT Q.FACTORY, Q.QUERYID, Q.STATEMENT, Q.COMMANDTYPE, Q.DESCRIPTION, Q.COMMANDTIMEOUT, Q.COMMANDTEXT, QP.NAME,"
				+ "QP.PVALUE, QP.DIRECTION, QP.DBTYPE, QP.PARAM_SIZE, QP.PARAM_IDX "
				+ "FROM QUERIES Q LEFT OUTER JOIN QUERY_PARAMS QP ON Q.FACTORY = QP.FACTORY AND Q.QUERYID = QP.QUERYID "
				+ "WHERE Q.FACTORY=:factory AND Q.QUERYID=:queryid";

		MapSqlParameterSource namedParameters = new MapSqlParameterSource();
		namedParameters.addValue("factory", factory);
		namedParameters.addValue("queryid", queryid);

		List<Map<String, Object>> list = this.namedParameterJdbcTemplate.queryForList(sql, namedParameters);

		Iterator<Map<String, Object>> it = list.iterator();
		Query query = null;

		while (it.hasNext()) {
			Map<String, Object> map = it.next();
			if (query == null) {
				query = new Query();

				query.setFactory(factory);
				query.setQueryid(queryid);
				query.setDescription((String) map.get("description"));
				query.setStatement((String) map.get("statement"));
				query.setCommandtext((String) map.get("commandtext"));
				query.setCommandtimeout(((BigDecimal) map.get("commandtimeout")).intValue());

				query.setParameters(new ArrayList<QueryParameter>());
			}

			String name = (String) map.get("name");
			if (name == null)
				continue;

			QueryParameter parameter = new QueryParameter();
			parameter.setDbtype((String) map.get("dbtype"));
			parameter.setDirection((String) map.get("direction"));
			parameter.setFactory(factory);
			parameter.setParam_idx(((BigDecimal) map.get("param_idx")).intValue());
			parameter.setParam_size(((BigDecimal) map.get("param_size")).intValue());
			parameter.setPvalue((String) map.get("pvalue"));
			parameter.setQueryid((String) map.get("queryid"));

			query.getParameters().add(parameter);
		}

		return query;
	}
}
