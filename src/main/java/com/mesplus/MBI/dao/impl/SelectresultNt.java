package com.mesplus.MBI.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import oracle.jdbc.OracleTypes;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.SqlOutParameter;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.object.StoredProcedure;

import com.mesplus.util.ResultSetUtils;

public class SelectresultNt extends StoredProcedure {
	public static final String A_SQL_TXT1_PARAM = "a_sql_txt1";
	public static final String A_SQL_TXT2_PARAM = "a_sql_txt2";
	public static final String A_SQL_TXT3_PARAM = "a_sql_txt3";
	public static final String A_SQL_TXT4_PARAM = "a_sql_txt4";
	public static final String A_SQL_TXT5_PARAM = "a_sql_txt5";
	public static final String CUR_REFER_PARAM = "cur.refer";

	private static final String SPROC_NAME = "P_GETSELECTRESULT_NT";

	public SelectresultNt(DataSource dataSource) throws SQLException {
		super(dataSource, SPROC_NAME);

		declareParameter(new SqlParameter(A_SQL_TXT1_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(A_SQL_TXT2_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(A_SQL_TXT3_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(A_SQL_TXT4_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(A_SQL_TXT5_PARAM, Types.VARCHAR));

		declareParameter(new SqlOutParameter(CUR_REFER_PARAM, OracleTypes.CURSOR, new RowMapper<Map<String, Object>>() {
			@Override
			public Map<String, Object> mapRow(ResultSet rs, int rowNum) throws SQLException {
				return ResultSetUtils.convertResultSetToMap(rs);
			}
		}));

		compile();
	}

	public Map<String, Object> execute(String a_sql_txt1, String a_sql_txt2, String a_sql_txt3, String a_sql_txt4, String a_sql_txt5) {
		Map<String, Object> inputs = new HashMap<String, Object>();
		inputs.put(A_SQL_TXT1_PARAM, a_sql_txt1);
		inputs.put(A_SQL_TXT2_PARAM, a_sql_txt2);
		inputs.put(A_SQL_TXT3_PARAM, a_sql_txt3);
		inputs.put(A_SQL_TXT4_PARAM, a_sql_txt4);
		inputs.put(A_SQL_TXT5_PARAM, a_sql_txt5);

		return super.execute(inputs);
	}
}
