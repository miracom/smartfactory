package com.mesplus.DSN.services;

import java.rmi.RemoteException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.jws.WebService;

import org.jdom.Element;

import com.mesplus.DSN.services.dao.impl.JdbcFormDaoImpl;
import com.mesplus.util.Enums.ReturnType;
import com.mesplus.util.XmlConvert;

@WebService
public class ClsMDIMain {
	public java.lang.String GetLoginInformation(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 5) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String xName = "GetLoginInformation";
			String fac_id = psaParam[0];
			String grp_code = psaParam[1];
			String user_id = psaParam[2];
			String password = psaParam[3];
			String lang_flag = psaParam[4];
			ReturnType rType = ReturnType.ELEMENT;
			
			// XML: DataTable
			List<Map<String, Object>> mapList = 
					JdbcFormDaoImpl.getGlobalFormDao().getuserloginNtDao(fac_id, grp_code, user_id, password, lang_flag, rType);
			Element el = XmlConvert.mapListToDataTableElement(mapList, xName);
			
			List<Element> elList = new ArrayList<Element>();
			elList.add(el);			
			
			Element gEl = XmlConvert.groupElement(elList);
			
			return XmlConvert.elementToXML(gEl);
			
			
						
		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }
}
