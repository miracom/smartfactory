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

public class FtrfldNt extends StoredProcedure {
	public static final String FAC_ID_PARAM = "fac_id";
	public static final String FUNC_ID_PARAM = "func_id";
	public static final String FUNC_TEMPLATE_ID_PARAM = "func_template_id";
	public static final String CUR_REFER_PARAM = "cur.refer";

	private static final String SPROC_NAME = "P_ADSNFTRFLD_NT";

	public FtrfldNt(DataSource dataSource, ReturnType rType) throws SQLException {
		super(dataSource, SPROC_NAME);

		declareParameter(new SqlParameter(FAC_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(FUNC_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(FUNC_TEMPLATE_ID_PARAM, Types.VARCHAR));
		
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

	public Map<String, Object> execute(String fac_id, String func_id, String func_template_id) {
		Map<String, Object> inputs = new HashMap<String, Object>();
		inputs.put(FAC_ID_PARAM, fac_id);
		inputs.put(FUNC_ID_PARAM, func_id);
		inputs.put(FUNC_TEMPLATE_ID_PARAM, func_template_id);

		return super.execute(inputs);
	}
}
