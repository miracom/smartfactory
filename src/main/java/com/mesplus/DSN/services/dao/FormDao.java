package com.mesplus.DSN.services.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import com.mesplus.util.Enums.ReturnType;

public interface FormDao {

	// NT
	public List<Map<String, Object>> tbldatNtDao(String fac_id, String tbl_code, String lang_flag, String a_params, ReturnType rType)
			throws SQLException;

	public List<Map<String, Object>> fundefNtDao(String fac_id, String func_group, String func_code, String function_type, ReturnType rType)
			throws SQLException;

	public List<Map<String, Object>> mapconNtDao(String fac_id, String func_id, String admin_user, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> mapdefSplNtDao(String fac_id, String func_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> selectresultNtDao(String a_sql_txt1, String a_sql_txt2, String a_sql_txt3, String a_sql_txt4,
			String a_sql_txt5, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> mapconGenNtDao(String fac_id, String func_id, String lang_flag, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> mapdefS2NtDao(String fac_id, String func_id, String admin_user, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> usrcolNtDao(String fac_id, String func_id, String grp_usr_id, String lang_flag, ReturnType rType)
			throws SQLException;

	public List<Map<String, Object>> usrmapNtDao(String fac_id, String func_id, String grp_usr_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> ftrfldNtDao(String fac_id, String func_id, String func_template_id, ReturnType rType)
			throws SQLException;

	public List<Map<String, Object>> fxtrelNtDao(String fac_id, String func_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> grpcolNtDao(String fac_id, String func_id, String lang_flag, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> grpmapNtDao(String fac_id, String func_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> assdefGenNtDao(String fac_id, String func_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> chtinfNtDao(String fac_id, String func_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> consqlGenNtDao(String fac_id, String func_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> fscrelNtDao(String fac_id, String func_id, String spd_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> secfundefNtDao(String fac_id, String func_group, String func_code, String func_type, ReturnType rType)
			throws SQLException;

	public List<Map<String, Object>> mtbldatNtDao(String a_fac_id, String a_tbl_code, String a_lang_flag, String a_params, ReturnType rType)
			throws SQLException;

	public Map<String, Object> dynamicS2NtDao(String fac_id, String func_id, String spd_id, String col_param, String cond_param,
			String lang_flag, ReturnType rType) throws Exception;

	public List<Map<String, Object>> consqlNtDao(String tab_id, String admin_user, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> ftrdefNtDao(String fac_id, String func_id, String spd_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> tabvldNtDao(String fac_id, String func_id, String spd_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> fsprelNtDao(String fac_id, String func_id, String spd_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> chtdetNtDao(String tab_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> assdefNtDao(String tab_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> svcmbrNtDao(String service_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> tbldefNtDao(String fac_id, String tbl_grp, String tbl_code, String physical_table,
			String physical_view, String logical_view, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> tblsynNtDao(ReturnType rType) throws SQLException;

	public List<Map<String, Object>> coldefNtDao(String fac_id, String tbl_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> colrevNtDao(String tbl_id, String tbl_name, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> xtpsheNtDao(String template_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> xtpfldNtDao(String sheet_id, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> xtpdefNtDao(String template_name, String template_filename, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> fundef01NtDao(String func_code, ReturnType rType) throws SQLException;

	public List<Map<String, Object>> fundefCtrlNtDao(String fac_id, String grp_id, String usr_id, String fun_id, ReturnType rType)
			throws SQLException;

	public List<Map<String, Object>> getuserloginNtDao(String fac_id, String grp_code, String user_id, String password, String lang_flag,
			ReturnType rType) throws SQLException;

	// RT
	public Map<String, Object> dynamicS2RtDao(String status, String func_id, String spd_id, String fac_id, String user_id,
			String lang_flag, String arrlst, ReturnType rType) throws Exception;
	
	public String tbldefRtDao(List<String> arrParams,String methodName) throws Exception;
	
	public String coldefRTDao(List<String> arrParams, String methodName) throws Exception;
}
