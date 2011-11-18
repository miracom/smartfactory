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

public class Mapdefs2Nt extends StoredProcedure {

	public static final String FAC_ID_PARAM = "fac_id";
	public static final String FUNC_ID_PARAM = "func_id";
	public static final String ADMIN_USER_PARAM = "admin_user";
	public static final String CUR_REFER_PARAM = "cur.refer";

	private static final String SPROC_NAME = "P_ADSNMAPDEF_S2_NT";

	public Mapdefs2Nt(DataSource dataSource) throws SQLException {
		super(dataSource, SPROC_NAME);

		declareParameter(new SqlParameter(FAC_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(FUNC_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(ADMIN_USER_PARAM, Types.VARCHAR));
		declareParameter(new SqlOutParameter(CUR_REFER_PARAM, OracleTypes.CURSOR, new RowMapper<Map<String, Object>>() {
			@Override
			public Map<String, Object> mapRow(ResultSet rs, int rowNum) throws SQLException {
				return ResultSetUtils.convertResultSetToMap(rs);
			}
		}));

		compile();
	}

	public Map<String, Object> execute(String fac_id, String func_id, String admin_user) {
		Map<String, Object> inputs = new HashMap<String, Object>();
		inputs.put(FAC_ID_PARAM, fac_id);
		inputs.put(FUNC_ID_PARAM, func_id);
		inputs.put(ADMIN_USER_PARAM, admin_user);

		return super.execute(inputs);
	}

}
