package com.mesplus.NAM.dao;

import java.util.List;

import org.springframework.stereotype.Component;

import com.mesplus.NAM.model.Report;
import com.mesplus.NAM.model.Report001;

@Component
public interface NamReportDao {
	public List<Report> reports();
	public List<Report001> report001();
}
