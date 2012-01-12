package com.mesplus.DSN.services;

import java.rmi.RemoteException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.jws.WebService;

import org.jdom.Element;

import com.mesplus.DSN.services.dao.impl.JdbcFormDaoImpl;
import com.mesplus.util.XmlConvert;
import com.mesplus.util.Enums.ReturnType;

@WebService
public class ClsDSNColumnSetup {
	public java.lang.String GetColumnList(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 2) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}
			
			String xName = "COLUMNLIST";
			String fac_id = psaParam[0];
			String tbl_id = psaParam[1];
			ReturnType rType = ReturnType.ELEMENT;

			//XML: DataTable 
			List<Map<String, Object>> mapList =
					JdbcFormDaoImpl.getGlobalFormDao().coldefNtDao(fac_id, tbl_id, rType);
			Element el = XmlConvert.mapListToDataTableElement(mapList, xName);
						
			return XmlConvert.elementToXML(el);

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetColumnListReverse(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 2) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}
			
			String xName = "COLUMNLISTREV";
			String tbl_id = psaParam[0];
			String tbl_name = psaParam[1];
			ReturnType rType = ReturnType.ELEMENT;

			//XML: DataTable 
			
			List<Map<String, Object>> mapList =
					JdbcFormDaoImpl.getGlobalFormDao().colrevNtDao(tbl_id, tbl_name, rType);
			Element el = XmlConvert.mapListToDataTableElement(mapList, xName);
						
			return XmlConvert.elementToXML(el);

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String SetColumn(java.lang.String psParams) throws java.rmi.RemoteException {
		return null;
	}
}
