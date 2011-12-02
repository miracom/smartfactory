package com.mesplus.DSN.services;

import java.rmi.RemoteException;

import javax.jws.WebService;

import com.mesplus.util.Enums.ReturnType;

@WebService
public class ClsDSNExcelTemplateSetup {
	public java.lang.String[] GetTemplateFileList() throws java.rmi.RemoteException {
		try {
			
			ReturnType rType = ReturnType.ELEMENT;
			
			
			//string[]
			
			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }

    public java.lang.String GetExcelTemplate(java.lang.String[] psaParam) throws java.rmi.RemoteException {
    	try {

    		if (psaParam.length < 0 && psaParam.length > 3) {
				throw new RemoteException("IllegalArgumentException: Parameters(arrParams) should not be " + psaParam.length + " size");
			}
    		
    		String xName = "EXCELTEMPLATE";
			String template_name = psaParam[0];
			String template_filename = psaParam[1];
			ReturnType rType = ReturnType.ELEMENT;
			
			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }

    public java.lang.String GetExcelTemplateSheet(java.lang.String[] psaParam) throws java.rmi.RemoteException {
    	try {

    		if (psaParam.length < 0 && psaParam.length > 2) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}
    		
    		String xName = "EXCELTEMPLATESHEET";
			String template_id = psaParam[0];
			ReturnType rType = ReturnType.ELEMENT;

			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }

    public java.lang.String GetExcelTemplateField(java.lang.String[] psaParam) throws java.rmi.RemoteException {
    	try {

    		if (psaParam.length < 0 && psaParam.length > 2) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

    		String xName = "EXCELTEMPLATEFIELD";
			String sheet_id = psaParam[0];
			ReturnType rType = ReturnType.ELEMENT;
			
			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }

    public java.lang.String SetExcelTemplateAll(java.lang.String psParamsExcelTemplate, java.lang.String psParamsExcelTemplateSheet, java.lang.String psParamsExcelTemplateField) throws java.rmi.RemoteException {
        return null;
    }
}
