package com.mesplus.CMN.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.mesplus.CMN.model.Favorite;

@Component
public interface FavoriteDao {
	List<Favorite> selectFavorites(Map<String, Object> params);
}
