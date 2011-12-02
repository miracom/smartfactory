package com.mesplus.DSN.services;

import java.rmi.RemoteException;

import javax.jws.WebService;

import com.mesplus.util.Enums.ReturnType;

@WebService
public class ClsDSNColumnSetup {
	public java.lang.String GetColumnList(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 3) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}
			
			String xName = "COLUMNLIST";
			String a_fac_id = psaParam[0];
			String a_tbl_id = psaParam[1];
			ReturnType rType = ReturnType.ELEMENT;

			//XML: DataTable 
			
			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetColumnListReverse(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 3) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}
			
			String xName = "COLUMNLISTREV";
			String a_tbl_id = psaParam[0];
			String a_tbl_name = psaParam[1];
			ReturnType rType = ReturnType.ELEMENT;

			//XML: DataTable 
			
			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String SetColumn(java.lang.String psParams) throws java.rmi.RemoteException {
		return null;
	}
}
