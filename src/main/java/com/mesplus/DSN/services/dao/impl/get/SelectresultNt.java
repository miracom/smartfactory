package com.mesplus.DSN.services.dao.impl.get;

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

public class SelectresultNt extends StoredProcedure {

	//a_sql_txt1, a_sql_txt2, a_sql_txt3, a_sql_txt4, a_sql_txt5
	//A_SQL_TXT1, A_SQL_TXT2, A_SQL_TXT3, A_SQL_TXT4, A_SQL_TXT5
	private static final String A_SQL_TXT1_PARAM = "a_sql_txt1";
	private static final String A_SQL_TXT2_PARAM = "a_sql_txt2";
	private static final String A_SQL_TXT3_PARAM = "a_sql_txt3";
	private static final String A_SQL_TXT4_PARAM = "a_sql_txt4";
	private static final String A_SQL_TXT5_PARAM = "a_sql_txt5";
	public static final String CUR_REFER_PARAM = "cur.refer";
	
	private static final String SPROC_NAME = "P_ASECFUNDEF_NT";

	private static ReturnType RTYPE = ReturnType.NONE;
	
	private static final Map<String, String> typeMap = TypeConvert.getMappingType();

	public SelectresultNt(DataSource dataSource, ReturnType rType) throws SQLException {
		super(dataSource, SPROC_NAME);

		declareParameter(new SqlParameter(A_SQL_TXT1_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(A_SQL_TXT2_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(A_SQL_TXT3_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(A_SQL_TXT4_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(A_SQL_TXT5_PARAM, Types.VARCHAR));
		
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

	public Map<String, Object> execute(String a_sql_txt1, String a_sql_txt2, String a_sql_txt3, String a_sql_txt4, String a_sql_txt5) {
		Map<String, Object> inputs = new HashMap<String, Object>();
		inputs.put(A_SQL_TXT1_PARAM, a_sql_txt1);
		inputs.put(A_SQL_TXT2_PARAM, a_sql_txt2);
		inputs.put(A_SQL_TXT3_PARAM, a_sql_txt3);
		inputs.put(A_SQL_TXT4_PARAM, a_sql_txt4);
		inputs.put(A_SQL_TXT5_PARAM, a_sql_txt5);

		return super.execute(inputs);
	}
}
