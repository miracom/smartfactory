package com.mesplus.CMN.dao;

import java.util.List;
import java.util.Map;

import com.mesplus.CMN.model.Filter;
import com.mesplus.CMN.model.Sorter;
import com.mesplus.CMN.model.Sqlparams;

public interface GcmDataDao {
	public List<Map<String, Object>> select(String table, String[] selects, List<Filter> filters, int start, int limit, Map<String, Object> gcmDef, List<Sqlparams> sqlparams);
	public int selectCount(String table, List<Filter> filters, Map<String,Object> gcmDef);
	public Map<String, Object> find( String table,String from, String[] selects, List<Filter> filters, Map<String,Object> gcmDef);
}
