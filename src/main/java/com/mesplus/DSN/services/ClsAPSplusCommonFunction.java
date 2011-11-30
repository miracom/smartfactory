package com.mesplus.DSN.services;

import java.rmi.RemoteException;

import javax.jws.WebService;

@WebService
public class ClsAPSplusCommonFunction {

	public java.lang.String GetGCMDataList(java.lang.String[] arrParams) throws java.rmi.RemoteException {

		try {

			if (arrParams.length == 0) {
				throw new RemoteException("Null Exception: String[] arrParams");
			}

			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetSQLData(java.lang.String[] sSqlText) throws java.rmi.RemoteException {
		return null;
	}

	public java.lang.String GetSQLDataArrayList(java.lang.String[] sSqlText) throws java.rmi.RemoteException {
		return null;
	}

	public java.lang.String GetFunctionControl(java.lang.String[] arrParams) throws java.rmi.RemoteException {
		return null;
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
