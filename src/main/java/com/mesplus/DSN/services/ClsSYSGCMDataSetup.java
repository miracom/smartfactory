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
public class ClsSYSGCMDataSetup {
	public java.lang.String GetGCMDataList(java.lang.String[] arrParams) throws java.rmi.RemoteException {
		try {

			if (arrParams.length < 0 && arrParams.length > 4) {
				throw new RemoteException("IllegalArgumentException: Parameters(arrParams) should not be " + arrParams.length + " size");
			}

			String xName = "GCMDATALIST";
			String fac_id = arrParams[0];
			String tbl_code = arrParams[1];
			String lang_flag = arrParams[2];
			String a_params = arrParams[3];
			ReturnType rType = ReturnType.ELEMENT;
			
			// XML: DataTable
			List<Map<String, Object>> mapList = 
					JdbcFormDaoImpl.getGlobalFormDao().tbldatNtDao(fac_id, tbl_code, lang_flag, a_params, rType);
			
			Element el = XmlConvert.mapListToDataTableElement(mapList, xName);
			
			return XmlConvert.elementToXML(el);
		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }

}
