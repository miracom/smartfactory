package com.mesplus.util;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

public class TypeConvert {
	public final static Map<String,String> getMappingType() 
	{	
		//참고: Oracle Native Types Supported by ODP.NET   
		Map<String, String> typeMap  = new HashMap<String, String>(); 
		typeMap.put("BFILE", "System.Byte[]");
		typeMap.put("BLOB", "System.Byte[]");
		typeMap.put("CHAR", "System.String");
		typeMap.put("CLOB", "System.String");
		typeMap.put("DATE", "System.DateTime");
		typeMap.put("INTERVAL DAY TO SECOND", "System.TimeSpan");
		typeMap.put("INTERVAL YEAR TO MONTH","System.Int64");
		typeMap.put("LONG","System.String");
		typeMap.put("LONG RAW","System.Byte[]");
		typeMap.put("NCLOB", "System.String");
		typeMap.put("NCHAR", "System.String");
		typeMap.put("NUMBER", "System.Decimal");
		typeMap.put("NVARCHAR2", "System.String");
		typeMap.put("RAW", "System.Byte[]");
		typeMap.put("REF CURSOR", "Not Applicable");
		typeMap.put("TIMESTAMP", "System.DateTime");
		typeMap.put("TIMESTAMP WITH LOCAL TIME ZONE", "System.DateTime");
		typeMap.put("TIMESTAMP WITH TIME ZONE", "System.DateTime");
		typeMap.put("UROWID", "System.String");
		typeMap.put("VARCHAR2", "System.String");
		typeMap.put("XMLType", "System.String");

		return typeMap;
	}
	
	public final static String getChangeType(String typeValue, Map<String, String> mappingType) throws SQLException
	{
		if(mappingType.size() == 0)
		{
			throw new IllegalArgumentException("Parameters(mappingType) should not be 0 size.");
		}
		else if(CommonUtils.isNullorEmpty(typeValue))
		{
			throw new IllegalArgumentException("Parameters(typeValue) should not be nullorEmpty.");
		}
		else
		{
			if(mappingType.containsKey(typeValue))
			{
				return mappingType.get(typeValue);
			}
			else
			{
				return "System.String"; //default Type
			}
		}
	}
	
}
