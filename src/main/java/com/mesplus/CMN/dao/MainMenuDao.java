package com.mesplus.CMN.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.mesplus.CMN.model.MainMenu;

/**
 * 메뉴 기능을 관리
 * @author Jinho
 * @since 1.0
 */
@Component
public interface MainMenuDao {
	/**
	 * 메뉴 목록을 조회한다.
	 * @param params 조회 조건정보
	 * @return 메뉴 목록
	 */
	// Since menu objects could be modified to hierarchy, do not cache menu dao results. (If you want cache, do it in controllers.)
	List<MainMenu> selectMainMenus(Map<String, Object> params);
}
