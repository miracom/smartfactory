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

public class DynamicS2Nt extends StoredProcedure {
	public static final String FAC_ID_PARAM = "fac_id";
	public static final String FUNC_ID_PARAM = "func_id";
	public static final String SPD_ID_PARAM = "spd_id";
	public static final String COL_PARAM_PARAM = "col_param";
	public static final String COND_PARAM_PARAM = "cond_param";
	public static final String LANG_FLAG_PARAM = "lang_flag";
	public static final String SQLTEXT1_PARAM = "sqltext1";
	public static final String SQLTEXT2_PARAM = "sqltext2";
	public static final String SQLTEXT3_PARAM = "sqltext3";
	public static final String SQLTEXT4_PARAM = "sqltexT4";
	public static final String SQLTEXT5_PARAM = "sqltext5";
	
	public static final String CUR_REFER_PARAM = "cur.refer";

	private static final String SPROC_NAME = "P_DYNAMIC_S2_NT";

	public DynamicS2Nt(DataSource dataSource) throws SQLException {
		super(dataSource, SPROC_NAME);

		declareParameter(new SqlParameter(FAC_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(FUNC_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(SPD_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(COL_PARAM_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(COND_PARAM_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(LANG_FLAG_PARAM, Types.VARCHAR));

		declareParameter(new SqlOutParameter(SQLTEXT1_PARAM, Types.VARCHAR));
		declareParameter(new SqlOutParameter(SQLTEXT2_PARAM, Types.VARCHAR));
		declareParameter(new SqlOutParameter(SQLTEXT3_PARAM, Types.VARCHAR));
		declareParameter(new SqlOutParameter(SQLTEXT4_PARAM, Types.VARCHAR));
		declareParameter(new SqlOutParameter(SQLTEXT5_PARAM, Types.VARCHAR));
		declareParameter(new SqlOutParameter(CUR_REFER_PARAM, OracleTypes.CURSOR, new RowMapper<Map<String, Object>>() {
			@Override
			public Map<String, Object> mapRow(ResultSet rs, int rowNum) throws SQLException {
				return ResultSetUtils.convertResultSetToMap(rs);
			}
		}));

		compile();
	}

	public Map<String, Object> execute(String fac_id, String func_id, String spd_id, String col_param, String cond_param, String lang_flag) {
		Map<String, Object> inputs = new HashMap<String, Object>();
		inputs.put(FAC_ID_PARAM, fac_id);
		inputs.put(FUNC_ID_PARAM, func_id);
		inputs.put(SPD_ID_PARAM, spd_id);
		inputs.put(COL_PARAM_PARAM, col_param);
		inputs.put(COND_PARAM_PARAM, cond_param);
		inputs.put(LANG_FLAG_PARAM, lang_flag);

		return super.execute(inputs);
	}
}
