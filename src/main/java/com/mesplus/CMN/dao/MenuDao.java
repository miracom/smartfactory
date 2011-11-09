package com.mesplus.CMN.dao;

import java.util.List;

import org.springframework.stereotype.Component;

import com.mesplus.CMN.model.Menu;

@Component
public interface MenuDao {
	List<Menu> selectMenus();
}
