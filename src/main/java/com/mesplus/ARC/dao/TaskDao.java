package com.mesplus.ARC.dao;

import java.util.List;
import java.util.Map;

public interface TaskDao {
	public List<Map<String, Object>> getTaskList();
	
	public List<Map<String, Object>> getTaskInfo(String dbName, String taskId);
}
