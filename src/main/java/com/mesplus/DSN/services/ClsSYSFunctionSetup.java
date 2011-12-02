package com.mesplus.DSN.services;

import java.rmi.RemoteException;

import javax.jws.WebService;

import com.mesplus.util.Enums.ReturnType;

@WebService
public class ClsSYSFunctionSetup {
	public java.lang.String GetFunctionList(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 5) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String xName = "FACTORYLIST";
			String fac_id = psaParam[0];
			String func_group = psaParam[1];
			String func_code = psaParam[2];
			String function_type = psaParam[3];
			ReturnType rType = ReturnType.ELEMENT;
			
			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
    }

    public java.lang.String SetFunction(java.lang.String psParams) throws java.rmi.RemoteException {
        return null;
    }
}
