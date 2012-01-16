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

			if (psaParam.length < 0 && psaParam.length > 7) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}
			
			String xName1 = "COLINFO";
			String xName2 = "COLINFO";
			String xName3 = "WHERECLAUSE";
			String xName4 = "PMAPINFO";
			String xName5 = "PCOLINFO";
			String xName6 = "AMAPINFO";
			String xName7 = "ACOLINFO";
			String xName8 = "FUNVLDREL";
			String xName9 = "FUNSPREL";
			String xName10 = "FUNSVREL";
			String xName11 = "CHARTINFO";
			String xName12 = "ASSIGN";
			String xName13 = "FunctionTemplate";
			String xName14 = "FunctionTemplateField";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String spd_id = psaParam[2];
			String grp_usr_id = psaParam[3];
			String lang_flag = psaParam[4];
			String admin_user = psaParam[5];
			String func_template_id = psaParam[6];
			ReturnType rType = ReturnType.ELEMENT;

			List<Map<String, Object>> mapList1 = 
					JdbcFormDaoImpl.getGlobalFormDao().mapdefS2NtDao(fac_id, func_id, admin_user, rType);
			Element el1 = XmlConvert.mapListToDataTableElement(mapList1, xName1);
			
			List<Map<String, Object>> mapList2 = 
					JdbcFormDaoImpl.getGlobalFormDao().mapconGenNtDao(fac_id, func_id, lang_flag, rType);
			Element el2 = XmlConvert.mapListToDataTableElement(mapList2, xName2);
					
			List<Map<String, Object>> mapList3 = 
					JdbcFormDaoImpl.getGlobalFormDao().consqlGenNtDao(fac_id, func_id, rType);
			Element el3 = XmlConvert.mapListToDataTableElement(mapList3, xName3);
			
			List<Map<String, Object>> mapList4 = 
					JdbcFormDaoImpl.getGlobalFormDao().usrmapNtDao(fac_id, func_id, grp_usr_id, rType);
			Element el4 = XmlConvert.mapListToDataTableElement(mapList4, xName4);
			
			List<Map<String, Object>> mapList5 = 
					JdbcFormDaoImpl.getGlobalFormDao().usrcolNtDao(fac_id, func_id, grp_usr_id, lang_flag, rType);
			Element el5 = XmlConvert.mapListToDataTableElement(mapList5, xName5);
			
			List<Map<String, Object>> mapList6 = 
					JdbcFormDaoImpl.getGlobalFormDao().grpmapNtDao(fac_id, func_id, rType);
			Element el6 = XmlConvert.mapListToDataTableElement(mapList6, xName6);
			
			List<Map<String, Object>> mapList7 = 
					JdbcFormDaoImpl.getGlobalFormDao().grpcolNtDao(fac_id, func_id, lang_flag, rType);
			Element el7 = XmlConvert.mapListToDataTableElement(mapList7, xName7);
			
			List<Map<String, Object>> mapList8 = 
					JdbcFormDaoImpl.getGlobalFormDao().tabvldNtDao(fac_id, func_id, spd_id, rType);
			Element el8 = XmlConvert.mapListToDataTableElement(mapList8, xName8);
			
			List<Map<String, Object>> mapList9 = 
					JdbcFormDaoImpl.getGlobalFormDao().fsprelNtDao(fac_id, func_id, spd_id, rType);
			Element el9 = XmlConvert.mapListToDataTableElement(mapList9, xName9);
			
			List<Map<String, Object>> mapList10 = 
					JdbcFormDaoImpl.getGlobalFormDao().fscrelNtDao(fac_id, func_id, spd_id, rType);
			Element el10 = XmlConvert.mapListToDataTableElement(mapList10, xName10);
			
			List<Map<String, Object>> mapList11 = 
					JdbcFormDaoImpl.getGlobalFormDao().chtinfNtDao(fac_id, func_id, rType);
			Element el11 = XmlConvert.mapListToDataTableElement(mapList11, xName11);
			
			List<Map<String, Object>> mapList12 = 
					JdbcFormDaoImpl.getGlobalFormDao().assdefGenNtDao(fac_id, func_id, rType);
			Element el12 = XmlConvert.mapListToDataTableElement(mapList12, xName12);
			
			List<Map<String, Object>> mapList13 = 
					JdbcFormDaoImpl.getGlobalFormDao().fxtrelNtDao(fac_id, func_id, rType);
			Element el13 = XmlConvert.mapListToDataTableElement(mapList13, xName13);
			
			List<Map<String, Object>> mapList14 = 
					JdbcFormDaoImpl.getGlobalFormDao().ftrfldNtDao(fac_id, func_id, func_template_id, rType);
			Element el14 = XmlConvert.mapListToDataTableElement(mapList14, xName14);
			
			
			List<Element> elList = new ArrayList<Element>();
			elList.add(el1);
			elList.add(el2);
			elList.add(el3);
			elList.add(el4);
			elList.add(el5);
			elList.add(el6);
			elList.add(el7);
			elList.add(el8);
			elList.add(el9);
			elList.add(el10);
			elList.add(el11);
			elList.add(el12);
			elList.add(el13);
			elList.add(el14);
			
			Element gpElement = XmlConvert.groupElement(elList);
			
			return XmlConvert.elementToXML(gpElement);


		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetPersonalizationMap(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 3) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String xName = "PMAPINFO";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String grp_usr_id = psaParam[2];
			ReturnType rType = ReturnType.ELEMENT;
			
			List<Map<String, Object>> mapList1 =
					JdbcFormDaoImpl.getGlobalFormDao().usrmapNtDao(fac_id, func_id, grp_usr_id, rType);
			
			Element el = XmlConvert.mapListToDataTableElement(mapList1, xName);
					
			return XmlConvert.elementToXML(el);

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetAdminMap(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 2) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String xName = "AMAPINFO";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			ReturnType rType = ReturnType.ELEMENT;
			
			List<Map<String, Object>> mapList1 = 
					JdbcFormDaoImpl.getGlobalFormDao().grpmapNtDao(fac_id, func_id, rType);
			Element el1 = XmlConvert.mapListToDataTableElement(mapList1, xName);
			
			return XmlConvert.elementToXML(el1);

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetPersonalizationCol(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 4) {
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

			if (psaParam.length < 0 && psaParam.length > 4) {
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

			if (psaParam.length < 0 && psaParam.length > 5) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String xName1 = "WHERECLAUSE";
			String xName2 = "FunctionTableRelationList";
			String xName3 = "FUNVLDREL";
			String xName4 = "FunctionSPRelationList";
			String xName5 = "FunctionServiceRelationList";
			String xName6 = "ChartProperties";
			String xName7 = "ASSIGN";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String spd_id = psaParam[2];
			String tab_id = psaParam[3];
			String admin_user = psaParam[4];
			ReturnType rType = ReturnType.ELEMENT;
		
			List<Map<String, Object>> mapList1 = 
					JdbcFormDaoImpl.getGlobalFormDao().consqlNtDao(tab_id, admin_user, rType);
			Element el1 = XmlConvert.mapListToDataTableElement(mapList1, xName1);
			
			List<Map<String, Object>> mapList2 = 
					JdbcFormDaoImpl.getGlobalFormDao().ftrdefNtDao(fac_id, func_id, spd_id, rType);
			Element el2 = XmlConvert.mapListToDataTableElement(mapList2, xName2);
					
			List<Map<String, Object>> mapList3 = 
					JdbcFormDaoImpl.getGlobalFormDao().tabvldNtDao(fac_id, func_id, spd_id, rType);
			Element el3 = XmlConvert.mapListToDataTableElement(mapList3, xName3);
			
			List<Map<String, Object>> mapList4 = 
					JdbcFormDaoImpl.getGlobalFormDao().fsprelNtDao(fac_id, func_id, spd_id, rType);
			Element el4 = XmlConvert.mapListToDataTableElement(mapList4, xName4);
			
			List<Map<String, Object>> mapList5 = 
					JdbcFormDaoImpl.getGlobalFormDao().fscrelNtDao(fac_id, func_id, spd_id, rType);
			Element el5 = XmlConvert.mapListToDataTableElement(mapList5, xName5);
			
			List<Map<String, Object>> mapList6 = 
					JdbcFormDaoImpl.getGlobalFormDao().chtdetNtDao(tab_id, rType);
			Element el6 = XmlConvert.mapListToDataTableElement(mapList6, xName6);
			
			List<Map<String, Object>> mapList7 = 
					JdbcFormDaoImpl.getGlobalFormDao().assdefNtDao(tab_id, rType);
			Element el7 = XmlConvert.mapListToDataTableElement(mapList7, xName7);
			
			List<Element> elList = new ArrayList<Element>();
			elList.add(el1);
			elList.add(el2);
			elList.add(el3);
			elList.add(el4);
			elList.add(el5);
			elList.add(el6);
			elList.add(el7);
			
			Element gpElement = XmlConvert.groupElement(elList);
			
			return XmlConvert.elementToXML(gpElement);

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetFunctionTableRelationList(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 4) {
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

			if (psaParam.length < 0 && psaParam.length > 4) {
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

			if (psaParam.length < 0 && psaParam.length > 3) {
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

			if (psaParam.length < 0 && psaParam.length > 3) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}
			
			String xName = "FieldValueIndex";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String func_template_id = psaParam[2];
			ReturnType rType = ReturnType.ELEMENT;
			
			List<Map<String, Object>> mapList1 = 
					JdbcFormDaoImpl.getGlobalFormDao().ftrfldNtDao(fac_id, func_id, func_template_id, rType);
			
			Element el1 = XmlConvert.mapListToDataTableElement(mapList1, xName);

			return XmlConvert.elementToXML(el1);

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String[] GetDynamicQueryS2(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 6) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}
			
			String xName = "RESULT";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String spd_id = psaParam[2];
			String col_param = psaParam[3];
			String cond_param = psaParam[4];
			String lang_flag = psaParam[5];
			ReturnType rType = ReturnType.ELEMENT;
			
			Map<String, Object> mapList1 = 
					JdbcFormDaoImpl.getGlobalFormDao().dynamicS2NtDao(fac_id, func_id, spd_id, col_param, cond_param, lang_flag, rType);
			
			//String 배열 형태로 반환하기 위한 로직 구현 부분입니다.
			/*String SQLTEXT1_PARAM = (String)mapList1.get("SQLTEXT1_PARAM");
			String SQLTEXT2_PARAM = (String)mapList1.get("SQLTEXT2_PARAM");
			String SQLTEXT3_PARAM = (String)mapList1.get("SQLTEXT3_PARAM");
			String SQLTEXT4_PARAM = (String)mapList1.get("SQLTEXT4_PARAM");
			String SQLTEXT5_PARAM = (String)mapList1.get("SQLTEXT5_PARAM");
			
			String[] arr = new String[5];
			arr[0]= SQLTEXT1_PARAM;
			arr[1]= SQLTEXT1_PARAM;
			arr[2]= SQLTEXT1_PARAM;
			arr[3]= SQLTEXT1_PARAM;
			arr[4]= SQLTEXT1_PARAM;*/
			
			//Element el1 = XmlConvert.mapToArrayListElement(mapList1);
			
//			return arr;
			
			return psaParam;
			
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

	public java.lang.String GetServiceMember(java.lang.String[] psServiceID) throws java.rmi.RemoteException {
		try {

			if (psServiceID.length < 0 && psServiceID.length > 1) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psServiceID.length + " size");
			}
			
			String xName = "FieldValueIndex";
			String service_id = psServiceID[0];
			ReturnType rType = ReturnType.ELEMENT;
			
			List<Map<String, Object>> mapList1 = 
					JdbcFormDaoImpl.getGlobalFormDao().svcmbrNtDao(service_id, rType);
			
			Element el1 = XmlConvert.mapListToDataTableElement(mapList1, xName);

			return XmlConvert.elementToXML(el1);

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
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
