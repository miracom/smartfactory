package com.mesplus.ARC.dao;

import java.util.List;
import java.util.Map;

public interface TaskDao {
	public List<Map<String, Object>> getTaskList();
	
	public List<Map<String, Object>> getTaskBasic(String dbName, String taskId);
	
	public List<Map<String, Object>> getTaskMaster(String dbName, String taskId);
	
	public List<Map<String, Object>> getTaskSlave(String dbName, String taskId);
	
	public List<Map<String, Object>> getMasterCondition(String dbName, String taskId);
}
