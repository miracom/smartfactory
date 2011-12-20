package com.mesplus.CMN.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mesplus.CMN.dao.SelectorDao;
import com.mesplus.CMN.model.Filter;
import com.mesplus.CMN.model.Sorter;

/**
 * DB 조회 기능을 관리하는 컨트롤러
 * @author Jinho
 * @since 1.0
 */
@Controller
public class SelectorController {
	//private static final Logger logger = LoggerFactory.getLogger(SelectorController.class);

	@Autowired
	private SelectorDao selectorDao;

	/**
	 * 입력받은 조건으로 쿼리를 생성하여 데이타를 조회
	 * <ul>
	 * 	<li>접속 주소: module/CMN/data/select.json</li>
	 *  <li>접속 방법: GET</li>
	 * </ul>
	 * @param request GET/POST로 전송받은 쿼리조건 정보
	 * <pre>
	 * 		<code>(String)request.getParameter("table") - </code> 검색할 테이블명
	 * 		<code>(String[])request.getParameter("selects") - </code> 검색하여 출력할 컬럼명
	 * 		<code>(String)request.getParameter("start") - </code> 검색할 시작범위(ROWNUM)
	 * 		<code>(String)request.getParameter("limit") - </code> 검색할 끝 범위(ROWNUM)
	 * 		<code>(String)request.getParameter("filter") - </code> 검색할 검색조건
	 * 		<code>(String)request.getParameter("sort") - </code> 검색할 정렬조건
	 * </pre>
	 * @param response GET/POST로 전송할 조회된 데이타 정보
	 * @return DB에서 검색된 데이타를 Map<String, Object>형식의 데이타로 반환한다.
	 * <pre>	
	 * 		<code>Key = total - </code> start, limit 제외한 조건으로 검색된 총 데이타 개수
	 *		<code>Key = result - </code> 검색 데이타
	 * </pre>
	 */
	@RequestMapping(value = "module/CMN/data/select.json", method = RequestMethod.GET)
	public @ResponseBody
	Map<String, Object> select(HttpServletRequest request, HttpServletResponse response) {
		String table = (String) request.getParameter("table");
		String[] selects = (String[]) request.getParameterValues("selects");
		String start = request.getParameter("start");
		String limit = request.getParameter("limit");

		String jsonFilter = request.getParameter("filter");
		String jsonSorter = request.getParameter("sort");
		
		List<Filter> filters = null;
		List<Sorter> sorters = null;
		try {
			if(jsonFilter != null) {
				filters = new ObjectMapper().readValue(request.getParameter("filter"), new TypeReference<List<Filter>>(){ });
			}
			if(jsonSorter != null) {
				sorters = new ObjectMapper().readValue(request.getParameter("sort"), new TypeReference<List<Sorter>>(){ });
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("total", selectorDao.selectCount(table, filters));
		resultMap.put("result", selectorDao.select(table, selects, filters, sorters, Integer.parseInt(start), Integer.parseInt(limit)));

		return resultMap;
	}
}
