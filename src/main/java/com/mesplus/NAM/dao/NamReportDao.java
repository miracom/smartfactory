package com.mesplus.NAM.dao;

import java.util.List;

import com.mesplus.NAM.model.Report;
import com.mesplus.NAM.model.Report001;

public interface NamReportDao {
	public List<Report> reports();
	public List<Report001> report001();
}
