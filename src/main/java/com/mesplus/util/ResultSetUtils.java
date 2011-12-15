package com.mesplus.util;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.LinkedHashMap;
import java.util.Map;

public class ResultSetUtils {
	public final static Map<String, Object> convertResultSetToMap(ResultSet rs) throws SQLException {
		Map<String, Object> map = new LinkedHashMap<String, Object>();
		
		ResultSetMetaData meta = rs.getMetaData();
		
		int count = meta.getColumnCount();
		for( int i = 1; i <= count; i++ ) {
			map.put(meta.getColumnName(i).toLowerCase(), rs.getObject(i));
	    }
		
		return map;
	}
}
