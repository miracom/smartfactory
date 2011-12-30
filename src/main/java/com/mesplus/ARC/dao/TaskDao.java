package com.mesplus.ARC.dao;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface TaskDao {
	
	//Select
	public List<Map<String, Object>> getTaskList();
	
	public List<Map<String, Object>> getTaskBasic(String dbName, String taskId);
	
	public List<Map<String, Object>> getTaskMaster(String dbName, String taskId);
	
	public List<Map<String, Object>> getTaskSlave(String dbName, String taskId);
	
	public List<Map<String, Object>> getMasterCondition(String dbName, String taskId);
	
	public List<Map<String, Object>> getDbList();
	
	//Insert Or Update Or Delete
	public Boolean createOrReplaceTask(HashMap<String, String> params) throws SQLException;
}
