package com.mesplus.DSN.services.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import com.mesplus.util.Enums.ReturnType;

public interface FormDao {

	// NT
	public List<Map<String, Object>> tbldatNtDao(String fac_id, String tbl_code, String lang_flag, String a_params, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> fundefNtDao(String fac_id, String func_group, String func_code, String function_type, ReturnType rType) throws SQLException;
	
	public List<Map<String, Object>> mapconNtDao(String fac_id, String func_id, String admin_user , ReturnType rType) throws SQLException;
	
	public List<Map<String, Object>> mapdefSplNtDao(String fac_id, String func_id, ReturnType rType) throws SQLException;
	
	public Map<String, Object> selectresultNtDao(String a_sql_txt1, String a_sql_txt2, String a_sql_txt3, String a_sql_txt4, String a_sql_txt5, ReturnType rType) throws SQLException;
	
	public List<Map<String, Object>> mapconGenNtDao(String fac_id, String func_id, String lang_flag, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> mapdefS2NtDao(String fac_id, String func_id, String admin_user, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> tabvldNtDao(String fac_id, String func_id, String spd_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> usrcolNtDao(String fac_id, String func_id, String grp_usr_id, String lang_flag, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> usrmapNtDao(String fac_id, String func_id, String grp_usr_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> fsprelNtDao(String fac_id, String func_id, String spd_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> ftrfldNtDao(String fac_id, String func_id, String func_template_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> fxtrelNtDao(String fac_id, String func_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> grpcolNtDao(String fac_id, String func_id, String lang_flag, ReturnType rType) throws SQLException;

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

	public List<Map<String, Object>> ConsqlNtDao(String tab_id, String admin_user, ReturnType rType) throws SQLException;
	
	public List<Map<String, Object>> FtrdefNtDao(String fac_id, String func_id, String spd_id, ReturnType rType) throws SQLException;
	
	public List<Map<String, Object>> TabvldNtDao(String fac_id, String func_id, String spd_id, ReturnType rType) throws SQLException;
	
	public List<Map<String, Object>> FsprelNtDao(String fac_id, String func_id, String spd_id, ReturnType rType) throws SQLException;
	
	public List<Map<String, Object>> FscrelNtDao(String fac_id, String func_id, String spd_id, ReturnType rType) throws SQLException;
	
	public List<Map<String, Object>> ChtdetNtDao(String tab_id, ReturnType rType) throws SQLException;
	
	public List<Map<String, Object>> AssdefNtDao(String tab_id, ReturnType rType) throws SQLException;
	
	public List<Map<String, Object>> SvcmbrNtDao(String service_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> TbldefNtDao(String fac_id, String tbl_grp, String tbl_code, String physical_table, String physical_view, String logical_view, ReturnType rType) 
			throws SQLException;
	
	public List<Map<String, Object>> TblsynNtDao(ReturnType rType) throws SQLException;

	public List<Map<String, Object>> ColdefNtDao(String fac_id, String tbl_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> ColrevNtDao(String tbl_id, String tbl_name, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> XtpsheNtDao(String template_id, ReturnType rType) throws SQLException;
	
	public List<Map<String, Object>> XtpfldNtDao(String sheet_id, ReturnType rType) throws SQLException;
	
	public List<Map<String, Object>> XtpdefNtDao(String template_name, String template_filename, ReturnType rType) throws SQLException;
	
	public List<Map<String, Object>> Fundef01NtDao(String func_code, ReturnType rType) throws SQLException;
	
	// RT
	public Map<String, Object> dynamicS2RtDao(String status, String func_id, String spd_id, String fac_id, String user_id, String lang_flag, String arrlst, ReturnType rType)
			throws Exception;
}
