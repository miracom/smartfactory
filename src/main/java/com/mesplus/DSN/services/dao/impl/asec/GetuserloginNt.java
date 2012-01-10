package com.mesplus.DSN.services.dao.impl.asec;

import java.sql.SQLException;
import java.sql.Types;
import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import oracle.jdbc.OracleTypes;

import org.springframework.jdbc.core.SqlOutParameter;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.object.StoredProcedure;

import com.mesplus.util.ElementMapper;
import com.mesplus.util.TypeConvert;
import com.mesplus.util.Enums.ReturnType;
import com.mesplus.util.ObjcetMapper;

public class GetuserloginNt extends StoredProcedure {

	private static final String FAC_ID_PARAM = "fac_id";
	private static final String GRP_CODE_PARAM = "grp_code";
	private static final String USER_ID_PARAM = "user_id";
	private static final String PASSWORD_PARAM = "password";
	private static final String LANG_FLAG_PARAM = "lang_flag";
	public static final String CUR_REFER_PARAM = "cur.refer";
	
	private static final String SPROC_NAME = "P_ASECFUNDEF_NT";

	private static ReturnType RTYPE = ReturnType.NONE;
	
	private static final Map<String, String> typeMap = TypeConvert.getMappingType();

	public GetuserloginNt(DataSource dataSource, ReturnType rType) throws SQLException {
		super(dataSource, SPROC_NAME);

		declareParameter(new SqlParameter(FAC_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(GRP_CODE_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(USER_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(PASSWORD_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(LANG_FLAG_PARAM, Types.VARCHAR));

		RTYPE = rType;

		if (RTYPE == ReturnType.OBJECT) {
			declareParameter(new SqlOutParameter(CUR_REFER_PARAM, OracleTypes.CURSOR, new ObjcetMapper()));
		} else if (RTYPE == ReturnType.ELEMENT) {
			declareParameter(new SqlOutParameter(CUR_REFER_PARAM, OracleTypes.CURSOR, new ElementMapper(typeMap)));
		} else {
			throw new SQLException("ReturnType Error: " + RTYPE.toString());
		}

		compile();
	}

	public Map<String, Object> execute(String fac_id, String grp_code, String user_id, String password, String lang_flag) {
		Map<String, Object> inputs = new HashMap<String, Object>();
		inputs.put(FAC_ID_PARAM, fac_id);
		inputs.put(GRP_CODE_PARAM, grp_code);
		inputs.put(USER_ID_PARAM, user_id);
		inputs.put(PASSWORD_PARAM, password);
		inputs.put(LANG_FLAG_PARAM, lang_flag);

		return super.execute(inputs);
	}
}
