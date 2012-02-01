package com.mesplus.DSN.services;

import java.rmi.RemoteException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.jws.WebService;

import org.jdom.Element;

import com.mesplus.DSN.services.dao.impl.JdbcFormDaoImpl;
import com.mesplus.DSN.services.dao.impl.dyna.DynamicS2Nt;
import com.mesplus.util.Enums.ReturnType;
import com.mesplus.util.XmlConvert;

@WebService
public class ClsDSNMapDesigner {
	public java.lang.String GetDesignerS2(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			if (psaParam.length < 0 && psaParam.length > 5) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String tableName1 = "COLINFO";
			String tableName2 = "CONINFO";
			String tableName3 = "WHERECLAUSE";
			String tableName4 = "PMAPINFO";
			String tableName5 = "PCOLINFO";
			String tableName6 = "AMAPINFO";
			String tableName7 = "ACOLINFO";
			String tableName8 = "FUNVLDREL";
			String tableName9 = "FUNSPREL";
			String tableName10 = "FUNSVREL";
			String tableName11 = "CHARTINFO";
			String tableName12 = "ASSIGN";
			String tableName13 = "FunctionTemplate";
			String tableName14 = "FunctionTemplateField";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			//String spd_id = psaParam[2];
			String grp_usr_id = psaParam[2];
			String lang_flag = psaParam[3];
			String admin_user = psaParam[4];
			//String func_template_id = psaParam[6];
			ReturnType rType = ReturnType.ELEMENT;

			List<Map<String, Object>> mapList1 = JdbcFormDaoImpl.getGlobalFormDao().mapdefS2NtDao(fac_id, func_id, admin_user, rType);
			Element el1 = XmlConvert.mapListToDataTableElement(mapList1, tableName1);

			List<Map<String, Object>> mapList2 = JdbcFormDaoImpl.getGlobalFormDao().mapconGenNtDao(fac_id, func_id, lang_flag, rType);
			Element el2 = XmlConvert.mapListToDataTableElement(mapList2, tableName2);

			List<Map<String, Object>> mapList3 = JdbcFormDaoImpl.getGlobalFormDao().consqlGenNtDao(fac_id, func_id, rType);
			Element el3 = XmlConvert.mapListToDataTableElement(mapList3, tableName3);

			List<Map<String, Object>> mapList4 = JdbcFormDaoImpl.getGlobalFormDao().usrmapNtDao(fac_id, func_id, grp_usr_id, rType);
			Element el4 = XmlConvert.mapListToDataTableElement(mapList4, tableName4);

			List<Map<String, Object>> mapList5 = JdbcFormDaoImpl.getGlobalFormDao().usrcolNtDao(fac_id, func_id, grp_usr_id, lang_flag,
					rType);
			Element el5 = XmlConvert.mapListToDataTableElement(mapList5, tableName5);

			List<Map<String, Object>> mapList6 = JdbcFormDaoImpl.getGlobalFormDao().grpmapNtDao(fac_id, func_id, rType);
			Element el6 = XmlConvert.mapListToDataTableElement(mapList6, tableName6);

			List<Map<String, Object>> mapList7 = JdbcFormDaoImpl.getGlobalFormDao().grpcolNtDao(fac_id, func_id, lang_flag, rType);
			Element el7 = XmlConvert.mapListToDataTableElement(mapList7, tableName7);

			List<Map<String, Object>> mapList8 = JdbcFormDaoImpl.getGlobalFormDao().tabvldNtDao(fac_id, func_id, grp_usr_id, rType);
			Element el8 = XmlConvert.mapListToDataTableElement(mapList8, tableName8);

			List<Map<String, Object>> mapList9 = JdbcFormDaoImpl.getGlobalFormDao().fsprelNtDao(fac_id, func_id, grp_usr_id, rType);
			Element el9 = XmlConvert.mapListToDataTableElement(mapList9, tableName9);

			List<Map<String, Object>> mapList10 = JdbcFormDaoImpl.getGlobalFormDao().fscrelNtDao(fac_id, func_id, grp_usr_id, rType);
			Element el10 = XmlConvert.mapListToDataTableElement(mapList10, tableName10);

			List<Map<String, Object>> mapList11 = JdbcFormDaoImpl.getGlobalFormDao().chtinfNtDao(fac_id, func_id, rType);
			Element el11 = XmlConvert.mapListToDataTableElement(mapList11, tableName11);

			List<Map<String, Object>> mapList12 = JdbcFormDaoImpl.getGlobalFormDao().assdefGenNtDao(fac_id, func_id, rType);
			Element el12 = XmlConvert.mapListToDataTableElement(mapList12, tableName12);

			List<Map<String, Object>> mapList13 = JdbcFormDaoImpl.getGlobalFormDao().fxtrelNtDao(fac_id, func_id, rType);
			Element el13 = XmlConvert.mapListToDataTableElement(mapList13, tableName13);

			List<Map<String, Object>> mapList14 = JdbcFormDaoImpl.getGlobalFormDao().ftrfldNtDao(fac_id, func_id, grp_usr_id, rType);
			Element el14 = XmlConvert.mapListToDataTableElement(mapList14, tableName14);

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

			String tableName = "PMAPINFO";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String grp_usr_id = psaParam[2];
			ReturnType rType = ReturnType.ELEMENT;

			List<Map<String, Object>> mapList1 = JdbcFormDaoImpl.getGlobalFormDao().usrmapNtDao(fac_id, func_id, grp_usr_id, rType);

			Element el = XmlConvert.mapListToDataTableElement(mapList1, tableName);

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

			String tableName = "AMAPINFO";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			ReturnType rType = ReturnType.ELEMENT;

			List<Map<String, Object>> mapList1 = JdbcFormDaoImpl.getGlobalFormDao().grpmapNtDao(fac_id, func_id, rType);
			Element el1 = XmlConvert.mapListToDataTableElement(mapList1, tableName);

			return XmlConvert.elementToXML(el1);

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetPersonalizationCol(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			/*if (psaParam.length < 0 && psaParam.length > 4) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String tableName = "PCOLINFO";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String grp_usr_id = psaParam[2];
			String lang_flag = psaParam[3];
			ReturnType rType = ReturnType.ELEMENT;*/

			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetAdminCol(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			/*if (psaParam.length < 0 && psaParam.length > 4) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String tableName = "ACOLINFO";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String grp_usr_id = psaParam[2];
			String lang_flag = psaParam[3];
			ReturnType rType = ReturnType.ELEMENT;*/

			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetFunctionSpreadList(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			/*if (psaParam.length < 0 && psaParam.length > 3) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String tableName = "FunctionSpreadList";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			ReturnType rType = ReturnType.ELEMENT;*/

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

			String tableName1 = "WHERECLAUSE";
			String tableName2 = "FunctionTableRelationList";
			String tableName3 = "FUNVLDREL";
			String tableName4 = "FunctionSPRelationList";
			String tableName5 = "FunctionServiceRelationList";
			String tableName6 = "ChartProperties";
			String tableName7 = "ASSIGN";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String spd_id = psaParam[2];
			String tab_id = psaParam[3];
			String admin_user = psaParam[4];
			ReturnType rType = ReturnType.ELEMENT;

			List<Map<String, Object>> mapList1 = JdbcFormDaoImpl.getGlobalFormDao().consqlNtDao(tab_id, admin_user, rType);
			Element el1 = XmlConvert.mapListToDataTableElement(mapList1, tableName1);

			List<Map<String, Object>> mapList2 = JdbcFormDaoImpl.getGlobalFormDao().ftrdefNtDao(fac_id, func_id, spd_id, rType);
			Element el2 = XmlConvert.mapListToDataTableElement(mapList2, tableName2);

			List<Map<String, Object>> mapList3 = JdbcFormDaoImpl.getGlobalFormDao().tabvldNtDao(fac_id, func_id, spd_id, rType);
			Element el3 = XmlConvert.mapListToDataTableElement(mapList3, tableName3);

			List<Map<String, Object>> mapList4 = JdbcFormDaoImpl.getGlobalFormDao().fsprelNtDao(fac_id, func_id, spd_id, rType);
			Element el4 = XmlConvert.mapListToDataTableElement(mapList4, tableName4);

			List<Map<String, Object>> mapList5 = JdbcFormDaoImpl.getGlobalFormDao().fscrelNtDao(fac_id, func_id, spd_id, rType);
			Element el5 = XmlConvert.mapListToDataTableElement(mapList5, tableName5);

			List<Map<String, Object>> mapList6 = JdbcFormDaoImpl.getGlobalFormDao().chtdetNtDao(tab_id, rType);
			Element el6 = XmlConvert.mapListToDataTableElement(mapList6, tableName6);

			List<Map<String, Object>> mapList7 = JdbcFormDaoImpl.getGlobalFormDao().assdefNtDao(tab_id, rType);
			Element el7 = XmlConvert.mapListToDataTableElement(mapList7, tableName7);

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

			/*if (psaParam.length < 0 && psaParam.length > 4) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String tableName = "FunctionTableRelationList";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String spd_id = psaParam[2];
			String tab_id = psaParam[3];
			ReturnType rType = ReturnType.ELEMENT;*/

			return null;

		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String GetFunctionSPRelationList(java.lang.String[] psaParam) throws java.rmi.RemoteException {
		try {

			/*if (psaParam.length < 0 && psaParam.length > 4) {
				throw new RemoteException("IllegalArgumentException: Parameters(psaParam) should not be " + psaParam.length + " size");
			}

			String tableName = "FunctionSPRelationList";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String spd_id = psaParam[2];
			String tab_id = psaParam[3];
			ReturnType rType = ReturnType.ELEMENT;*/

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

			String tableName1 = "COLINFO";
			String tableName2 = "CONDITIONLIST";
			String tableName3 = "FunctionSpreadList";
			String tableName4 = "FunctionTemplateList";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String admin_user = psaParam[2];
			ReturnType rType = ReturnType.ELEMENT;

			List<Map<String, Object>> mapList1 = JdbcFormDaoImpl.getGlobalFormDao().mapdefS2NtDao(fac_id, func_id, admin_user, rType);
			Element el1 = XmlConvert.mapListToDataTableElement(mapList1, tableName1);

			List<Map<String, Object>> mapList2 = JdbcFormDaoImpl.getGlobalFormDao().mapconNtDao(fac_id, func_id, admin_user, rType);
			Element el2 = XmlConvert.mapListToDataTableElement(mapList2, tableName2);

			List<Map<String, Object>> mapList3 = JdbcFormDaoImpl.getGlobalFormDao().mapdefSplNtDao(fac_id, func_id, rType);
			Element el3 = XmlConvert.mapListToDataTableElement(mapList3, tableName3);

			List<Map<String, Object>> mapList4 = JdbcFormDaoImpl.getGlobalFormDao().fxtrelNtDao(fac_id, func_id, rType);
			Element el4 = XmlConvert.mapListToDataTableElement(mapList4, tableName4);

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

			String tableName = "FieldValueIndex";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String func_template_id = psaParam[2];
			ReturnType rType = ReturnType.ELEMENT;

			List<Map<String, Object>> mapList1 = JdbcFormDaoImpl.getGlobalFormDao().ftrfldNtDao(fac_id, func_id, func_template_id, rType);

			Element el1 = XmlConvert.mapListToDataTableElement(mapList1, tableName);

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
			
			String tableName = "RESULT";
			String fac_id = psaParam[0];
			String func_id = psaParam[1];
			String spd_id = psaParam[2];
			String a_param = psaParam[3];
			String cond_param = psaParam[4];
			String lang_flag = psaParam[5];
			ReturnType rType = ReturnType.ELEMENT;
			
			
			Map<String, Object> results = 
					JdbcFormDaoImpl.getGlobalFormDao().dynamicS2NtDao(fac_id, func_id, spd_id, a_param, cond_param, lang_flag, rType);
			
			//쿼리 실행 결과값 a_msg_id,a_lang_flag,a_return
			List<Map<String, Object>> mapList = (List<Map<String, Object>>) results.get(DynamicS2Nt.CUR_REFER_PARAM);
			Element el = XmlConvert.mapListToDataTableElement(mapList, tableName);
			
			//쿼리문
			String sqltext1 = ((String)results.get("sqltext1") != null)?(String)results.get("sqltext1"):"";
			String sqltext2 = ((String)results.get("sqltext2") != null)?(String)results.get("sqltext2"):"";
			String sqltext3 = ((String)results.get("sqltext3") != null)?(String)results.get("sqltext3"):"";
			String sqltext4 = ((String)results.get("sqltext4") != null)?(String)results.get("sqltext4"):"";
			String sqltext5 = ((String)results.get("sqltext5") != null)?(String)results.get("sqltext5"):"";
											
			String SqlTestParam = sqltext1 + sqltext2 +sqltext3 + sqltext4 + sqltext5;
		
			//java webservice는 값이 하나도 없어도 빈 컬럼을 반환하지 않고 .net webservice는 반환한다.
			String[] result = new String[2];
			result[0] = XmlConvert.elementToXML(el); 
			result[1] = SqlTestParam;
			
			return result;
		} catch (Exception e) {
			throw new RemoteException("Exception", e);
		}
	}

	public java.lang.String SetMapDesignerAllS2(java.lang.String psParamsDesigner, java.lang.String psParamsCondition,
			java.lang.String psParamsDesignerTable, java.lang.String psParamsWhere, java.lang.String psParamsFunctionTableRelation,
			java.lang.String psParamsFunctionSpreadValidation, java.lang.String psParamsFunctionSPRelation,
			java.lang.String psParamsFunctionServiceRelation, java.lang.String psParamsChart, java.lang.String psParamsAssign,
			java.lang.String psParamFunctionTemplateRelation, java.lang.String psParamFunctionTemplateField)
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
		try {

			if (psServiceID == null) {
				throw new RemoteException("IllegalArgumentException: Parameters(psServiceID) should not be null");
			}

			String tableName = "FieldValueIndex";
			String service_id = psServiceID;
			ReturnType rType = ReturnType.ELEMENT;

			List<Map<String, Object>> mapList1 = JdbcFormDaoImpl.getGlobalFormDao().svcmbrNtDao(service_id, rType);

			Element el1 = XmlConvert.mapListToDataTableElement(mapList1, tableName);

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

	public java.lang.String SetDynamicMultiQuery(java.lang.String psParamMaster, java.lang.String[] psaParamDetail,
			java.lang.String psParentKey) throws java.rmi.RemoteException {
		return null;
	}

	public java.lang.String SetDynamicTripleQuery(java.lang.String psParamMaster, java.lang.String psParamDetail,
			java.lang.String[] psaParamDetailDetail, java.lang.String psParentKey, java.lang.String psDetailKey)
			throws java.rmi.RemoteException {
		return null;
	}

}
