package com.mesplus.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.Clob;
import java.sql.SQLException;

public class CommonUtils {

	/**
	 * Check - String Null and Empty
	 * 
	 * @author Jinho
	 * @param value
	 * @return Boolean
	 */
	public final static Boolean isNullorEmpty(String value) {
		if (value == null || value.length() == 0) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * clob 타입에 object를 string로 변환
	 * @param clb
	 * @return
	 * @throws IOException
	 * @throws SQLException
	 */
	public static String clobToString(Clob clb) throws IOException, SQLException {
		if (clb == null) {
			return null;
		}

		StringBuffer str = new StringBuffer();
		String strng;

		BufferedReader bufferRead = new BufferedReader(clb.getCharacterStream());
		
		while ((strng = bufferRead.readLine()) != null)
		{
			str.append(strng);
		}
			
		return str.toString();
	}
}
