package com.mesplus.ARC.dao.impl;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

import com.mesplus.ARC.dao.TaskDao;

@Component
public class JdbcTaskDaoImpl implements TaskDao {

	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	@Autowired
	@Qualifier("archiveDataSource")
	public void setDataSource(DataSource dataSource) {
		this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}

	public List<Map<String, Object>> getTaskList() {
		String taskListSelectQuery = " SELECT " + " 	MARCOPTDEF.TASK_ID AS TASK_ID, " + "	MARCOPTMAS.MASTER_TABLE AS MASTER_TABLE, "
				+ "	DECODE(MARCOPTDEF.OVERWRITE_FLAG, '0', 'NO' ,'1' ,'YES') OVERWRITE_FLAG, "
				+ "	DECODE(MARCOPTDEF.MASTER_DELETION, '0', 'NO', '1', 'YES') MASTER_DELETION, "
				+ "	DECODE(MARCOPTDEF.SLAVE_DELETION, '0', 'NO', '1', 'YES') SLAVE_DELETION, "
				+ "	DECODE(MARCOPTDEF.BACKUP_METHOD, '0', 'NONE', '1', 'DB', '2', 'FILE', '3', 'DB+FILE')  BACKUP_METHOD, "
				+ "	MARCOPTMAS.KEY_FIELD1 AS KEY_FIELD1, " + "	MARCOPTMAS.DB_NAME AS DB_NAME " 
				+ " FROM " 
				+ " MARCOPTDEF, MARCOPTMAS "
				+ " WHERE MARCOPTDEF.TASK_ID = MARCOPTMAS.TASK_ID " 
				+ " AND MARCOPTDEF.DB_NAME = MARCOPTMAS.DB_NAME ";

		Map<String, Object> params = new HashMap<String, Object>();

		return this.namedParameterJdbcTemplate.queryForList(taskListSelectQuery, params);
	}

	public List<Map<String, Object>> getTaskBasic(String dbName, String taskId) {
		String taskBasicSelectQuery = " SELECT " 
				+ "	TASK.TERM TERM, TASK.DAYS DAYS, "
				+ "	DECODE(TASK.OVERWRITE_FLAG, '0', 'NO' ,'1' ,'YES') OVERWRITE_FLAG, "
				+ "	DECODE(TASK.MASTER_DELETION, '0', 'NO', '1', 'YES') MASTER_DELETION, "
				+ "	DECODE(TASK.SLAVE_DELETION, '0', 'NO', '1', 'YES') SLAVE_DELETION, "
				+ "	DECODE(TASK.BACKUP_METHOD, '0', 'NONE', '1', 'DB', '2', 'FILE', '3', 'DB+FILE')  BACKUP_METHOD, "
				+ "	TASK.LOG_TYPE" 
				+ " FROM "
				+ "	MARCOPTDEF TASK " 
				+ " WHERE " 
				+ "	TASK.TASK_ID = :TASK_ID"
				+ " AND TASK.DB_NAME = :DB_NAME";
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("TASK_ID", taskId);
		params.put("DB_NAME", dbName);
		
		return this.namedParameterJdbcTemplate.queryForList(taskBasicSelectQuery, params);
	}
	
	public List<Map<String, Object>> getTaskMaster(String dbName, String taskId) {
		
		// Source Master Table 정보 취득 SQL
		String taskMasterSelectQuery = " SELECT " 
				+ "	TASK_ID, MASTER_TABLE, KEY_FIELD1, KEY_FIELD2, KEY_FIELD3, " 
				+ "	KEY_FIELD4, KEY_FIELD5, TERM_FIELD "
				+ " FROM "
				+ "	MARCOPTMAS "
				+ " WHERE "
				+ "	TASK_ID = :TASK_ID"
				+ "	AND DB_NAME = :DB_NAME";
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("TASK_ID", taskId);
		params.put("DB_NAME", dbName);
		
		return this.namedParameterJdbcTemplate.queryForList(taskMasterSelectQuery, params);
	}
	
	public List<Map<String, Object>> getTaskSlave(String dbName, String taskId) {
		
		String taskSlaveSelectQuery = " SELECT "
				+ "	TASK_ID, MASTER_TABLE, SLAVE_TABLE, "
				+ "	SLAVE_KEY_FIELD1, SLAVE_KEY_FIELD2, "
				+ "	SLAVE_KEY_FIELD3, SLAVE_KEY_FIELD4, "
				+ "	SLAVE_KEY_FIELD5, SLAVE_CONDITION, SEQ, TERM_FIELD, TERM_CONDITION "
				+ " FROM "
				+ "	MARCOPTSLA WHERE TASK_ID = :TASK_ID AND DB_NAME = :DB_NAME"
				+ " ORDER BY SLAVE_ORDER";
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("TASK_ID", taskId);
		params.put("DB_NAME", dbName);
		
		return this.namedParameterJdbcTemplate.queryForList(taskSlaveSelectQuery, params);
	}
	
	public List<Map<String, Object>> getMasterCondition(String dbName, String taskId) {
		String taskMasterConditionQuery = "SELECT " 
				+ " TASK_ID, CONDITION_TYPE, COLUMN_NAME, CONDITION, CONDITION_VALUE " 
				+ " FROM MARCOPTCON "
				+ " WHERE TASK_ID= :TASK_ID "
				+ " AND DB_NAME= :DB_NAME";
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("TASK_ID", taskId);
		params.put("DB_NAME", dbName);
		
		return this.namedParameterJdbcTemplate.queryForList(taskMasterConditionQuery, params);
	}
	
	public List<Map<String, Object>> getDbList() {
		
		String dbListSelectQuery = "SELECT DB_NAME, ORIGINAL_DRIVERNAME, ORIGINAL_URL, ORIGINAL_USERNAME, ORIGINAL_PASSWORD, " 
				+ " BACKUP_DRIVERNAME, BACKUP_URL, BACKUP_USERNAME, BACKUP_PASSWORD "
				+ " FROM MARCOPTDBC"
				+ " ORDER BY DB_NAME";
		
		Map<String, Object> params = new HashMap<String, Object>();
		
		return this.namedParameterJdbcTemplate.queryForList(dbListSelectQuery, params);
	}
	
	public Boolean createOrReplaceTask(HashMap<String, String> params) throws SQLException{

		String masterInsertQuery = 
				" INSERT INTO MARCOPTMAS ( " +
				"	TASK_ID, MASTER_TABLE, CREATE_USER, CREATE_TIME, DB_NAME " +
				" ) VALUES (:txttask, :txtmaster, 'TESTUSER', CURRENT_TIMESTAMP, :cbdbname) ";
		
		
		String taskInsertQuery =
				" INSERT INTO MARCOPTDEF ( " +
				"	TASK_ID, TASK_DESC, CREATE_USER, CREATE_TIME, DB_NAME " + 
				" ) VALUES (:txttask, :txtdescription, 'TESTUSER', CURRENT_TIMESTAMP, :cbdbname)";
		
		this.namedParameterJdbcTemplate.update(taskInsertQuery, params);
		this.namedParameterJdbcTemplate.update(masterInsertQuery, params);
		
		return true;
	}
}
