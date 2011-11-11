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

	@Autowired
	private ReportDao reportDao;

	@RequestMapping(value = "module/RPT/data/reports.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Report> reports(HttpServletRequest request,
			HttpServletResponse response) {
		String factory = request.getParameter("factory");

		logger.info("factory : " + factory);
		
		return reportDao.selectReports();
	}

	@RequestMapping(value = "module/RPT/data/report.json", method = RequestMethod.GET)
	public @ResponseBody
	Report report(HttpServletRequest request,
			HttpServletResponse response) {
		String factory = request.getParameter("factory");
		String rpt_id = request.getParameter("rpt_id");

		logger.info("factory : " + factory);
		logger.info("rpt_id : " + rpt_id);
		
		Report ret = reportDao.findReport(rpt_id);
		return ret;
	}
}
