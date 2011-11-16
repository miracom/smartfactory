package com.mesplus.MBI.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;

public interface FormDao {
	public List<Map<String, Object>> controlSqlGenNT(String fac_id, String func_id) throws SQLException;
	public List<Map<String, Object>> mapConGenNtDao(String fac_id, String func_id, String lang_flag) throws SQLException;
	public List<Map<String, Object>> mapDefS2NtDao(String fac_id, String func_id, String admin_user) throws SQLException;
	public List<Map<String, Object>> tabVldNtDao(String fac_id, String func_id, String spd_id) throws SQLException;
	public List<Map<String, Object>> usrColNtDao(String fac_id, String func_id, String grp_usr_id, String lang_flag) throws SQLException;
	public List<Map<String, Object>> usrMapNtDao(String fac_id, String func_id, String grp_usr_id) throws SQLException;
}
