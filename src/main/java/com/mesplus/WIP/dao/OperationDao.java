package com.mesplus.WIP.dao;

import java.util.List;

import com.mesplus.WIP.model.Operation;

public interface OperationDao {
	List<Operation> selectOperations();
}
