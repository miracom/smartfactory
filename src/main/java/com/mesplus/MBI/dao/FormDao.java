package com.mesplus.MBI.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

//@Component
public interface FormDao {
	public List<Map<String, Object>> controlSqlGenNT(Map<String, Object> params);
}
