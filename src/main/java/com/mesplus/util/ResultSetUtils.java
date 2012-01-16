package com.mesplus.util;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.LinkedHashMap;
import java.util.Map;

import org.jdom.Element;

public class ResultSetUtils {
	
	/**
	 * RowMapper에서 ResultSet을 받아 Map<String, Object> 변환
	 * @author Jinho
	 * @param rs
	 * @return Map<String, Object>
	 * @throws SQLException
	 */
	public final static Map<String, Object> convertResultSetToMapObject(ResultSet rs) throws SQLException {
		Map<String, Object> map = new LinkedHashMap<String, Object>();

		ResultSetMetaData meta = rs.getMetaData();

		int count = meta.getColumnCount();
		for (int i = 1; i <= count; i++) {
			map.put(meta.getColumnName(i).toLowerCase(), rs.getObject(i));
		}

		return map;
	}

	/**
	 * RowMapper에서 ResultSet을 받아 Map<String, Element> 변환
	 * @author Jinho
	 * @param rs
	 * @param typeMap
	 * @return Map<String, Object>
	 * @throws SQLException
	 */
	public final static Map<String, Object> convertResultSetToMapElement(ResultSet rs, Map<String, String> typeMap) throws SQLException {
		Map<String, Object> map = new LinkedHashMap<String, Object>();

		ResultSetMetaData meta = rs.getMetaData();

		for (int i = 1; i <= meta.getColumnCount(); i++) {

			String key = meta.getColumnName(i);
			String type = TypeConvert.getChangeType(meta.getColumnTypeName(i), typeMap);
			String value = "";

			//쿼리중 rs.getObject(i) 두번 입력해서 사용하면 스트림이 종료되어 나왔다는 오류가 발생하여 Object 변수에 담아놓고 처리
			Object rsObject = rs.getObject(i);
			if (rsObject != null) {
				value = rsObject.toString();
			}

			Element el = XmlConvert.makeElement(key, value, type);

			map.put(meta.getColumnName(i).toLowerCase(), el);
		}

		return map;
	}
}
