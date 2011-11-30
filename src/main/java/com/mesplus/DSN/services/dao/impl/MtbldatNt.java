package com.mesplus.DSN.services.dao.impl;

import java.sql.SQLException;
import java.sql.Types;
import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import oracle.jdbc.OracleTypes;

import org.springframework.jdbc.core.SqlOutParameter;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.object.StoredProcedure;

import com.mesplus.util.EnumUtils.ReturnType;
import com.mesplus.util.ResultSetUtils;

public class MtbldatNt extends StoredProcedure {
	
	public static final String FAC_ID_PARAM = "a_fac_id";
	public static final String TBL_CODE_PARAM = "a_tbl_code";
	public static final String LANG_FLAG_PARAM = "a_lang_flag";
	public static final String A_PARAM = "a_params";
	public static final String CUR_REFER_PARAM = "cur.refer";

	private static final String SPROC_NAME = "P_AGCMTBLDAT_NT";

	public MtbldatNt(DataSource dataSource, ReturnType rType) throws SQLException {
		super(dataSource, SPROC_NAME);

		declareParameter(new SqlParameter(FAC_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(TBL_CODE_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(LANG_FLAG_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(A_PARAM, Types.VARCHAR));
		
		if(rType == ReturnType.OBJECT)
		{
			declareParameter(new SqlOutParameter(CUR_REFER_PARAM, OracleTypes.CURSOR, ResultSetUtils.getRowMapperObject()));
		}
		else if(rType == ReturnType.ELEMENT)
		{
			declareParameter(new SqlOutParameter(CUR_REFER_PARAM, OracleTypes.CURSOR, ResultSetUtils.getRowMapperElement()));
		}
		else
		{
			throw new SQLException("ReturnType Error: " + rType.toString());
		}

		compile();
	}
	
	
	//a_fac_id, a_tbl_code, a_lang_flag, a_params
	public Map<String, Object> execute(String a_fac_id, String a_tbl_code, String a_lang_flag, String a_params) {
		Map<String, Object> inputs = new HashMap<String, Object>();
		inputs.put(FAC_ID_PARAM, a_fac_id);
		inputs.put(TBL_CODE_PARAM, a_tbl_code);
		inputs.put(LANG_FLAG_PARAM, a_lang_flag);
		inputs.put(A_PARAM, a_params);

		return super.execute(inputs);
	}
}


