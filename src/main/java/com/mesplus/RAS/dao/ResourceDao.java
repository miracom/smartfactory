package com.mesplus.RAS.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.mesplus.RAS.model.Resource;

@Component
public interface ResourceDao {
	List<Resource> selectResources(Map<String, Object> params);
	Resource findResource(Map<String, Object> params);
}
