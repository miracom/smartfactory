package com.mesplus.RAS.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import com.mesplus.RAS.model.Resource;

@Component
public interface ResourceDao {
	List<Resource> selectResources();
	Resource findResource(@Param("resource_id") String resource_id);
}
