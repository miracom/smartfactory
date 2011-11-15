package com.mesplus.CMN.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
import com.mesplus.smartfactory.HomeController;

@Controller
public class CMNController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	@Autowired
	private MenuDao menuDao;
	@Autowired
	private FavoriteDao favoriteDao;

	@RequestMapping(value = "module/CMN/data/menus.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Menu> menus(HttpServletRequest request, HttpServletResponse response) {
		String factory = request.getParameter("factory");
		String user = request.getParameter("user");

		Map<String, Object> params = new HashMap<String, Object>();
		
		params.put("factory", factory);
		params.put("user", user);

		return Menu.buildHierarchy(menuDao.selectMenus(params));
	}
	
	@RequestMapping(value = "module/CMN/data/favorites.json", method = RequestMethod.GET)
	public @ResponseBody
	List<Favorite> favorites(HttpServletRequest request, HttpServletResponse response) {
		String factory = request.getParameter("factory");
		String user = request.getParameter("user");

		Map<String, Object> params = new HashMap<String, Object>();
		
		params.put("factory", factory);
		params.put("user", user);
		
		return favoriteDao.selectFavorites(params);
	}
}
