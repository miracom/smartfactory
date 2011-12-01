package com.mesplus.util;

import java.io.ByteArrayInputStream;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.jdom.Document;
import org.jdom.Element;
import org.jdom.input.SAXBuilder;
import org.jdom.output.Format;
import org.jdom.output.XMLOutputter;

public class XmlConvert {
	public final static Element makeElement(String key, String value, String type) throws SQLException {

		if (CommonUtils.isNullorEmpty(key) || value == null || CommonUtils.isNullorEmpty(type)) {
			throw new IllegalArgumentException("Parameters(key, value, type) should not be null.");
		}

		Element el = new Element("add");

		el.setAttribute("key", key);
		el.setAttribute("value", value);
		el.setAttribute("type", type);

		return el;
	}

	public final static Element mapListToDataTableElement(List<Map<String, Object>> mapList, String tableName) throws Exception {
		if (mapList.size() == 0) {
			throw new IllegalArgumentException("Parameters(mapList) should not be 0 size.");
		} else if (CommonUtils.isNullorEmpty(tableName)) {
			throw new IllegalArgumentException("Parameters(tableName) should not be nullorEmpty.");
		} else {
			Element rootEl = new Element(tableName);

			Element rowCountEl = new Element("add");
			rowCountEl.setAttribute("key", "rows");
			rowCountEl.setAttribute("value", Integer.toString(mapList.size()));
			Element columnCountEl = new Element("add");
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

					Map.Entry<String, Object> pairs = (Map.Entry<String, Object>) it.next();

					if (pairs.getValue() instanceof Element) {
						rowEl.addContent((Element) pairs.getValue());
					} else {
						throw new Exception("Map FormatException: " + pairs.getKey());
					}
				}
				i++;
			}

			return rootEl;
		}
	}

	public final static Element mapToArrayListElement(Map<String, Object> map) throws Exception {
		if (map.size() == 0) {
			throw new IllegalArgumentException("Parameters(map) should not be 0 size.");
		} else {
			Element rootEl = new Element("ArrayList");

			Element rowCountEl = new Element("add");
			rowCountEl.setAttribute("key", "rows");
			rowCountEl.setAttribute("value", "1");
			rootEl.addContent(rowCountEl);

			Element rowEl = new Element("ROW1");
			rootEl.addContent(rowEl);

			Element columnCountEl = new Element("add");
			columnCountEl.setAttribute("key", "columns");
			columnCountEl.setAttribute("value", Integer.toString(map.size()));
			rowEl.addContent(columnCountEl);

			Iterator<Entry<String, Object>> it = map.entrySet().iterator();

			while (it.hasNext()) {

				Map.Entry<String, Object> pairs = (Map.Entry<String, Object>) it.next();

				if (pairs.getValue() instanceof Element) {
					rowEl.addContent((Element) pairs.getValue());
				} else {
					throw new Exception("Map FormatException: " + pairs.getKey());
				}
			}

			return rootEl;
		}
	}

	public final static Element groupElement(List<Element> elList) throws Exception {

		if (elList.size() == 0) {
			throw new IllegalArgumentException("Parameters(elList) should not be 0 size.");
		} else {
			Element rootEl = new Element("DataSet");

			Element tblCountEl = new Element("add");
			tblCountEl.setAttribute("key", "TableCount");
			tblCountEl.setAttribute("value", Integer.toString(elList.size()));
			rootEl.addContent(tblCountEl);

			for (Element element : elList) {
				if (element != null) {
					rootEl.addContent(element);
				}
			}

			return rootEl;
		}

	}

	public final static String elementToXML(Element el) throws Exception {
		if (el == null) {
			throw new IllegalArgumentException("Parameters(el) should not be 0 size.");
		} else {
			XMLOutputter outputter = new XMLOutputter(Format.getPrettyFormat().setEncoding("urf-8"));

			return outputter.outputString(el);
		}
	}

	public final static List<String> xmlToArrayList(String xmlStr) throws Exception {
		if (CommonUtils.isNullorEmpty(xmlStr)) {
			throw new IllegalArgumentException("Parameters(xmlStr) should not be null.");
		} else {
			Document doc = new Document();
			SAXBuilder sb = new SAXBuilder();

			ByteArrayInputStream is = new ByteArrayInputStream(xmlStr.getBytes("UTF-8"));
			doc = sb.build(is);

			List<String> arrayList = new ArrayList<String>();
			if (doc != null) {
				Element root = doc.getRootElement();

				// Element rowCntEl = (Element)root.getContent(0);
				// int nRows =
				// Integer.parseInt(rowCntEl.getAttributeValue("value"));

				Element rowsEl = root.getChild("Row1");
				Element colCntEl = (Element) rowsEl.getContent(0);
				int nCols = Integer.parseInt(colCntEl.getAttributeValue("value"));
				nCols = 3;
				for (int i = 1; i < nCols; i++) {
					Element el = (Element) rowsEl.getContent(i);
					String item = el.getAttributeValue("value");
					arrayList.add(item);
				}

				return arrayList;
			} else {
				throw new Exception("NullException: Document");
			}
		}
	}
}
