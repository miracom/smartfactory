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

public class TbldatNt extends StoredProcedure {
	public static final String A_FAC_ID_PARAM = "a_fac_id";
	public static final String A_TBL_CODE_PARAM = "a_tbl_code";
	public static final String A_LANG_FLAG_PARAM = "a_lang_flag";
	public static final String A_PARAMS_PARAM = "a_params";
	public static final String CUR_REFER_PARAM = "cur.refer";

	private static final String SPROC_NAME = "P_AGCMTBLDAT_NT";
	
	public TbldatNt(DataSource dataSource) throws SQLException {
		super(dataSource, SPROC_NAME);

		declareParameter(new SqlParameter(A_FAC_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(A_TBL_CODE_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(A_LANG_FLAG_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(A_PARAMS_PARAM, Types.VARCHAR));
		
		declareParameter(new SqlOutParameter(CUR_REFER_PARAM, OracleTypes.CURSOR, new RowMapper<Map<String, Object>>() {
			@Override
			public Map<String, Object> mapRow(ResultSet rs, int rowNum) throws SQLException {
				return ResultSetUtils.convertResultSetToMap(rs);
			}
		}));

		compile();
	}

	public Map<String, Object> execute(String a_fac_id, String a_tbl_code, String a_lang_flag, String a_params) {
		Map<String, Object> inputs = new HashMap<String, Object>();
		inputs.put(A_FAC_ID_PARAM, a_fac_id);
		inputs.put(A_TBL_CODE_PARAM, a_tbl_code);
		inputs.put(A_LANG_FLAG_PARAM, a_lang_flag);
		inputs.put(A_PARAMS_PARAM, a_params);

		return super.execute(inputs);
	}
}
