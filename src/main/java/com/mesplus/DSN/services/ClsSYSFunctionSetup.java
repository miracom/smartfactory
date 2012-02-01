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
public class ClsSYSFunctionSetup {
	public java.lang.String GetFunctionList(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 4) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String tableName = "FACTORYLIST";
			String fac_id = psaParam[0];
			String func_group = psaParam[1];
			String func_code = psaParam[2];
			String func_type = psaParam[3];
			ReturnType rType = ReturnType.ELEMENT;
			
			// XML: DataTable
			List<Map<String, Object>> mapList = 
					JdbcFormDaoImpl.getGlobalFormDao().fundefNtDao(fac_id, func_group, func_code, func_type, rType);
			
			Element el = XmlConvert.mapListToDataTableElement(mapList, tableName);
			
			return XmlConvert.elementToXML(el);
			
		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }

	public java.lang.String GetFunctionList01(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 1) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String tableName = "FACTORYLIST";
			String func_code = psaParam[0];
			ReturnType rType = ReturnType.ELEMENT;
			
			// XML: DataTable
			List<Map<String, Object>> mapList = 
					JdbcFormDaoImpl.getGlobalFormDao().fundef01NtDao(func_code, rType);
			
			Element el = XmlConvert.mapListToDataTableElement(mapList, tableName);
			
			return XmlConvert.elementToXML(el);
			
		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }
}
