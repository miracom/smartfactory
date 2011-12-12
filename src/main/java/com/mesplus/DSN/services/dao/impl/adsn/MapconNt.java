package com.mesplus.DSN.services.dao.impl.adsn;

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

public class MapconNt extends StoredProcedure {

	//FAC_ID, FUNC_ID, ADMIN_USER 
	//fac_id, func_id, admin_user 
	private static final String FAC_ID_PARAM = "fac_id";
	private static final String FUNC_ID_PARAM = "func_id";
	private static final String ADMIN_USER_PARAM = "admin_user";
	public static final String CUR_REFER_PARAM = "cur.refer";
	
	private static final String SPROC_NAME = "P_ADSNMAPCON_NT";

	private static ReturnType RTYPE = ReturnType.NONE;
	
	private static final Map<String, String> typeMap = TypeConvert.getMappingType();

	public MapconNt(DataSource dataSource, ReturnType rType) throws SQLException {
		super(dataSource, SPROC_NAME);

		declareParameter(new SqlParameter(FAC_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(FUNC_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(ADMIN_USER_PARAM, Types.VARCHAR));

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

	public Map<String, Object> execute(String fac_id, String func_id, String admin_user ) {
		Map<String, Object> inputs = new HashMap<String, Object>();
		inputs.put(FAC_ID_PARAM, fac_id);
		inputs.put(FUNC_ID_PARAM, func_id);
		inputs.put(ADMIN_USER_PARAM, admin_user);

		return super.execute(inputs);
	}
}
