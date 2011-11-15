package com.mesplus.WIP.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.mesplus.WIP.model.Operation;

@Component
public interface OperationDao {
	List<Operation> selectOperations(Map<String, Object> params);
}
