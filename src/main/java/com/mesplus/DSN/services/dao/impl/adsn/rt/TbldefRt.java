package com.mesplus.DSN.services.dao.impl.adsn.rt;

import java.sql.SQLException;
import java.sql.Types;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.jdbc.core.SqlOutParameter;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.object.StoredProcedure;

import com.mesplus.util.TypeConvert;

public class TbldefRt extends StoredProcedure {

	private static final String OP_FLAG_ID = "a_op_flag";
	private static final String TBL_ID = "a_tbl_id";
	private static final String TBL_CODE = "a_tbl_code";
	private static final String TBL_GRP = "a_tbl_grp";
	private static final String TBL_TYPE = "a_tbl_type";
	private static final String SQL_TXT1 = "a_sql_txt1";
	private static final String SQL_TXT2 = "a_sql_txt2";
	private static final String SQL_TXT3 = "a_sql_txt3";
	private static final String SQL_TXT4 = "a_sql_txt4";
	private static final String SQL_TXT5 = "a_sql_txt5";
	private static final String TBL_DESC1 = "a_tbl_desc1";
	private static final String TBL_DESC2 = "a_tbl_desc2";
	private static final String TBL_DESC3 = "a_tbl_desc3";
	private static final String MOD_FLAG = "a_mod_flag";
	private static final String VER_FLAG = "a_ver_flag";
	private static final String USER_ID = "a_user_id";
	private static final String LANG_FLAG = "a_lang_flag";
	public static final String RETURN_PARAM = "a_return";

	private static final String SPROC_NAME = "P_DSN_TBLDEF_RT";

	public TbldefRt(DataSource dataSource) throws SQLException {
		super(dataSource, SPROC_NAME);

		declareParameter(new SqlParameter(OP_FLAG_ID, Types.VARCHAR));
		declareParameter(new SqlParameter(TBL_ID, Types.VARCHAR));
		declareParameter(new SqlParameter(TBL_CODE, Types.VARCHAR));
		declareParameter(new SqlParameter(TBL_GRP, Types.VARCHAR));
		declareParameter(new SqlParameter(TBL_TYPE, Types.VARCHAR));
		declareParameter(new SqlParameter(SQL_TXT1, Types.VARCHAR));
		declareParameter(new SqlParameter(SQL_TXT2, Types.VARCHAR));
		declareParameter(new SqlParameter(SQL_TXT3, Types.VARCHAR));
		declareParameter(new SqlParameter(SQL_TXT4, Types.VARCHAR));
		declareParameter(new SqlParameter(SQL_TXT5, Types.VARCHAR));
		declareParameter(new SqlParameter(TBL_DESC1, Types.VARCHAR));
		declareParameter(new SqlParameter(TBL_DESC2, Types.VARCHAR));
		declareParameter(new SqlParameter(TBL_DESC3, Types.VARCHAR));
		declareParameter(new SqlParameter(MOD_FLAG, Types.VARCHAR));
		declareParameter(new SqlParameter(VER_FLAG, Types.VARCHAR));
		declareParameter(new SqlParameter(USER_ID, Types.VARCHAR));
		declareParameter(new SqlParameter(LANG_FLAG, Types.VARCHAR));

		declareParameter(new SqlOutParameter(RETURN_PARAM, Types.VARCHAR));

		compile();
	}

	public String execute(List<String> arrParams, String methodName) throws Exception {
		Map<String, Object> inputs = new HashMap<String, Object>();
		inputs.put(OP_FLAG_ID, arrParams.get(0));
		inputs.put(TBL_ID, arrParams.get(1));
		inputs.put(TBL_CODE, arrParams.get(2));
		inputs.put(TBL_GRP, arrParams.get(3));
		inputs.put(TBL_TYPE, arrParams.get(4));
		inputs.put(SQL_TXT1, arrParams.get(5));
		inputs.put(SQL_TXT2, arrParams.get(6));
		inputs.put(SQL_TXT3, arrParams.get(7));
		inputs.put(SQL_TXT4, arrParams.get(8));
		inputs.put(SQL_TXT5, arrParams.get(9));
		inputs.put(TBL_DESC1, arrParams.get(10));
		inputs.put(TBL_DESC2, arrParams.get(11));
		inputs.put(TBL_DESC3, arrParams.get(12));
		inputs.put(MOD_FLAG, arrParams.get(13));
		inputs.put(VER_FLAG, arrParams.get(14));
		inputs.put(USER_ID, arrParams.get(15));
		inputs.put(LANG_FLAG, arrParams.get(16));
		
		Map<String, Object> results = super.execute(inputs);

		String returnValue = TypeConvert.InnerMessage(results.get(TbldefRt.RETURN_PARAM).toString(), methodName);

		return returnValue;
	}
}
