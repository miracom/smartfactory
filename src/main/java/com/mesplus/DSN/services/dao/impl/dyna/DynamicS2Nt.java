package com.mesplus.DSN.services.dao.impl.dyna;

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
import com.mesplus.util.Enums.ReturnType;
import com.mesplus.util.ObjcetMapper;
import com.mesplus.util.TypeConvert;

public class DynamicS2Nt extends StoredProcedure {
	private static final String FAC_ID_PARAM = "fac_id";
	private static final String FUNC_ID_PARAM = "func_id";
	private static final String SPD_ID_PARAM = "spd_id";
	private static final String A_PARAM_PARAM = "a_param";
	private static final String COND_PARAM_PARAM = "cond_param";
	private static final String LANG_FLAG_PARAM = "lang_flag";
	private static final String SQLTEXT1_PARAM = "sqltext1";
	private static final String SQLTEXT2_PARAM = "sqltext2";
	private static final String SQLTEXT3_PARAM = "sqltext3";
	private static final String SQLTEXT4_PARAM = "sqltexT4";
	private static final String SQLTEXT5_PARAM = "sqltext5";
	public static final String CUR_REFER_PARAM = "cur.refer";

	private static final String SPROC_NAME = "P_DSN_DYNAMIC_S2_NT";
	
	private ReturnType RTYPE = ReturnType.NONE;
	
	private static final Map<String, String> typeMap = TypeConvert.getMappingType();

	public DynamicS2Nt(DataSource dataSource, ReturnType rType) throws SQLException {
		super(dataSource, SPROC_NAME);

		declareParameter(new SqlParameter(FAC_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(FUNC_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(SPD_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(A_PARAM_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(COND_PARAM_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(LANG_FLAG_PARAM, Types.VARCHAR));

		declareParameter(new SqlOutParameter(SQLTEXT1_PARAM, Types.VARCHAR));
		declareParameter(new SqlOutParameter(SQLTEXT2_PARAM, Types.VARCHAR));
		declareParameter(new SqlOutParameter(SQLTEXT3_PARAM, Types.VARCHAR));
		declareParameter(new SqlOutParameter(SQLTEXT4_PARAM, Types.VARCHAR));
		declareParameter(new SqlOutParameter(SQLTEXT5_PARAM, Types.VARCHAR));
		
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

	public Map<String, Object> execute(String fac_id, String func_id, String spd_id, String a_param, String cond_param, String lang_flag) 
			throws Exception {
		Map<String, Object> inputs = new HashMap<String, Object>();
		inputs.put(FAC_ID_PARAM, fac_id);
		inputs.put(FUNC_ID_PARAM, func_id);
		inputs.put(SPD_ID_PARAM, spd_id);
		inputs.put(A_PARAM_PARAM, a_param);
		inputs.put(COND_PARAM_PARAM, cond_param);
		inputs.put(LANG_FLAG_PARAM, lang_flag);

		return super.execute(inputs);
	}
}
