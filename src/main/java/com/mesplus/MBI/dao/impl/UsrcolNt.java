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

public class UsrcolNt extends StoredProcedure {

	public static final String FAC_ID_PARAM = "fac_id";
	public static final String FUNC_ID_PARAM = "func_id";
	public static final String GRP_USR_ID_PARAM = "grp_usr_id";
	public static final String LANG_FLAG_PARAM = "lang_flag";
	public static final String CUR_REFER_PARAM = "cur.refer";

	private static final String SPROC_NAME = "P_ADSNUSRCOL_NT";

	public UsrcolNt(DataSource dataSource) throws SQLException {
		super(dataSource, SPROC_NAME);

		declareParameter(new SqlParameter(FAC_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(FUNC_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(GRP_USR_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(LANG_FLAG_PARAM, Types.VARCHAR));
		declareParameter(new SqlOutParameter(CUR_REFER_PARAM, OracleTypes.CURSOR, new RowMapper<Map<String, Object>>() {
			@Override
			public Map<String, Object> mapRow(ResultSet rs, int rowNum) throws SQLException {
				return ResultSetUtils.convertResultSetToMap(rs);
			}
		}));

		compile();
	}

	public Map<String, Object> execute(String fac_id, String func_id, String grp_usr_id, String lang_flag) {
		Map<String, Object> inputs = new HashMap<String, Object>();
		inputs.put(FAC_ID_PARAM, fac_id);
		inputs.put(FUNC_ID_PARAM, func_id);
		inputs.put(GRP_USR_ID_PARAM, grp_usr_id);
		inputs.put(LANG_FLAG_PARAM, lang_flag);

		return super.execute(inputs);
	}

}
