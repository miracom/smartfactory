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
public class ClsDSNExcelTemplateSetup {
	public java.lang.String[] GetTemplateFileList() throws java.rmi.RemoteException {
		try {
			
			
			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }

    public java.lang.String GetExcelTemplate(java.lang.String[] psaParam) throws java.rmi.RemoteException {
    	try {

    		if (psaParam.length < 0 && psaParam.length > 2) {
				throw new RemoteException("IllegalArgumentException: Parameters(arrParams) should not be " + psaParam.length + " size");
			}
    		
    		String tableName = "EXCELTEMPLATE";
			String template_name = psaParam[0];
			String template_filename = psaParam[1];
			ReturnType rType = ReturnType.ELEMENT;
			
			List<Map<String, Object>> mapList = 
					JdbcFormDaoImpl.getGlobalFormDao().xtpdefNtDao(template_name, template_filename, rType);
			
			Element el = XmlConvert.mapListToDataTableElement(mapList, tableName);
			
			return XmlConvert.elementToXML(el);

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }

    public java.lang.String GetExcelTemplateSheet(java.lang.String[] psaParam) throws java.rmi.RemoteException {
    	try {

    		if (psaParam.length < 0 && psaParam.length > 1) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}
    		
    		String tableName = "EXCELTEMPLATESHEET";
			String template_id = psaParam[0];
			ReturnType rType = ReturnType.ELEMENT;

			List<Map<String, Object>> mapList =
					JdbcFormDaoImpl.getGlobalFormDao().xtpsheNtDao(template_id, rType);
			
			Element el = XmlConvert.mapListToDataTableElement(mapList, tableName);
			
			return XmlConvert.elementToXML(el);

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }

    public java.lang.String GetExcelTemplateField(java.lang.String[] psaParam) throws java.rmi.RemoteException {
    	try {

    		if (psaParam.length < 0 && psaParam.length > 1) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

    		String tableName = "EXCELTEMPLATEFIELD";
			String sheet_id = psaParam[0];
			ReturnType rType = ReturnType.ELEMENT;
			
			List<Map<String, Object>> mapList = 
					JdbcFormDaoImpl.getGlobalFormDao().xtpfldNtDao(sheet_id, rType);
			
			Element el = XmlConvert.mapListToDataTableElement(mapList, tableName);
			
			return XmlConvert.elementToXML(el);
			
		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }

    public java.lang.String SetExcelTemplateAll(java.lang.String psParamsExcelTemplate, java.lang.String psParamsExcelTemplateSheet, java.lang.String psParamsExcelTemplateField) throws java.rmi.RemoteException {
        return null;
    }
}
