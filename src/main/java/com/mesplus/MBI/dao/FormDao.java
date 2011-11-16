package com.mesplus.MBI.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public interface FormDao {
	public List<Map<String, Object>> controlSqlGenNT(String fac_id, String func_id) throws SQLException;

	public List<Map<String, Object>> assdefGenNtDao(String fac_id, String func_id) throws SQLException;

	public List<Map<String, Object>> chtinfNtDao(String fac_id, String func_id) throws SQLException;

	public List<Map<String, Object>> consqlGenNtDao(String fac_id, String func_id) throws SQLException;

	public List<Map<String, Object>> fscrelNtDao(String fac_id, String func_id, String spd_id) throws SQLException;
}
