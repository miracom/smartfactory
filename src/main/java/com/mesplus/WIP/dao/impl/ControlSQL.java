package com.mesplus.WIP.dao.impl;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import oracle.jdbc.OracleTypes;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.SqlOutParameter;
import org.springframework.jdbc.object.StoredProcedure;

public class ControlSQL extends StoredProcedure {
	private static final String SPROC_NAME = "P_ADSNCONSQL_GEN_NT";

    public ControlSQL(DataSource dataSource) {
        super(dataSource, SPROC_NAME);
        declareParameter(new SqlOutParameter("cur.refer", OracleTypes.CURSOR, new RowMapper<Map<String, Object>>(){

			@Override
			public Map<String, Object> mapRow(ResultSet rs, int rowNum) throws SQLException {
				Map<String, Object> map = new HashMap<String, Object>();
    			
    			ResultSetMetaData rsMD= rs.getMetaData();
    			int rsMDCnt = rsMD.getColumnCount();
    			for( int i = 1; i <= rsMDCnt; i++ ) {    				
    				String column = rsMD.getColumnName(i).toLowerCase();
				    String value  = rs.getString(column);
				    				    
				    map.put(column, value);
			    }
				return map;
			}
        	
        }));
        compile();
    }

//    public Map<String, Object> execute(String fac_id, String func_id) {
//    	Map<String, Object> params = new HashMap<String, Object>();
//    	params.put("fac_id", fac_id);
//    	params.put("func_id", func_id);
    	
//        return super.execute(fac_id, func_id);
//    }
}
