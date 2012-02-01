package com.mesplus.DSN.services;

import java.rmi.RemoteException;

import javax.jws.WebService;

@WebService
public class ClsDSNDatabaseSynchronization {
	public java.lang.String GetCompareDB(java.lang.String[] parrParams) throws java.rmi.RemoteException {
		try {

			/*if (parrParams.length < 0 && parrParams.length > 2) {
				throw new RemoteException("IllegalArgumentException: Parameters(parrParams) should not be " + parrParams.length + " size");
			}

			String a_table_group = parrParams[0];
			String a_table_code = parrParams[1];
			ReturnType rType = ReturnType.ELEMENT;*/
			
			//XML: DataSet(2Cursor)
			
			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }
}
