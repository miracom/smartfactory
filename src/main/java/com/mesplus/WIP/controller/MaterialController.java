package com.mesplus.WIP.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mesplus.WIP.dao.MaterialDao;
import com.mesplus.smartfactory.HomeController;

@Controller
public class MaterialController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	@Autowired
	private MaterialDao materialDao;

	@RequestMapping(value = "module/WIP/data/materials.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Map<String, Object>> materials(HttpServletRequest request, HttpServletResponse response) {
		String factory = request.getParameter("factory");
		String user = request.getParameter("user");

		Map<String, Object> params = new HashMap<String, Object>();
		
		params.put("factory", factory);
		params.put("user", user);

		String[] selects = (String[])request.getParameterValues("selects");
		
		return materialDao.selectMaterials(selects, params);
	}

	@RequestMapping(value = "module/WIP/data/materials.json", method = RequestMethod.POST, headers = "Accept=application/json")
	public @ResponseBody
	List<Map<String, Object>> another_materials(@RequestBody Map<String, Object> request, HttpServletResponse response) {
		String[] selects = (String[])request.get("selects");
		return materialDao.selectMaterials(selects, null);
	}

	@RequestMapping(value = "module/WIP/data/material.json", method = RequestMethod.GET)
	public @ResponseBody
	Map<String, Object> material(HttpServletRequest request, HttpServletResponse response) {
		String factory = request.getParameter("factory");
		String mat_id = request.getParameter("mat_id");
		String mat_ver = request.getParameter("mat_ver");

		return materialDao.findMaterial(factory, mat_id, Integer.parseInt(mat_ver));
	}
}

/*
// Material Setup화면  
// Radio Button 1번, 2번으로 선택 후 조회시 원본 쿼리 소스입니다.
strSqlString.Append("SELECT MAT_ID, MAT_VER, MAT_DESC, DELETE_FLAG, DEACTIVE_FLAG \n");
strSqlString.Append("  FROM MWIPMATDEF \n");
strSqlString.AppendFormat(" WHERE FACTORY = '{0}' \n", sExtFactory == "" ? MPGV.gsFactory : sExtFactory);
strSqlString.Append("   AND (MAT_ID, MAT_VER) IN (SELECT MAT_ID, MAX(MAT_VER) \n");
strSqlString.Append("                               FROM MWIPMATDEF\n");
strSqlString.AppendFormat("                              WHERE FACTORY = '{0}' \n", sExtFactory == "" ? MPGV.gsFactory : sExtFactory);
strSqlString.AppendFormat("                                AND MAT_ID LIKE '{0}%' \n", sFilter);
strSqlString.AppendFormat("                                AND MAT_TYPE LIKE '{0}%' \n", sMaterialType);
strSqlString.AppendFormat("                                AND DELETE_FLAG LIKE '{0}%' \n", cDeleteFlag);
strSqlString.AppendFormat("                                AND DEACTIVE_FLAG LIKE '{0}%' \n", cDeactiveFlag);
strSqlString.Append("                              GROUP BY MAT_ID) \n");
strSqlString.Append(" ORDER BY MAT_ID \n");


//예제 샘플, 210.124.36.84번 DB(두산인프라코어 소주 공장 DB)로 실행하시면 결과를 보실 수 있습니다.
SELECT MAT_ID, MAT_VER, MAT_DESC, DELETE_FLAG, DEACTIVE_FLAG 
FROM MWIPMATDEF 
WHERE FACTORY = '2510' 
 AND MAT_ID LIKE '%' 
 AND MAT_TYPE LIKE '%' 
 AND DELETE_FLAG LIKE ' %' 
 AND DEACTIVE_FLAG LIKE ' %' 
ORDER BY MAT_ID ASC, MAT_VER DESC



// Radio Button 3번으로 선택 후 조회시 원본 쿼리 소스입니다.
strSqlString.Append("SELECT MAT_ID, MAT_VER, MAT_DESC, DELETE_FLAG, DEACTIVE_FLAG \n");
strSqlString.Append("  FROM MWIPMATDEF \n");
strSqlString.AppendFormat(" WHERE FACTORY = '{0}' \n", sExtFactory == "" ? MPGV.gsFactory : sExtFactory);
strSqlString.AppendFormat("   AND MAT_ID LIKE '{0}%' \n", sFilter);
strSqlString.AppendFormat("   AND MAT_TYPE LIKE '{0}%' \n", sMaterialType);
strSqlString.AppendFormat("   AND DELETE_FLAG LIKE '{0}%' \n", cDeleteFlag);
strSqlString.AppendFormat("   AND DEACTIVE_FLAG LIKE '{0}%' \n", cDeactiveFlag);
strSqlString.Append("  ORDER BY MAT_ID ASC, MAT_VER DESC");


//예제 샘플, 210.124.36.84번 DB(두산인프라코어 소주 공장 DB)로 실행하시면 결과를 보실 수 있습니다.
SELECT MAT_ID, MAT_VER, MAT_DESC, DELETE_FLAG, DEACTIVE_FLAG 
FROM MWIPMATDEF 
WHERE FACTORY = '2510' 
 AND MAT_ID LIKE '%' 
 AND MAT_TYPE LIKE '%' 
 AND DELETE_FLAG LIKE ' %' 
 AND DEACTIVE_FLAG LIKE ' %' 
ORDER BY MAT_ID ASC, MAT_VER DESC;
*/