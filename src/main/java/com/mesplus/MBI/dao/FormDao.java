package com.mesplus.MBI.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

public interface FormDao {
	public List<Map<String, Object>> controlSqlGenNT(String fac_id, String func_id) throws SQLException;
}
