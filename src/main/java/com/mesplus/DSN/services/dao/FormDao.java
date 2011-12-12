package com.mesplus.DSN.services.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import com.mesplus.util.Enums.ReturnType;

public interface FormDao {

	// NT
	public List<Map<String, Object>> tbldatNtDao(String a_fac_id, String a_tbl_code, String a_lang_flag, String a_params, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> fundefNtDao(String fac_id, String func_group, String func_code, String function_type, ReturnType rType) throws SQLException;
	
	public List<Map<String, Object>> mapconNtDao(String fac_id, String func_id, String admin_user , ReturnType rType) throws SQLException;
	
	public List<Map<String, Object>> mapdefSplNtDao(String fac_id, String func_id, ReturnType rType) throws SQLException;
	/*
	 * division line
	 */
	public List<Map<String, Object>> mapconGenNtDao(String fac_id, String func_id, String lang_flag, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> mapdefS2NtDao(String fac_id, String func_id, String admin_user, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> tabvldNtDao(String fac_id, String func_id, String spd_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> usrcolNtDao(String fac_id, String func_id, String grp_usr_id, String lang_flag, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> usrmapNtDao(String fac_id, String func_id, String grp_usr_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> fsprelNtDao(String fac_id, String func_id, String spd_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> ftrfldNtDao(String fac_id, String func_id, String func_template_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> fxtrelNtDao(String fac_id, String func_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> grpcolNtDao(String fac_id, String func_id, String lang_falg, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> grpmapNtDao(String fac_id, String func_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> assdefGenNtDao(String fac_id, String func_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> chtinfNtDao(String fac_id, String func_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> consqlGenNtDao(String fac_id, String func_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> fscrelNtDao(String fac_id, String func_id, String spd_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> secfundefNtDao(String fac_id, String func_group, String func_code, String func_type, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> mtbldatNtDao(String a_fac_id, String a_tbl_code, String a_lang_flag, String a_params, ReturnType rType)
			throws SQLException;

	public List<Map<String, Object>> dynamicS2NtDao(String fac_id, String func_id, String spd_id, String col_param, String cond_param, String lang_flag)
			throws SQLException;

	// RT
	public Map<String, Object> dynamicS2RtDao(String status, String func_id, String spd_id, String fac_id, String user_id, String lang_flag, String arrlst, ReturnType rType)
			throws Exception;
}
