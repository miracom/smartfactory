package com.mesplus.WIP.dao.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.mesplus.WIP.dao.MaterialDao;

@Component
public class JdbcMaterialDaoImpl implements MaterialDao {
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	@Autowired
	public void setDataSource(DataSource dataSource) {
		this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}

	private static String buildSelectClause(String[] selects) {
		if(selects == null || selects.length == 0)
			return "*";
		return StringUtils.arrayToDelimitedString(selects, ", ");
	}
	
	private static String buildWhereClause(String[] filters, Map<String, String> parameters) {
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
	
	@Override
	public List<Map<String, Object>> selectMaterials(String[] selects, Map<String, String> parameters) {
		String[] filters = {"factory", "mat_id", "mat_ver"};
		String selectClause = buildSelectClause(selects);
		String whereClause = buildWhereClause(filters, parameters);
		String sql = "SELECT " + selectClause + " FROM MWIPMATDEF" + whereClause + " ORDER BY MAT_ID";

		return this.namedParameterJdbcTemplate.queryForList(sql, parameters);
	}

	@Override
	public Map<String, Object> findMaterial(String factory, String mat_id, int mat_ver) {
		String sql = "SELECT * FROM MWIPMATDEF WHERE FACTORY=:factory AND MAT_ID=:mat_id AND MAT_VER=:mat_ver";

		MapSqlParameterSource namedParameters = new MapSqlParameterSource();
		namedParameters.addValue("factory", factory);
		namedParameters.addValue("mat_id", mat_id);
		namedParameters.addValue("mat_ver", mat_ver);

		return this.namedParameterJdbcTemplate.queryForMap(sql, namedParameters);
//		return this.namedParameterJdbcTemplate.queryForObject(sql, namedParameters, new RowMapper<Material>() {
//			@Override
//			public Material mapRow(ResultSet rs, int rowNum) throws SQLException {
//				Material mat = new Material();
//				try {
//					PropertyUtils.copyProperties(mat, new ResultSetDynaClass(rs));
//				} catch (Exception e) {
//					e.printStackTrace();
//				}
//				return mat;
//			}
//		});
	}

}
