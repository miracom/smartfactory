package com.mesplus.DSN.services.dao.impl.dyna;

import java.sql.SQLException;
import java.sql.Types;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;

import javax.sql.DataSource;

import org.jdom.Element;
import org.springframework.jdbc.core.SqlOutParameter;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.object.StoredProcedure;

import com.mesplus.util.Enums.ReturnType;
import com.mesplus.util.TypeConvert;
import com.mesplus.util.XmlConvert;

public class DynamicS2Rt extends StoredProcedure {
	private static final String STATUS_PARAM = "status";
	private static final String FUNC_ID_PARAM = "func_id";
	private static final String SPD_ID_PARAM = "spd_id";
	private static final String FAC_ID_PARAM = "fac_id";
	private static final String USER_ID_PARAM = "user_id";
	private static final String LANG_FLAG_PARAM = "lang_flag";
	private static final String ARRLST_PARAM = "arrlst";

	public static final String SQLTEXT_PARAM = "sqltext";
	public static final String OUT_NEW_ID_PARAM = "out_new_id";
	public static final String RETURN_MSG_PARAM = "return_msg";

	private static final String SPROC_NAME = "P_DSN_DYNAMIC_S2_RT";

	private ReturnType RTYPE = ReturnType.NONE;

	private static final Map<String, String> typeMap = TypeConvert.getMappingType();

	public DynamicS2Rt(DataSource dataSource, ReturnType rType) throws Exception {
		super(dataSource, SPROC_NAME);

		declareParameter(new SqlParameter(STATUS_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(FUNC_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(SPD_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(FAC_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(USER_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(LANG_FLAG_PARAM, Types.VARCHAR));
		declareParameter(new SqlParameter(ARRLST_PARAM, Types.VARCHAR));

		RTYPE = rType;

		declareParameter(new SqlOutParameter(SQLTEXT_PARAM, Types.VARCHAR));
		declareParameter(new SqlOutParameter(OUT_NEW_ID_PARAM, Types.VARCHAR));
		declareParameter(new SqlOutParameter(RETURN_MSG_PARAM, Types.VARCHAR));

		compile();
	}

	public Map<String, Object> execute(String status, String func_id, String spd_id, String fac_id, String user_id, String lang_flag, String arrlst)
			throws Exception {
		Map<String, Object> inputs = new HashMap<String, Object>();
		inputs.put(STATUS_PARAM, status);
		inputs.put(FUNC_ID_PARAM, func_id);
		inputs.put(SPD_ID_PARAM, spd_id);
		inputs.put(FAC_ID_PARAM, fac_id);
		inputs.put(USER_ID_PARAM, user_id);
		inputs.put(LANG_FLAG_PARAM, lang_flag);
		inputs.put(ARRLST_PARAM, arrlst);

		if (RTYPE == ReturnType.OBJECT) {
//			DefaultTransactionDefinition def = new DefaultTransactionDefinition();
//			def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);
//			PlatformTransactionManager transactionManager = new org.springframework.jdbc.datasource.DataSourceTransactionManager(super.getJdbcTemplate().getDataSource());
//			TransactionStatus ts = transactionManager.getTransaction(def);
//			transactionManager.commit(ts);
//			transactionManager.rollback(ts);
			return super.execute(inputs);
		} else if (RTYPE == ReturnType.ELEMENT) {
			Map<String, Object> returnMap = new HashMap<String, Object>();

			Map<String, Object> map = super.execute(inputs);
			
			Iterator<Entry<String, Object>> it = map.entrySet().iterator();

			int i = 0;
			while (it.hasNext()) {
				Map.Entry<String, Object> pairs = (Map.Entry<String, Object>) it.next();

				String key = pairs.getKey();
				String value = "";
				Element el = null;

				if (pairs.getValue() != null) {
					value = pairs.getValue().toString();
				}

				if (pairs.getKey().equals(SQLTEXT_PARAM)) {
					el = XmlConvert.makeElement(Integer.toString(i), value, TypeConvert.getChangeType("VARCHAR2", typeMap));
				} else if (pairs.getKey().equals(OUT_NEW_ID_PARAM)) {
					el = XmlConvert.makeElement(Integer.toString(i), value, TypeConvert.getChangeType("VARCHAR2", typeMap));
				} else if (pairs.getKey().equals(RETURN_MSG_PARAM)) {
					el = XmlConvert.makeElement(Integer.toString(i), value, TypeConvert.getChangeType("VARCHAR2", typeMap));
				}
				returnMap.put(key, el);
				i++;
			}
			return returnMap;
		} else {
			throw new SQLException("ReturnType Exception: " + RTYPE.toString());
		}

	}
}
