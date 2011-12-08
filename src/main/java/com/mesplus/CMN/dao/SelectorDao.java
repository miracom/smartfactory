package com.mesplus.CMN.dao;

import java.util.List;
import java.util.Map;

public interface SelectorDao {
	public List<Map<String, Object>> select(String table, String[] selects, String[] filters, String[] orders, Map<String, Object> parameters, int start, int limit);
	public int selectCount(String table, String[] filters, Map<String, Object> parameters);
	public Map<String, Object> find(String from, String[] selects, String[] filters, Map<String, Object> parameters);
}
