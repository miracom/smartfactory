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
public class ClsDSNTableSetup {
	public java.lang.String GetTableList(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 6) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}
			
			String tableName = "TABLELIST";
			String fac_id = psaParam[0]; //2510
			String tbl_grp = psaParam[1]; //""
			String tbl_code = psaParam[2]; //""
			String physical_table = psaParam[3]; //T
			String physical_view = psaParam[4]; //V
			String logical_view = psaParam[5]; //L
			ReturnType rType = ReturnType.ELEMENT;
			
			List<Map<String, Object>> mapList = 
					JdbcFormDaoImpl.getGlobalFormDao().tbldefNtDao(fac_id, tbl_grp, tbl_code, physical_table, physical_view, logical_view, rType);
			
			Element el = XmlConvert.mapListToDataTableElement(mapList, tableName);
			
			return XmlConvert.elementToXML(el);

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }

    public java.lang.String GetTableListSync() throws java.rmi.RemoteException {
    	try {

    		String tableName = "TABLELISTSYNC";
			ReturnType rType = ReturnType.ELEMENT;

			List<Map<String, Object>> mapList = 
					JdbcFormDaoImpl.getGlobalFormDao().tblsynNtDao(rType);
			
			Element el = XmlConvert.mapListToDataTableElement(mapList, tableName);
			
			return XmlConvert.elementToXML(el);

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }

    public java.lang.String SetTable(java.lang.String psParams) throws java.rmi.RemoteException {
    	try {
    		
    		String methodName = "TABLE"; //Message Name
    		
    		List<String> arrParams = XmlConvert.xmlToArrayList(psParams);
			return JdbcFormDaoImpl.getGlobalFormDao().tbldefRtDao(arrParams,methodName);
			
    	} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }
}
