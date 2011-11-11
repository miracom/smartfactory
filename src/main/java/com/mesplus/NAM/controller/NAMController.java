package com.mesplus.NAM.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mesplus.NAM.dao.NamReportDao;
import com.mesplus.NAM.model.Report;
import com.mesplus.NAM.model.Report001;

@Controller
public class NAMController {
	
	@Autowired
	private NamReportDao namReportDao;

	@RequestMapping(value = "module/NAM/data/reports.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Report> reports(HttpServletRequest request, HttpServletResponse resp) {

		List<Report> reports = namReportDao.reports();

		return reports;
	}

	@RequestMapping(value = "module/NAM/data/report001.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Report001> report001(HttpServletRequest request, HttpServletResponse resp) {

		List<Report001> reports = namReportDao.report001();
		
		return reports;
	}
}
