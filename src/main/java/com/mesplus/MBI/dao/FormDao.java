package com.mesplus.MBI.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public interface FormDao {
	public List<Map<String, Object>> controlSqlGenNT(String fac_id, String func_id) throws SQLException;

	public List<Map<String, Object>> fsprelNtDao(String fac_id, String func_id, String spd_id) throws SQLException;

	public List<Map<String, Object>> ftrfldNtDao(String fac_id, String func_id, String func_template_id) throws SQLException;

	public List<Map<String, Object>> fxtrelNtDao(String fac_id, String func_id) throws SQLException;

	public List<Map<String, Object>> grpcolNtDao(String fac_id, String func_id, String lang_falg) throws SQLException;

	public List<Map<String, Object>> grpmapNtDao(String fac_id, String func_id) throws SQLException;

}
