package com.mesplus.util;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.jdom.Element;
import org.jdom.output.Format;
import org.jdom.output.XMLOutputter;
import org.springframework.jdbc.core.RowMapper;

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

		int count = meta.getColumnCount();
		for (int i = 1; i <= count; i++) {
			
			Element valueEl = new Element("add");
			valueEl.setAttribute("key", meta.getColumnName(i).toLowerCase());
			if(rs.getObject(i) == null)
			{
				valueEl.setAttribute("value", "");
			}
			else
			{
				valueEl.setAttribute("value", rs.getObject(i).toString());
			}
			valueEl.setAttribute("type", meta.getColumnTypeName(i));
			map.put(meta.getColumnName(i).toLowerCase(), valueEl);
		}

		return map;
	}

	public final static Element maplistToElement(List<Map<String, Object>> mapList, String tableName)
	{
		if(mapList.size() == 0)
		{
			return null;
		}
		else
		{
			Element rootEl = new Element(tableName);
	        //Document doc = new Document(rootEl);
	        
	        Element rowCountEl = new Element("rows");
	        rowCountEl.setAttribute("key", "rows");
	        rowCountEl.setAttribute("value", Integer.toString(mapList.size()));
	        Element columnCountEl = new Element("columns");
	        columnCountEl.setAttribute("key", "columns");
	        columnCountEl.setAttribute("value", Integer.toString(mapList.get(0).size()));
	        
	        rootEl.addContent(rowCountEl);
	        rootEl.addContent(columnCountEl);
	        
	        int i = 1;
	        for (Map<String, Object> map : mapList) {
	        	
	        	Element rowEl = new Element("ROW" + Integer.toString(i));
	        	rootEl.addContent(rowEl);
	        	
	        	Iterator<Entry<String, Object>> it = map.entrySet().iterator();
				while (it.hasNext()) {
					 Map.Entry<String, Object> pairs = (Map.Entry<String, Object>)it.next();
					 rowEl.addContent((Element)pairs.getValue());
				}
	        	i++;
			}
	        
	        return rootEl;
		}
	}
	
	public final static Element groupElement(List<Element> elList)
	{
		Element rootEl = new Element("DataSet");
		
		for (Element element : elList) {
			if(element != null)
			{
				rootEl.addContent(element);
			}
		}
		
		return rootEl;
	}
	
	public final static String elementToXML(Element el)
	{
		XMLOutputter outputter = new XMLOutputter(Format.getPrettyFormat().setEncoding("urf-8"));
		//System.out.println(outputter.outputString(el));		
		return outputter.outputString(el);
	}
	

	public final static RowMapper<Map<String, Object>> getRowMapperObject() {
		RowMapper<Map<String, Object>> rowMapper = new RowMapper<Map<String, Object>>() {
			@Override
			public Map<String, Object> mapRow(ResultSet rs, int rowNum) throws SQLException {
				return ResultSetUtils.convertResultSetToMapObject(rs);
			}
		};

		return rowMapper;
	}
	
	public final static RowMapper<Map<String, Object>> getRowMapperElement() {
		RowMapper<Map<String, Object>> rowMapper = new RowMapper<Map<String, Object>>() {
			@Override
			public Map<String, Object> mapRow(ResultSet rs, int rowNum) throws SQLException {
				return ResultSetUtils.convertResultSetToMapElement(rs);
			}
		};

		return rowMapper;
	}
	
	
//	public final static String mapToXml(Map<String, Object> map, String tableName)
//	{
//		if(map.size() == 0)
//		{
//			return null;
//		}
//		else
//		{
//			Element rootEl = new Element(tableName);
//	        Document doc = new Document(rootEl);
//	        
//	        Element rowCountEl = new Element("rows");
//	        rowCountEl.setAttribute("key", "rows");
//	        rowCountEl.setAttribute("value", "1");
//	        Element columnCountEl = new Element("columns");
//	        columnCountEl.setAttribute("key", "columns");
//	        columnCountEl.setAttribute("value", Integer.toString(map.size()));
//	        
//	        rootEl.addContent(rowCountEl);
//	        rootEl.addContent(columnCountEl);
//	        
//        	Element rowEl = new Element("ROW1");
//        	rootEl.addContent(rowEl);
//        	
//        	Iterator<Entry<String, Object>> it = map.entrySet().iterator();
//			while (it.hasNext()) {
//				 Map.Entry<String, Object> pairs = (Map.Entry<String, Object>)it.next();
//				 rowEl.addContent((Element)pairs.getValue());
//			}
//	       
//	        XMLOutputter outputter = new XMLOutputter(Format.getPrettyFormat().setEncoding("urf-8"));
//	        System.out.println(outputter.outputString(doc));
//	        
//	        return outputter.outputString(doc);
//		}	
//	}

}
