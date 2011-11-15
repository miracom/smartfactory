package com.mesplus.MBI.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import oracle.jdbc.OracleTypes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.core.SqlReturnResultSet;
import org.springframework.jdbc.object.StoredProcedure;
import org.springframework.stereotype.Component;

import com.mesplus.MBI.dao.FormDao;
import com.mesplus.util.ResultSetUtils;

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

	class ControlSQLProcedure extends StoredProcedure {
		private static final String FAC_ID_PARAM = "fac_id";
		private static final String FUNC_ID_PARAM = "func_id";
		private static final String CUR_REFER_PARAM = "cur.refer";
		
		private static final String SPROC_NAME = "P_ADSNCONSQL_GEN_NT";
		
		public ControlSQLProcedure(DataSource dataSource) throws SQLException {
			super(dataSource, SPROC_NAME);
			
			declareParameter(new SqlParameter(FAC_ID_PARAM, Types.VARCHAR));
			declareParameter(new SqlParameter(FUNC_ID_PARAM, Types.VARCHAR));
			declareParameter(new SqlParameter(CUR_REFER_PARAM, OracleTypes.CURSOR));
					
			declareParameter(new SqlReturnResultSet(CUR_REFER_PARAM, new RowMapper<Map<String, Object>>() {
				@Override
				public Map<String, Object> mapRow(ResultSet rs, int rowNum) throws SQLException {
					return ResultSetUtils.convertResultSetToMap(rs);
				}
			}));
			
			compile();
		}
		
		public Map<String, Object> execute(String fac_id, String func_id) {
			Map<String, Object> inputs = new HashMap<String, Object>();
			inputs.put(FAC_ID_PARAM, fac_id);
			inputs.put(FUNC_ID_PARAM, func_id);
			inputs.put(CUR_REFER_PARAM, new ArrayList());
			
			return super.execute(inputs);
		}
	}
	
	public List<Map<String, Object>> controlSqlGenNT(String fac_id, String func_id) throws SQLException {
		if (fac_id == null || func_id == null) {
            throw new IllegalArgumentException("Parameters(fac_id, func_id) should not be null.");
        }
		
		ControlSQLProcedure sp = new ControlSQLProcedure(dataSource);
		Map<String, Object> results = sp.execute(fac_id, func_id);
		
		return (List<Map<String, Object>>)results.get("cur.refer");
	}
}
