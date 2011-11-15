package com.mesplus.WIP.dao;

import java.util.List;
import java.util.Map;

public interface MaterialDao {
	public List<Map<String, Object>> selectMaterials(String[] selects, Map<String, Object> parameters);
	public Map<String, Object> findMaterial(String factory, String mat_id, int mat_ver);
}
