package com.mesplus.MBI.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public interface FormDao {

	public List<Map<String, Object>> mapConGenNtDao(String fac_id,
			String func_id, String lang_flag) throws SQLException;

	public List<Map<String, Object>> mapDefS2NtDao(String fac_id,
			String func_id, String admin_user) throws SQLException;

	public List<Map<String, Object>> tabVldNtDao(String fac_id, String func_id,
			String spd_id) throws SQLException;

	public List<Map<String, Object>> usrColNtDao(String fac_id, String func_id,
			String grp_usr_id, String lang_flag) throws SQLException;

	public List<Map<String, Object>> usrMapNtDao(String fac_id, String func_id,
			String grp_usr_id) throws SQLException;

	public List<Map<String, Object>> fsprelNtDao(String fac_id, String func_id,
			String spd_id) throws SQLException;

	public List<Map<String, Object>> ftrfldNtDao(String fac_id, String func_id,
			String func_template_id) throws SQLException;

	public List<Map<String, Object>> fxtrelNtDao(String fac_id, String func_id)
			throws SQLException;

	public List<Map<String, Object>> grpcolNtDao(String fac_id, String func_id,
			String lang_falg) throws SQLException;

	public List<Map<String, Object>> grpmapNtDao(String fac_id, String func_id)
			throws SQLException;

	public List<Map<String, Object>> assdefGenNtDao(String fac_id,
			String func_id) throws SQLException;

	public List<Map<String, Object>> chtinfNtDao(String fac_id, String func_id)
			throws SQLException;

	public List<Map<String, Object>> consqlGenNtDao(String fac_id,
			String func_id) throws SQLException;

	public List<Map<String, Object>> fscrelNtDao(String fac_id, String func_id,
			String spd_id) throws SQLException;

}
