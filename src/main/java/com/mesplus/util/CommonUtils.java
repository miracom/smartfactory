package com.mesplus.util;

public class CommonUtils {
	
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
