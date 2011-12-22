package com.mesplus.CMN.controller;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mesplus.CMN.dao.GcmDataDao;
import com.mesplus.CMN.dao.GcmDefineDao;
import com.mesplus.CMN.dao.SelectorDao;
import com.mesplus.CMN.model.Filter;
import com.mesplus.CMN.model.Sorter;
import com.mesplus.CMN.model.Sqlparams;

@Controller
public class SelectorController {
	private static final Logger logger = LoggerFactory.getLogger(SelectorController.class);

	@Autowired
	private GcmDefineDao gcmdefineDao;
	@Autowired
	private SelectorDao selectorDao;
	@Autowired
	private GcmDataDao gcmdataDao;

	@RequestMapping(value = "module/CMN/data/select.json", method = RequestMethod.GET)
	public @ResponseBody
	Map<String, Object> select(HttpServletRequest request, HttpServletResponse response) {
		String viewType = (String) request.getParameter("viewType");
		String table = (String) request.getParameter("table");
		String[] selects = (String[]) request.getParameterValues("selects");
		String start = request.getParameter("start");
		String limit = request.getParameter("limit");

		String jsonSqlparams = request.getParameter("sqlparams");
		String jsonFilter = request.getParameter("filter");
		String jsonSorter = request.getParameter("sort");
		
		System.out.println(jsonFilter);
		
		List<Filter> filters = null;
		List<Sorter> sorters = null;
		List<Sqlparams> sqlparams = null;
		try {
			if(jsonFilter != null) {
				filters = new ObjectMapper().readValue(request.getParameter("filter"), new TypeReference<List<Filter>>(){ });
			}
			if(jsonSorter != null) {
				sorters = new ObjectMapper().readValue(request.getParameter("sort"), new TypeReference<List<Sorter>>(){ });
			}
			if(jsonSqlparams != null) {
				sqlparams = new ObjectMapper().readValue(request.getParameter("sqlparams"), new TypeReference<List<Sqlparams>>(){ });
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		Map<String, Object> resultMap = new HashMap<String, Object>();

		if (viewType.equals("0"))
		{
			resultMap.put("total", selectorDao.selectCount(table, filters));
			resultMap.put("result", selectorDao.select(table, selects, filters, sorters, Integer.parseInt(start), Integer.parseInt(limit)));
		}
		else if (viewType.equals("1"))
		{
			
			Map<String, Object> gcmDef = gcmdefineDao.select(table); 
			
			if (filters != null && gcmDef.get("USE_SQL_FLAG").toString().equals("N")) {
				Iterator<Filter> it = filters.iterator();
				while (it.hasNext()) {
					Filter filter = it.next();
					filter.setGcmProperty(gcmDef);
				}
			}
			resultMap.put("total", gcmdataDao.selectCount(table, filters, gcmDef));
			resultMap.put("result", gcmdataDao.select(table, selects, filters, Integer.parseInt(start), Integer.parseInt(limit),gcmDef,sqlparams));
		}
		return resultMap;
	}
}
