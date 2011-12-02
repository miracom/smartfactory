package com.mesplus.MBI.dao.impl;

import java.sql.SQLException;
import java.sql.Types;
import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.jdbc.core.SqlOutParameter;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.object.StoredProcedure;

public class TestRt extends StoredProcedure {
	public static final String LOT_ID_PARAM = "lot_id";
	public static final String FAC_ID_PARAM = "fac_id";
	public static final String MAT_ID_PARAM = "mat_id";
	public static final String ORDER_ID_PARAM = "order_id";
	public static final String USER_ID_PARAM = "user_id";
	
	public static final String SQLTEXT_PARAM = "sqltext";
	public static final String RETURN_MSG_PARAM = "return_msg";

	private static final String SPROC_NAME = "P_TEST_RT";

	public TestRt(DataSource dataSource) throws SQLException {
		super(dataSource, SPROC_NAME);

		declareParameter(new SqlParameter(LOT_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(FAC_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(MAT_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(ORDER_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(USER_ID_PARAM, Types.VARCHAR));

		declareParameter(new SqlOutParameter(SQLTEXT_PARAM, Types.VARCHAR));
		declareParameter(new SqlOutParameter(RETURN_MSG_PARAM, Types.VARCHAR));
		
		compile();
		
	}

	public Map<String, Object> execute(String lot_id, String fac_id, String mat_id, String order_id, String user_id) {
		Map<String, Object> inputs = new HashMap<String, Object>();
		inputs.put(LOT_ID_PARAM, lot_id);
		inputs.put(FAC_ID_PARAM, fac_id);
		inputs.put(MAT_ID_PARAM, mat_id);
		inputs.put(ORDER_ID_PARAM, order_id);
		inputs.put(USER_ID_PARAM, user_id);

		return super.execute(inputs);
	}
	

}
