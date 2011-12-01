package com.mesplus.DSN.services;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.rmi.RemoteException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.jws.WebService;

import org.jdom.Document;
import org.jdom.Element;
import org.jdom.input.SAXBuilder;

import com.mesplus.DSN.services.dao.impl.JdbcFormDaoImpl;
import com.mesplus.util.ResultSetUtils;
import com.mesplus.util.XmlConvert;
import com.mesplus.util.Enums.*;;

@WebService
public class ClsAPSplusCommonFunction {

	public java.lang.String GetGCMDataList(java.lang.String[] arrParams) throws java.rmi.RemoteException {

		try {
			if (arrParams.length < 0 && arrParams.length > 5) {
				throw new RemoteException("ArgumentException: There are no variable(String[] arrParams) parameters.");
			}
			
			String xName = "GCMDATALIST";
			String a_fac_id = arrParams[0];
			String a_tbl_code = arrParams[1];
			String a_lang_flag = arrParams[2];
			String a_params = arrParams[3];
			ReturnType rType = ReturnType.ELEMENT;
			
			
			//List<Map<String, Object>> mapList =  JdbcFormDaoImpl.getGlobalFormDao().tbldatNtDao(a_fac_id, a_tbl_code, a_lang_flag, a_params, rType);
			List<Map<String, Object>> mapList =  JdbcFormDaoImpl.getGlobalFormDao().grpcolNtDao(a_fac_id, a_tbl_code, a_lang_flag, rType);
			Element el = XmlConvert.mapListToDataTableElement(mapList, xName);

			List<Map<String, Object>> mapList2 =  JdbcFormDaoImpl.getGlobalFormDao().fsprelNtDao("83", "904", "1", rType);
			Element el2 = XmlConvert.mapListToDataTableElement(mapList2, "TEST");
			
			List<Element> elList = new ArrayList<Element>();
			elList.add(el2);
			elList.add(el);
			
			Element gEl =XmlConvert.groupElement(elList);
			
			return XmlConvert.elementToXML(gEl);
			
			
//			Map<String, Object> map = JdbcFormDaoImpl.getGlobalFormDao().dynamicS2RtDao("U", "1024", "1", "83", "ADMIN", "1", "LOT0001`^55555`^A`^xxxxx", rType);
//			Element el = XmlConvert.mapToArrayListElement(map);
//			return XmlConvert.elementToXML(el);
			
			// List<String> aa = XmlConvert.xmlToArrayList(a_fac_id);
			// for (String s : aa) {
			// System.out.println(s);
			// }
			//return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetSQLData(java.lang.String[] sSqlText) throws java.rmi.RemoteException {
		try {

			if (sSqlText.length == 0) {
				throw new RemoteException("ArgumentException: There are no variable(String[] sSqlText) parameters.");
			}

			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetSQLDataArrayList(java.lang.String[] sSqlText) throws java.rmi.RemoteException {
		try {

			if (sSqlText.length == 0) {
				throw new RemoteException("ArgumentException: There are no variable(String[] sSqlText) parameters.");
			}

			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetFunctionControl(java.lang.String[] arrParams) throws java.rmi.RemoteException {
		try {

			if (arrParams.length == 0) {
				throw new RemoteException("ArgumentException: There are no variable(String[] arrParams) parameters.");
			}

			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String SetSQLData(java.lang.String psSqlText) throws java.rmi.RemoteException {
		return null;
	}

	public java.lang.String ExecuteDDLQueryOnly(java.lang.String psSqlText) throws java.rmi.RemoteException {
		return null;
	}

	public java.lang.String UploadFile(byte[] pbaFile, java.lang.String psFileName) throws java.rmi.RemoteException {
		return null;
	}
}
