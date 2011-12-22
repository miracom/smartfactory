package com.mesplus.CMN.dao.impl;

import java.util.ArrayList;
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

import com.mesplus.CMN.dao.GcmDataDao;
import com.mesplus.CMN.model.Filter;
import com.mesplus.CMN.model.Sorter;
import com.mesplus.CMN.model.Sqlparams;
import com.mesplus.SEC.model.CustomUserDetails;
import com.mesplus.util.SessionUtils;

@Component
public class JdbcGcmDataDaoImpl implements GcmDataDao {
	private static final Logger logger = LoggerFactory.getLogger(JdbcSelectorDaoImpl.class);
	
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	@Autowired
	public void setDataSource(DataSource dataSource) {
		this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}

	
	private static String buildSelectClause(Map<String,Object> gcmDef, int opt) {
		String val = "";
		ArrayList<String> collist = new ArrayList<String>();
		ArrayList<String> namelist = new ArrayList<String>();
		Map<String,Object> gcmDefCol = new HashMap<String, Object>();
		
		for(int i =1; i< 11; i++){
			val = gcmDef.get("KEY_"+i+"_PRT").toString();
			if (!val.trim().equals("")){
				collist.add(val);
				namelist.add("KEY_"+i+" AS "+val);
			}
		}
		for(int i =1; i< 11; i++){
			val = gcmDef.get("DATA_"+i+"_PRT").toString();
			if (!val.trim().equals("")){
				collist.add(val);
				namelist.add("DATA_"+i+" AS "+val);
			}
		}
		String[] selects = new String[namelist.size()];
		if(opt ==1)
		 	namelist.toArray(selects);
		else
			collist.toArray(selects);

		if (selects == null || selects.length == 0)
			return "SELECT * ";
		return "SELECT " + StringUtils.arrayToDelimitedString(selects, ", ");
	}

	private static String buildWhereClause(List<Filter> filters,String table) {
		CustomUserDetails user = SessionUtils.currentUserDetails();
		String baseFilter = " WHERE FACTORY = '" + String.valueOf(user.getFactory()) + "' AND TABLE_NAME LIKE '"+ table +"%'";
		if (filters == null || filters.size() == 0)
			return baseFilter;

		String[] clause = new String[filters.size()];

		if (filters != null) {
			Iterator<Filter> it = filters.iterator();
			int i = 0;
			while (it.hasNext()) {
				Filter filter = it.next();
				clause[i++] = filter.getProperty() + " LIKE :" + filter.getProperty();
			}
		}

		return baseFilter +" AND "+ StringUtils.arrayToDelimitedString(clause, " AND ");
	}

	private static String buildGcmSql(List<Filter> filters, Map<String,Object> gcmDef){
		String sql = "";
		for(int i=1;i<6;i++){
			sql += gcmDef.get("SQL_"+i).toString();
		}
		if (sql.equals(""))
			return "";
		sql = sql.replaceAll("\\$1", ":XA");
		
		//String[] clause = new String[filters.size()];
		ArrayList<String> sqlparams = new ArrayList<String>(); 
		
		if (filters != null) {
			Iterator<Filter> it = filters.iterator();
			int i = 0;
			while (it.hasNext()) {
				Filter filter = it.next();
				String RawProperty = filter.getRawProperty();
				if (RawProperty.charAt(0) != ':'){
					sqlparams.add(filter.getProperty() + " LIKE :" + filter.getProperty());
					//clause[i++] = filter.getProperty() + " LIKE :" + filter.getProperty();
				}
			}
		}
		String[] clause = new String[sqlparams.size()];
		sqlparams.toArray(clause);
		
		if (sql.matches("(?i).*WHERE.*"))
			return sql+" AND "+ StringUtils.arrayToDelimitedString(clause, " AND ");
		else if (clause.length > 0)
			return sql +" WHERE " +StringUtils.arrayToDelimitedString(clause, " AND ");
		return sql;
	}

	@Override
	public List<Map<String, Object>> select(String table, String[] selects, List<Filter> filters, int start, int limit, Map<String,Object> gcmDef, List<Sqlparams> sqlparams) {
		String sql = "";
		String selectClause = buildSelectClause(gcmDef,0);
		String selectClauseAs = "";
		String whereClause = buildWhereClause(filters,table);
		String pStart = Integer.toString(start);
		String pLimit = Integer.toString(start + limit);
		
		Map<String, Object> params = new HashMap<String, Object>();
		
		if(gcmDef.get("USE_SQL_FLAG").toString().equals("Y")){
			sql = buildGcmSql(filters,gcmDef);
			sql = sql.replaceFirst(" FROM ", ", ROWNUM RNUM FROM ");
		}
		else{
			selectClauseAs = buildSelectClause(gcmDef,1);
			whereClause = buildWhereClause(filters,table);
			sql = selectClauseAs + ", ROWNUM RNUM FROM MGCMTBLDAT " + whereClause + " ORDER BY KEY_1 ASC";
		}

		sql = selectClause + " FROM " + "(" + sql + ") WHERE RNUM > " + pStart + " AND RNUM <= " + pLimit;
		
		if (filters != null) {
			Iterator<Filter> it = filters.iterator();
			while (it.hasNext()) {
				Filter filter = it.next();
				params.put(filter.getProperty(), filter.getValue() + "%");
			}
		}
		
		return this.namedParameterJdbcTemplate.queryForList(sql, params);
	}
	
	public int selectCount(String table, List<Filter> filters, Map<String, Object> gcmDef) {
		String whereClause = "";
		String sql = "";
		String sqlFlag = gcmDef.get("USE_SQL_FLAG").toString();
		
		
		if(sqlFlag.equals("Y")){
			sql = buildGcmSql(filters,gcmDef);
			sql = "SELECT COUNT(*) FROM (" + sql +")";
		}
		else{
			whereClause = buildWhereClause(filters,table);
			sql = "SELECT COUNT(*) FROM MGCMTBLDAT "+ whereClause;
		}
		
		Map<String, Object> params = new HashMap<String, Object>();
		
		if (filters != null) {
			Iterator<Filter> it = filters.iterator();
			while (it.hasNext()) {
				Filter filter = it.next();
				params.put(filter.getProperty(), filter.getValue() + "%");
			}
		}
		logger.info(sql);

		return this.namedParameterJdbcTemplate.queryForInt(sql, params);
	}

	@Override
	public Map<String, Object> find(String table,String from, String[] selects, List<Filter> filters, Map<String,Object> gcmDef) {
		String selectClauseAs = buildSelectClause(gcmDef,1);
		String whereClause = buildWhereClause(filters,table);

		String sql = selectClauseAs + " FROM MGCMTBLDAT " + whereClause;

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
