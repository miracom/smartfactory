package com.mesplus.RPT.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mesplus.RPT.dao.ReportDao;
import com.mesplus.RPT.model.Report;
import com.mesplus.smartfactory.HomeController;

@Controller
public class RPTController {
	private static final Logger logger = LoggerFactory
			.getLogger(HomeController.class);
	
	private ReportDao reportDao;
	
	@Autowired
	public void setReportDao(ReportDao reportDao) {
		this.reportDao = reportDao;
	}

	@RequestMapping(value = "module/RPT/data/reports.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Report> reports(HttpServletRequest request,
			HttpServletResponse response) {
		String factory_id = request.getParameter("factory_id");

		logger.info("factory_id : " + factory_id);
		
		return reportDao.selectReports();
	}

	@RequestMapping(value = "module/RPT/data/report.json", method = RequestMethod.GET)
	public @ResponseBody
	Report report(HttpServletRequest request,
			HttpServletResponse response) {
		String factory_id = request.getParameter("factory_id");
		String resource_id = request.getParameter("resource_id");

		logger.info("factory_id : " + factory_id);
		logger.info("resource_id : " + resource_id);
		
		Report ret = reportDao.findReport(resource_id);
		return ret;
	}
}
