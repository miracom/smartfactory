package com.mesplus.CMN.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.googlecode.ehcache.annotations.Cacheable;
import com.mesplus.CMN.model.Menu;

@Component
public interface MenuDao {
	// Since menu objects could be modified to hierarchy, do not cache menu dao results. (If you want cache, do it in controllers.)
	List<Menu> selectMenus(Map<String, Object> params);
}
