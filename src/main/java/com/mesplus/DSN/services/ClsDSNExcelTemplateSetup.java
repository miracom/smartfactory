package com.mesplus.DSN.services;

import java.rmi.RemoteException;

import javax.jws.WebService;

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

			if (psaParam.length == 0) {
				throw new RemoteException("ArgumentException: There are no variable(String[] psaParam) parameters.");
			}

			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }

    public java.lang.String GetExcelTemplateSheet(java.lang.String[] psaParam) throws java.rmi.RemoteException {
    	try {

			if (psaParam.length == 0) {
				throw new RemoteException("ArgumentException: There are no variable(String[] psaParam) parameters.");
			}

			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }

    public java.lang.String GetExcelTemplateField(java.lang.String[] psaParam) throws java.rmi.RemoteException {
    	try {

			if (psaParam.length == 0) {
				throw new RemoteException("ArgumentException: There are no variable(String[] psaParam) parameters.");
			}

			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }

    public java.lang.String SetExcelTemplateAll(java.lang.String psParamsExcelTemplate, java.lang.String psParamsExcelTemplateSheet, java.lang.String psParamsExcelTemplateField) throws java.rmi.RemoteException {
        return null;
    }
}
