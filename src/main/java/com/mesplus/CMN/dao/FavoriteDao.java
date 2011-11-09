package com.mesplus.CMN.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public interface FavoriteDao {
	List<Map<String, Object>> selectFavorites();
}
