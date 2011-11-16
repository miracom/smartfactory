package com.mesplus.MBI.dao;

import java.util.List;
import java.util.Map;

import com.mesplus.MBI.model.Query;

public interface QueryDao {
	public List<Map<String, Object>> selectQueries(String factory);
	public Query findQuery(String factory, String queryid);
}
