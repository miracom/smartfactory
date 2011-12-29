package com.mesplus.ARC.dao;

import java.util.List;
import java.util.Map;

public interface OriginalDao {
	public List<Map<String, Object>> getColumnList(String tableName);
	
	public List<Map<String, Object>> getTableList(String owner);
}
