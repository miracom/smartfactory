package com.mesplus.DSN.services;

import java.rmi.RemoteException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.jws.WebService;

import org.jdom.Element;

import com.mesplus.DSN.services.dao.impl.JdbcFormDaoImpl;
import com.mesplus.util.XmlConvert;
import com.mesplus.util.Enums.ReturnType;

@WebService
public class ClsDSNMapDesigner {
	public java.lang.String GetDesignerS2(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 6) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}
			
			String xName1 = "COLINFO";
			String xName2 = "WHERECLAUSE";
			String xName3 = "PMAPINFO";
			String xName4 = "PCOLINFO";
			String xName5 = "AMAPINFO";
			String xName6 = "ACOLINFO";
			String xName7 = "FUNVLDREL";
			String xName8 = "FUNSPREL";
			String xName9 = "FUNSVREL";
			String xName10 = "CHARTINFO";
			String xName11 = "FunctionTemplate";
			String xName12 = "FunctionTemplateField";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String grp_user_id = psaParam[2];
			String lang_flag = psaParam[3];
			String admin_user = psaParam[4];
			ReturnType rType = ReturnType.ELEMENT;

			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetPersonalizationMap(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 4) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String xName = "PMAPINFO";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String grp_usr_id = psaParam[2];
			ReturnType rType = ReturnType.ELEMENT;
			
			
			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetAdminMap(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 4) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String xName = "AMAPINFO";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String grp_usr_id = psaParam[2];
			ReturnType rType = ReturnType.ELEMENT;
			
			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetPersonalizationCol(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 5) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String xName = "PCOLINFO";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String grp_usr_id = psaParam[2];
			String lang_flag = psaParam[3];
			ReturnType rType = ReturnType.ELEMENT;
			
			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetAdminCol(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 5) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String xName = "ACOLINFO";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String grp_usr_id = psaParam[2];
			String lang_flag = psaParam[3];
			ReturnType rType = ReturnType.ELEMENT;
			
			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetFunctionSpreadList(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 3) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String xName = "FunctionSpreadList";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			ReturnType rType = ReturnType.ELEMENT;
			
			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetFunctionRelationList(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 6) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String xName1 = "WHERECLAUSE";
			String xName2 = "FunctionTableRelationList";
			String xName3 = "FUNVLDREL";
			String xName4 = "FunctionSPRelationList";
			String xName5 = "FunctionServiceRelationList";
			String xName6 = "ChartProperties";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String spd_id = psaParam[2];
			String tab_id = psaParam[3];
			String admin_user = psaParam[4];
			ReturnType rType = ReturnType.ELEMENT;
		
			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetFunctionTableRelationList(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 5) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String xName = "FunctionTableRelationList";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String spd_id = psaParam[2];
			String tab_id = psaParam[3];
			ReturnType rType = ReturnType.ELEMENT;
			
			
			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetFunctionSPRelationList(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 5) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String xName = "FunctionSPRelationList";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String spd_id = psaParam[2];
			String tab_id = psaParam[3];
			ReturnType rType = ReturnType.ELEMENT;
			
			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetDesignerFunctionSpreadAll(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 4) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}
			
			String xName1 = "COLINFO";
			String xName2 = "CONDITIONLIST";
			String xName3 = "FunctionSpreadList";
			String xName4 = "FunctionTemplateList";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String admin_user = psaParam[2];
			ReturnType rType = ReturnType.ELEMENT;
			
			
			List<Map<String, Object>> mapList1 = 
					JdbcFormDaoImpl.getGlobalFormDao().mapdefS2NtDao(fac_id, func_id, admin_user, rType);
			Element el1 = XmlConvert.mapListToDataTableElement(mapList1, xName1);
			
			List<Map<String, Object>> mapList2 = 
					JdbcFormDaoImpl.getGlobalFormDao().mapconNtDao(fac_id, func_id, admin_user, rType);
			Element el2 = XmlConvert.mapListToDataTableElement(mapList2, xName2);
					
			List<Map<String, Object>> mapList3 = 
					JdbcFormDaoImpl.getGlobalFormDao().mapdefSplNtDao(fac_id, func_id, rType);
			Element el3 = XmlConvert.mapListToDataTableElement(mapList3, xName3);
			
			List<Map<String, Object>> mapList4 = 
					JdbcFormDaoImpl.getGlobalFormDao().fxtrelNtDao(fac_id, func_id, rType);
			Element el4 = XmlConvert.mapListToDataTableElement(mapList4, xName4);
			
			List<Element> elList = new ArrayList<Element>();
			elList.add(el1);
			elList.add(el2);
			elList.add(el3);
			elList.add(el4);
			
			Element gpElement = XmlConvert.groupElement(elList);
			
			return XmlConvert.elementToXML(gpElement);

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetFunctionExcelTemplateFieldList(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 4) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}
			
			String xName = "FieldValueIndex";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String func_template_id = psaParam[2];
			ReturnType rType = ReturnType.ELEMENT;

			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String[] GetDynamicQueryS2(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 7) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}
			
			String xName = "RESULT";
			String fac_id = psaParam[0];
			String function_id = psaParam[1];
			String spread_id = psaParam[2];
			String param = psaParam[3];
			String cond_param = psaParam[4];
			String psGeneratedQuery = psaParam[5];
			ReturnType rType = ReturnType.ELEMENT;
			
			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String SetMapDesignerAllS2(java.lang.String psParamsDesigner, java.lang.String psParamsCondition, java.lang.String psParamsDesignerTable,
			java.lang.String psParamsWhere, java.lang.String psParamsFunctionTableRelation, java.lang.String psParamsFunctionSpreadValidation,
			java.lang.String psParamsFunctionSPRelation, java.lang.String psParamsFunctionServiceRelation, java.lang.String psParamsChart,
			java.lang.String psParamsAssign, java.lang.String psParamFunctionTemplateRelation, java.lang.String psParamFunctionTemplateField)
			throws java.rmi.RemoteException {
		return null;
	}

	public java.lang.String SetPersonalization(java.lang.String psParamsMap, java.lang.String psParamsCol) throws java.rmi.RemoteException {
		return null;
	}

	public java.lang.String SetAdmin(java.lang.String psParamsMap, java.lang.String psParamsCol) throws java.rmi.RemoteException {
		return null;
	}

	public java.lang.String SetPersonalizationMap(java.lang.String psParams) throws java.rmi.RemoteException {
		return null;
	}

	public java.lang.String SetPersonalizationCol(java.lang.String psParams) throws java.rmi.RemoteException {
		return null;
	}

	public java.lang.String ExecuteStoredProcedure(java.lang.String psSPID, java.lang.String psSPName, java.lang.String psParams)
			throws java.rmi.RemoteException {
		return null;
	}

	public java.lang.String GetServiceMember(java.lang.String psServiceID) throws java.rmi.RemoteException {
		return null;
	}

	public java.lang.String CopyMapDesigner(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		return null;
	}

	public java.lang.String SetDynamicQuery(java.lang.String psParams) throws java.rmi.RemoteException {
		return null;
	}

	public java.lang.String SetDynamicMultiQuery(java.lang.String psParamMaster, java.lang.String[] psaParamDetail, java.lang.String psParentKey)
			throws java.rmi.RemoteException {
		return null;
	}

	public java.lang.String SetDynamicTripleQuery(java.lang.String psParamMaster, java.lang.String psParamDetail, java.lang.String[] psaParamDetailDetail,
			java.lang.String psParentKey, java.lang.String psDetailKey) throws java.rmi.RemoteException {
		return null;
	}

}
