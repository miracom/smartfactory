package com.mesplus.DSN.services;

import java.rmi.RemoteException;

import javax.jws.WebService;

import com.mesplus.util.Enums.ReturnType;

@WebService
public class ClsDSNTableSetup {
	public java.lang.String GetTableList(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 4) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String xName = "TABLELIST";
			String fac_id = psaParam[0];
			String tbl_grp = psaParam[1];
			String tbl_code = psaParam[2];
			ReturnType rType = ReturnType.ELEMENT;
			
			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }

    public java.lang.String GetTableListSync() throws java.rmi.RemoteException {
    	try {

    		String xName = "TABLELISTSYNC";
			ReturnType rType = ReturnType.ELEMENT;

			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }

    public java.lang.String SetTable(java.lang.String psParams) throws java.rmi.RemoteException {
        return null;
    }
}
