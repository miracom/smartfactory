package com.mesplus.RPT.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import com.mesplus.RPT.model.Report;

@Component
public interface ReportDao {
	List<Report> selectReports();
	Report findReport(@Param("rpt_id") String rpt_id);
}
