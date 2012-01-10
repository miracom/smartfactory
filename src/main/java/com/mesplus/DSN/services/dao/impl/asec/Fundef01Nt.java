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

public class Fundef01Nt extends StoredProcedure {

	private static final String FUNC_CODE_PARAM = "func_code";
	public static final String CUR_REFER_PARAM = "cur.refer";
	
	private static final String SPROC_NAME = "P_SEC_FUNDEF01_NT";

	private static ReturnType RTYPE = ReturnType.NONE;
	
	private static final Map<String, String> typeMap = TypeConvert.getMappingType();

	public Fundef01Nt(DataSource dataSource, ReturnType rType) throws SQLException {
		super(dataSource, SPROC_NAME);

		declareParameter(new SqlParameter(FUNC_CODE_PARAM, Types.VARCHAR));
		
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

	public Map<String, Object> execute(String fac_id, String func_group, String func_code, String func_type) {
		Map<String, Object> inputs = new HashMap<String, Object>();
		inputs.put(FUNC_CODE_PARAM, func_code);
		
		return super.execute(inputs);
	}
}
