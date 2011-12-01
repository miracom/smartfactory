package com.mesplus.util;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Map;

import org.springframework.jdbc.core.RowMapper;

public final class ObjcetMapper implements RowMapper<Map<String, Object>> {
    @Override
    public Map<String, Object> mapRow(ResultSet rs, int rowNum) throws SQLException {
    	return ResultSetUtils.convertResultSetToMapObject(rs);
    }
    
    
}