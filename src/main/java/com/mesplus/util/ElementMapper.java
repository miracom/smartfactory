package com.mesplus.util;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Map;

import org.springframework.jdbc.core.RowMapper;

public final class ElementMapper implements RowMapper<Map<String, Object>> {
	
	private Map<String, String> chgngeTypeMap = null;
	
	public ElementMapper(Map<String, String> typeMap)
	{
		this.chgngeTypeMap = typeMap;
	}
	
	@Override
    public Map<String, Object> mapRow(ResultSet rs, int rowNum) throws SQLException {
		return ResultSetUtils.convertResultSetToMapElement(rs, chgngeTypeMap);
    }

}