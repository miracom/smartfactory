package com.mesplus.MBI.dao.impl;

import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;

import com.mesplus.MBI.dao.FormDao;
import com.mesplus.WIP.dao.impl.ControlSQL;

//@Component
public class JdbcFormDaoImpl implements FormDao {

//	@Autowired
	private DataSource dataSource;

	public List<Map<String, Object>> controlSqlGenNT(Map<String, Object> params) {
		ControlSQL sp = new ControlSQL(dataSource);
		
		
		
//		MapSqlParameterSource namedParameters = new MapSqlParameterSource();
//		namedParameters.addValue("fac_id", "83");
//		namedParameters.addValue("func_id", "1027");
//		namedParameters.addValue("out", new SqlOutParameter("rs", oracle.jdbc.OracleTypes.CURSOR));
		
//		Map<String, Object> params = new HashMap<String, Object>();
//		params.put("fac_id",fac_id);
//		params.put("func_id", func_id);

//		return (List<Map<String, Object>>)sp.execute(params.get("fac_id"), params.get("func_id"), params.get("cur.refer");
		return null;
	}
}
