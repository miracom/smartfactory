package com.mesplus.CMN.dao;

import java.util.List;

import com.mesplus.CMN.model.Favorite;

public interface FavoriteDao {
	List<Favorite> selectFavorites();
}
