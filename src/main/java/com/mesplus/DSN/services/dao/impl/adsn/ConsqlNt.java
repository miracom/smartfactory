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

public class ConsqlNt extends StoredProcedure {
	private static final String TAB_ID_PARAM = "tab_id";
	private static final String ADMIN_ID_PARAM = "admin_user";
	public static final String CUR_REFER_PARAM = "cur.refer";

	private static final String SPROC_NAME = "P_DSN_CONSQL_NT";

	private ReturnType RTYPE = ReturnType.NONE;

	private static final Map<String, String> typeMap = TypeConvert.getMappingType();

	public ConsqlNt(DataSource dataSource, ReturnType rType) throws SQLException {
		super(dataSource, SPROC_NAME);

		declareParameter(new SqlParameter(TAB_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(ADMIN_ID_PARAM, Types.VARCHAR));

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

	public Map<String, Object> execute(String tab_id, String admin_user) {
		Map<String, Object> inputs = new HashMap<String, Object>();
		inputs.put(TAB_ID_PARAM, tab_id);
		inputs.put(ADMIN_ID_PARAM, admin_user);

		return super.execute(inputs);
	}
}
