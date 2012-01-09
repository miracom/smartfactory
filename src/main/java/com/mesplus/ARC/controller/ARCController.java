package com.mesplus.ARC.controller;

import java.sql.SQLException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mesplus.ARC.dao.OriginalDao;
import com.mesplus.ARC.dao.TaskDao;

@Controller
public class ARCController {
	//private static final Logger logger = LoggerFactory.getLogger(CMNController.class);

	@Autowired
	private TaskDao taskDao;
	
	@Autowired
	private OriginalDao originalDao;

	/*
	 * Archive
	 */
	
	//http://localhost:8080/smartfactory/module/ARC/data/taskList.json
	@RequestMapping(value = "module/ARC/data/tasklist.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String,Object>> taskList(HttpServletRequest request, HttpServletResponse response) {
		return taskDao.getTaskList();
	}
	
	//http://localhost:8080/smartfactory/module/ARC/data/taskInfo.json?dbName=MES&taskId=LOTS
	@RequestMapping(value = "module/ARC/data/taskinfo.json", method = RequestMethod.GET)
	public @ResponseBody
	Map<String,Object> taskInfo(HttpServletRequest request, HttpServletResponse response) {
		String dbName = request.getParameter("dbName");
		String taskId = request.getParameter("taskId");
		
		Map<String,Object> infoMap = new LinkedHashMap<String, Object>();
		infoMap.put("taskBasic", taskDao.getTaskBasic(dbName, taskId));
		infoMap.put("taskMaster", taskDao.getTaskMaster(dbName, taskId));
		infoMap.put("taskMasterCondition", taskDao.getMasterCondition(dbName, taskId));
		infoMap.put("taskSlave", taskDao.getTaskSlave(dbName, taskId));
		
		return infoMap;
	}
	
	//http://localhost:8080/smartfactory/module/ARC/data/dbList.json
	@RequestMapping(value = "module/ARC/data/dblist.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String,Object>> dbList(HttpServletRequest request, HttpServletResponse response) {
		
		return taskDao.getDbList();
	}
	
	@RequestMapping(value = "module/ARC/data/createorreplacetask.json", method = RequestMethod.POST)
	public @ResponseBody
	Map<String,Object> taskCreateOrReplace(HttpServletRequest request, HttpServletResponse response) {
		
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		try
		{
			HashMap<String, String> params = new HashMap<String, String>();
			Enumeration<String> e = request.getParameterNames();
			while(e.hasMoreElements()) {
				String key = (String) e.nextElement();
		      	String value = request.getParameter(key);
		      
		      	params.put(key, value);
			}
			
//			ObjectMapper om = new ObjectMapper();
//			List<Map<String, Object>> myObjects = om.readValue(params.get("processtype"), new TypeReference<List<Map<String, Object>>>() {});
//			System.out.println(myObjects.get(0).get("TABLE_NAME"));
			
			if(params.get("processtype") == null || params.get("processtype") == "")
			{
				resultMap.put("success", false);
				resultMap.put("msg", "processtype cannot be found.");
			}
			else if(params.get("processtype").equals("C")) //등록
			{
				taskDao.createOrReplaceTask(params);
				resultMap.put("success", true);
				resultMap.put("msg", "Sucess Create");
			}
			else if(params.get("processtype").equals("U")) //수정
			{
				resultMap.put("success", true);
				resultMap.put("msg", "Sucess Update");
			}
			else if(params.get("processtype").equals("D")) //삭제
			{
				resultMap.put("success", true);
				resultMap.put("msg", "Sucess Delete");
			}
			else
			{
				resultMap.put("success", false);
				resultMap.put("msg", "processtype = " + params.get("processtype") + "has been wrongly installed.");
			}
		}
		catch(SQLException sx)
		{
			resultMap.put("success", false);
			resultMap.put("msg", "SQLException : " + sx.toString());
		}
		catch (Exception ex) {
			resultMap.put("success", false);
			resultMap.put("msg", "Exception : " + ex.toString());
		}
		
		return resultMap;
	}
	
	/*
	 * Orginal
	 */
	
	//http://localhost:8080/smartfactory/module/ARC/data/columnList.json?tableName=MRASRESHIS
	@RequestMapping(value = "module/ARC/data/columnlist.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String,Object>> columnList(HttpServletRequest request, HttpServletResponse response) {
		String tableName = request.getParameter("tableName");
		
		return originalDao.getColumnList(tableName);
	}
	
	//http://localhost:8080/smartfactory/module/ARC/data/tableList.json
	@RequestMapping(value = "module/ARC/data/tablelist.json", method = RequestMethod.POST)
	public @ResponseBody
	List<Map<String,Object>> tableList(HttpServletRequest request, HttpServletResponse response) {
		Enumeration<String> e = request.getParameterNames();
		
		HashMap<String, String> params = new HashMap<String, String>();
		while(e.hasMoreElements()) {
			String key = (String) e.nextElement();
	      	String value = request.getParameter(key);
	      
	      	System.out.println(String.format("key = %s value = %s", key,value));
	      	
	      	params.put(key, value);
		}

		return originalDao.getTableList("MESMGR");
	}
	
	//http://localhost:8080/smartfactory/module/ARC/data/tableList.json
	@RequestMapping(value = "module/ARC/data/tableupdate.json", method = RequestMethod.POST)
	public @ResponseBody
	List<Map<String,Object>> tableUpdate(@RequestBody List<Map<String, Object>> request, HttpServletResponse response) {
		
		System.out.print("TEST");
		
		
		return null;
	}
}
