package com.mesplus.RPT.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mesplus.RPT.model.Report;

public interface ReportDao {
	List<Report> selectReports();
	Report findReport(@Param("report_id") String report_id);
}
