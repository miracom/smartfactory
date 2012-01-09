package com.mesplus.CMN.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.googlecode.ehcache.annotations.Cacheable;
import com.mesplus.CMN.model.Favorite;

/**
 * 즐겨찾기 기능을 관리
 * @author Jinho
 * @since 1.0
 */
@Component
public interface FavoriteDao {
	/**
	 * 즐겨찾기 목록을 조회한다.
	 * @param params 조회 조건정보
	 * @return 즐겨찾기 목록
	 */
	@Cacheable(cacheName = "favorites")
	List<Favorite> select(Map<String, Object> params);
}
