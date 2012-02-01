package com.mesplus.DSN.services;

import java.rmi.RemoteException;
import java.util.List;
import java.util.Map;

import javax.jws.WebService;

import org.jdom.Element;

import com.mesplus.DSN.services.dao.impl.JdbcFormDaoImpl;
import com.mesplus.util.Enums.ReturnType;
import com.mesplus.util.XmlConvert;

@WebService
public class ClsAPSplusCommonFunction {

	public java.lang.String GetGCMDataList(java.lang.String[] arrParams) throws java.rmi.RemoteException {

		try {
			if (arrParams.length < 0 && arrParams.length > 4) {
				throw new RemoteException("IllegalArgumentException: Parameters(arrParams) should not be " + arrParams.length + " size.");
			}

			String tableName = "GCMDATALIST";
			String fac_id = arrParams[0];
			String tbl_code = arrParams[1];
			String lang_flag = arrParams[2];
			String a_params = arrParams[3];
			ReturnType rType = ReturnType.ELEMENT;
		
			List<Map<String, Object>> mapList = JdbcFormDaoImpl.getGlobalFormDao().tbldatNtDao(fac_id, tbl_code, lang_flag, a_params, rType);
			
			Element el = XmlConvert.mapListToDataTableElement(mapList, tableName);
			
			return XmlConvert.elementToXML(el);
		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetSQLData(java.lang.String[] sSqlText) throws java.rmi.RemoteException {
		try {

			if (sSqlText.length < 0 && sSqlText.length > 5) {
				throw new RemoteException("IllegalArgumentException: Parameters(sSqlText) should not be " + sSqlText.length + " size");
			}

			String tableName = "SQLDATA";
			String a_sql_txt1 = sSqlText[0];
			String a_sql_txt2 = sSqlText[1];
			String a_sql_txt3 = sSqlText[2];
			String a_sql_txt4 = sSqlText[3];
			String a_sql_txt5 = sSqlText[4];
			ReturnType rType = ReturnType.ELEMENT;

			// XML: DataTable
			List<Map<String, Object>> mapList =
					JdbcFormDaoImpl.getGlobalFormDao().selectresultNtDao(a_sql_txt1, a_sql_txt2, a_sql_txt3, a_sql_txt4, a_sql_txt5, rType);
			
			Element el = XmlConvert.mapListToDataTableElement(mapList, tableName);
			
			return XmlConvert.elementToXML(el);

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	//ArrayList가 복수의 Row를 처리할경우 소스를 변경하여야 한다.
	public java.lang.String GetSQLDataArrayList(java.lang.String[] sSqlText) throws java.rmi.RemoteException {
		try {

			if (sSqlText.length < 0 && sSqlText.length > 5) {
				throw new RemoteException("IllegalArgumentException: Parameters(sSqlText) should not be " + sSqlText.length + " size");
			}
			
			String a_sql_txt1 = sSqlText[0];
			String a_sql_txt2 = sSqlText[1];
			String a_sql_txt3 = sSqlText[2];
			String a_sql_txt4 = sSqlText[3];
			String a_sql_txt5 = sSqlText[4];
			ReturnType rType = ReturnType.ELEMENT;

			// XML: ArrayList
			List<Map<String, Object>> mapList =
					JdbcFormDaoImpl.getGlobalFormDao().selectresultNtDao(a_sql_txt1, a_sql_txt2, a_sql_txt3, a_sql_txt4, a_sql_txt5, rType);
			
			Element el = XmlConvert.mapToArrayListElement(mapList.get(0));
			
			return XmlConvert.elementToXML(el);

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetFunctionControl(java.lang.String[] arrParams) throws java.rmi.RemoteException {
		try {

			if (arrParams.length < 0 && arrParams.length > 4) {
				throw new RemoteException("IllegalArgumentException: Parameters(arrParams) should not be " + arrParams.length + " size");
			}

			String tableName = "FUNCTIONCONTROL";
			String fac_id = arrParams[0];
			String grp_id = arrParams[1];
			String usr_id = arrParams[2];
			String fun_id = arrParams[3];
			ReturnType rType = ReturnType.ELEMENT;

			// XML: DataTable
			List<Map<String, Object>> mapList =
					JdbcFormDaoImpl.getGlobalFormDao().fundefCtrlNtDao(fac_id, grp_id, usr_id, fun_id, rType);
			
			Element el = XmlConvert.mapListToDataTableElement(mapList, tableName);
			
			return XmlConvert.elementToXML(el);
			
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
