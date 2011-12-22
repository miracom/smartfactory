package com.mesplus.CMN.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.ehcache.Cache;
import net.sf.ehcache.CacheManager;
import net.sf.ehcache.Element;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mesplus.CMN.dao.FavoriteDao;
import com.mesplus.CMN.dao.MenuDao;
import com.mesplus.CMN.model.Favorite;
import com.mesplus.CMN.model.Menu;
import com.mesplus.SEC.model.CustomUserDetails;
import com.mesplus.util.SessionUtils;


/**
 * 공통 기능을 관리하는 컨트롤러
 * @author Jinho
 * @since 1.0
 */
@Controller
public class CMNController {
	//private static final Logger logger = LoggerFactory.getLogger(CMNController.class);

	@Autowired
	private CacheManager cacheManager;

	@Autowired
	private MenuDao menuDao;
	@Autowired
	private FavoriteDao favoriteDao;

	/**
     * 메뉴 정보를 조회한다.
	 * <ul>
	 * 	<li>접속 주소: module/CMN/data/menus.json</li>
	 *  <li>접속 방법: GET</li>
	 * </ul>
     * @param request GET/POST로 전송받은 메뉴 조회조건 정보
     * @param response GET/POST로 전송할 메뉴목록
     * @return 조회한 메뉴목록
     */
	@RequestMapping(value = "module/CMN/data/menus.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Menu> menus(HttpServletRequest request, HttpServletResponse response) {
		CustomUserDetails user = SessionUtils.currentUserDetails();

		Map<String, Object> params = new HashMap<String, Object>();

		params.put("factory", user.getFactory());
		params.put("user", user.getUser_id());

		Cache menusCache = cacheManager.getCache("menus");
		Element element = menusCache.get(params);

		if (element != null)
			return (List<Menu>) element.getValue();

		List<Menu> menus = Menu.buildHierarchy(menuDao.selectMenus(params));

		menusCache.putIfAbsent(new Element(params, menus));

		return menus;
	}

	/**
     * 즐겨찾기 정보를 조회한다.
	 * <ul>
	 * 	<li>접속 주소: module/CMN/data/favorites.json</li>
	 *  <li>접속 방법: GET</li>
	 * </ul>
     * @param request GET/POST로 전송받은 즐겨찾기 조회조건 정보
     * @param response GET/POST로 전송할 즐겨찾기 목록
     * @return 조회한 즐겨찾기 목록
     */
	@RequestMapping(value = "module/CMN/data/favorites.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Favorite> favorites(HttpServletRequest request, HttpServletResponse response) {
		CustomUserDetails user = SessionUtils.currentUserDetails();

		Map<String, Object> params = new HashMap<String, Object>();

		params.put("factory", user.getFactory());
		params.put("user", user.getUser_id());

		return favoriteDao.selectFavorites(params);
	}
}
