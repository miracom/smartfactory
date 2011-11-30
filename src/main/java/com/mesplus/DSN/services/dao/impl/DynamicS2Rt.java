package com.mesplus.DSN.services.dao.impl;

import java.sql.SQLException;
import java.sql.Types;
import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.jdbc.core.SqlOutParameter;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.object.StoredProcedure;

import com.mesplus.util.EnumUtils.ReturnType;

public class DynamicS2Rt extends StoredProcedure {
	public static final String STATUS_PARAM = "status";
	public static final String FUNC_ID_PARAM = "func_id";
	public static final String SPD_ID_PARAM = "spd_id";
	public static final String FAC_ID_PARAM = "fac_id";
	public static final String USER_ID_PARAM = "user_id";
	public static final String LANG_FLAG_PARAM = "lang_flag";
	public static final String ARRLST_PARAM = "arrlst";

	public static final String SQLTEXT_PARAM = "sqltext";
	public static final String OUT_NEW_ID_PARAM = "out_new_id";
	public static final String RETURN_MSG_PARAM = "return_msg";

	private static final String SPROC_NAME = "P_DYNAMIC_S2_RT";

	public DynamicS2Rt(DataSource dataSource, ReturnType rType) throws SQLException {
		super(dataSource, SPROC_NAME);

		declareParameter(new SqlParameter(STATUS_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(FUNC_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(SPD_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(FAC_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(USER_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(LANG_FLAG_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(ARRLST_PARAM, Types.VARCHAR));

		declareParameter(new SqlOutParameter(SQLTEXT_PARAM, Types.VARCHAR));
		declareParameter(new SqlOutParameter(OUT_NEW_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlOutParameter(RETURN_MSG_PARAM, Types.VARCHAR));

		compile();
	}

	public Map<String, Object> execute(String status, String func_id, String spd_id, String fac_id, String user_id, String lang_flag, String arrlst) {
		Map<String, Object> inputs = new HashMap<String, Object>();
		inputs.put(STATUS_PARAM, status);
		inputs.put(FUNC_ID_PARAM, func_id);
		inputs.put(SPD_ID_PARAM, spd_id);
		inputs.put(FAC_ID_PARAM, fac_id);
		inputs.put(USER_ID_PARAM, user_id);
		inputs.put(LANG_FLAG_PARAM, lang_flag);
		inputs.put(ARRLST_PARAM, arrlst);

		return super.execute(inputs);
	}
}
