package com.mesplus.util;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import org.jdom.Element;

public class ResultSetUtils {
	public final static Map<String, Object> convertResultSetToMapObject(ResultSet rs) throws SQLException {
		Map<String, Object> map = new HashMap<String, Object>();

		ResultSetMetaData meta = rs.getMetaData();

		int count = meta.getColumnCount();
		for (int i = 1; i <= count; i++) {
			map.put(meta.getColumnName(i).toLowerCase(), rs.getObject(i));
		}

		return map;
	}

	public final static Map<String, Object> convertResultSetToMapElement(ResultSet rs) throws SQLException {
		Map<String, Object> map = new HashMap<String, Object>();

		ResultSetMetaData meta = rs.getMetaData();

		for (int i = 1; i <= meta.getColumnCount(); i++) {

			String key = meta.getColumnName(i);
			String type = meta.getColumnTypeName(i);
			String value = "";
			if (rs.getObject(i) != null) {
				value = rs.getObject(i).toString();
			}

			Element el = XmlConvert.makeElement(key, value, type);

			map.put(meta.getColumnName(i).toLowerCase(), el);
		}

		return map;
	}
}
