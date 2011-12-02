package com.mesplus.util;

public class CommonUtils {
	
	/**
	 * Check - String Null and Empty
	 * @author Jinho
	 * @param value
	 * @return Boolean
	 */
	public final static Boolean isNullorEmpty(String value)
	{
		if(value == null || value.length() == 0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}
