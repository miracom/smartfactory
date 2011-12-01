package com.mesplus.DSN.services;

import java.rmi.RemoteException;

import javax.jws.WebService;

@WebService
public class ClsDSNDatabaseSynchronization {
	public java.lang.String GetCompareDB(java.lang.String[] parrParams) throws java.rmi.RemoteException {
		try {

			if (parrParams.length == 0) {
				throw new RemoteException("ArgumentException: There are no variable(String[] parrParams) parameters.");
			}

			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }
}
