package com.mesplus.DSN.services;

import java.rmi.RemoteException;

import javax.jws.WebService;

@WebService
public class ClsSYSFunctionSetup {
	public java.lang.String GetFunctionList(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length == 0) {
				throw new RemoteException("ArgumentException: There are no variable(String[] arrParams) parameters.");
			}

			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }

    public java.lang.String SetFunction(java.lang.String psParams) throws java.rmi.RemoteException {
        return null;
    }
}
