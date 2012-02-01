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

public class ColdefRT extends StoredProcedure {

	private static final String OP_FLAG = "a_op_flag";
	private static final String COL_ID = "a_col_id";
	private static final String TBL_ID = "a_tbl_id";
	private static final String COL_SEQ = "col_seq";
	private static final String COL_CODE = "col_code";
	private static final String COMMENTS = "comments";
	private static final String COL_DESC1 = "col_desc1";
	private static final String COL_DESC2 = "col_desc2";
	private static final String COL_DESC3 = "col_desc3";
	private static final String COL_PK = "col_pk";
	private static final String COL_NULL = "col_null";
	private static final String FAC_GRP_FLAG = "fac_grp_flag";
	private static final String DEFAULT_VALUE = "default_value";
	private static final String COL_TYPE = "col_type";
	private static final String COL_SIZE = "col_size";
	private static final String COL_PRCS = "col_prcs";
	private static final String COL_SCAL = "col_scal";
	private static final String MOD_FLAG = "mod_flag";
	private static final String USER_ID = "user_id";
	private static final String LANG_FLAG = "lang_flag";

	public static final String RETURN_PARAM = "return";

	private static final String SPROC_NAME = "P_DSN_COLDEF_RT";

	public ColdefRT(DataSource dataSource) throws SQLException {
		super(dataSource, SPROC_NAME);

		declareParameter(new SqlParameter(OP_FLAG, Types.VARCHAR));
		declareParameter(new SqlParameter(COL_ID, Types.VARCHAR));
		declareParameter(new SqlParameter(TBL_ID, Types.VARCHAR));
		declareParameter(new SqlParameter(COL_SEQ, Types.VARCHAR));
		declareParameter(new SqlParameter(COL_CODE, Types.VARCHAR));
		declareParameter(new SqlParameter(COMMENTS, Types.VARCHAR));
		declareParameter(new SqlParameter(COL_DESC1, Types.VARCHAR));
		declareParameter(new SqlParameter(COL_DESC2, Types.VARCHAR));
		declareParameter(new SqlParameter(COL_DESC3, Types.VARCHAR));
		declareParameter(new SqlParameter(COL_PK, Types.VARCHAR));
		declareParameter(new SqlParameter(COL_NULL, Types.VARCHAR));
		declareParameter(new SqlParameter(FAC_GRP_FLAG, Types.VARCHAR));
		declareParameter(new SqlParameter(DEFAULT_VALUE, Types.VARCHAR));
		declareParameter(new SqlParameter(COL_TYPE, Types.VARCHAR));
		declareParameter(new SqlParameter(COL_SIZE, Types.VARCHAR));
		declareParameter(new SqlParameter(COL_PRCS, Types.VARCHAR));
		declareParameter(new SqlParameter(COL_SCAL, Types.VARCHAR));
		declareParameter(new SqlParameter(MOD_FLAG, Types.VARCHAR));
		declareParameter(new SqlParameter(USER_ID, Types.VARCHAR));
		declareParameter(new SqlParameter(LANG_FLAG, Types.VARCHAR));

		declareParameter(new SqlOutParameter(RETURN_PARAM, Types.VARCHAR));

		compile();
	}

	public String execute(List<String> arrParams, String methodName) throws Exception {
		Map<String, Object> inputs = new HashMap<String, Object>();
		inputs.put(OP_FLAG, arrParams.get(0));
		inputs.put(COL_ID, arrParams.get(1));
		inputs.put(TBL_ID, arrParams.get(2));
		inputs.put(COL_SEQ, arrParams.get(3));
		inputs.put(COL_CODE, arrParams.get(4));
		inputs.put(COMMENTS, arrParams.get(5));
		inputs.put(COL_DESC1, arrParams.get(6));
		inputs.put(COL_DESC2, arrParams.get(7));
		inputs.put(COL_DESC3, arrParams.get(8));
		inputs.put(COL_PK, arrParams.get(9));
		inputs.put(COL_NULL, arrParams.get(10));
		inputs.put(FAC_GRP_FLAG, arrParams.get(11));
		inputs.put(DEFAULT_VALUE, arrParams.get(12));
		inputs.put(COL_TYPE, arrParams.get(13));
		inputs.put(COL_SIZE, arrParams.get(14));
		inputs.put(COL_PRCS, arrParams.get(15));
		inputs.put(COL_SCAL, arrParams.get(16));
		inputs.put(MOD_FLAG, arrParams.get(17));
		inputs.put(USER_ID, arrParams.get(18));
		inputs.put(LANG_FLAG, arrParams.get(19));

		Map<String, Object> results = super.execute(inputs);

		String returnValue = TypeConvert.InnerMessage(results.get(ColdefRT.RETURN_PARAM).toString(), methodName);

		return returnValue;
	}
}
