package com.mesplus.ARC.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mesplus.ARC.dao.TaskDao;

@Controller
public class ARCController {
	//private static final Logger logger = LoggerFactory.getLogger(CMNController.class);

	@Autowired
	private TaskDao taskDao;

	@RequestMapping(value = "module/ARC/data/taskList.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String,Object>> taskList(HttpServletRequest request, HttpServletResponse response) {
		return taskDao.getTaskList();
	}
	
	@RequestMapping(value = "module/ARC/data/taskInfo.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String,Object>> taskInfo(HttpServletRequest request, HttpServletResponse response) {
		String start = request.getParameter("start");
		String limit = request.getParameter("limit");
		
		
		return taskDao.getTaskList();
	}
}
