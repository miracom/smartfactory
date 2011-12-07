package com.mesplus.CMN.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.ehcache.Cache;
import net.sf.ehcache.CacheManager;
import net.sf.ehcache.Element;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

@Controller
public class CMNController {
	private static final Logger logger = LoggerFactory.getLogger(CMNController.class);

	@Autowired
	private CacheManager cacheManager;

	@Autowired
	private MenuDao menuDao;
	@Autowired
	private FavoriteDao favoriteDao;

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
