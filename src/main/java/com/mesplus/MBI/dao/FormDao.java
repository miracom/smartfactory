package com.mesplus.MBI.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public interface FormDao {

	public List<Map<String, Object>> mapconGenNtDao(String fac_id,
			String func_id, String lang_flag) throws SQLException;

	public List<Map<String, Object>> mapdefS2NtDao(String fac_id,
			String func_id, String admin_user) throws SQLException;

	public List<Map<String, Object>> tabvldNtDao(String fac_id, String func_id,
			String spd_id) throws SQLException;

	public List<Map<String, Object>> usrcolNtDao(String fac_id, String func_id,
			String grp_usr_id, String lang_flag) throws SQLException;

	public List<Map<String, Object>> usrmapNtDao(String fac_id, String func_id,
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
	
	public List<Map<String, Object>> secfundefNtDao(String fac_id, String func_group, String func_code, String func_type)throws SQLException;
	
	public Map<String, Object> dynamicS2RtDao(String status, String func_id, String spd_id, String fac_id, String user_id, String lang_flag, String arrlst)throws SQLException;
	
	public Map<String, Object> testRtDao(String lot_id, String fac_id, String mat_id, String order_id, String user_id)throws SQLException;
	
	public List<Map<String, Object>> dynamicS2NtDao(String fac_id, String func_id, String spd_id, String col_param, String cond_param, String lang_flag)throws SQLException;

}
