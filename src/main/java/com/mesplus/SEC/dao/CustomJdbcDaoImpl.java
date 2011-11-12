package com.mesplus.SEC.dao;

import org.springframework.security.core.userdetails.jdbc.JdbcDaoImpl;

import com.mesplus.SEC.service.IChangePassword;


public class CustomJdbcDaoImpl extends JdbcDaoImpl implements IChangePassword {

	@Override
	public void changePassword(String user_id, String password) {
		String factory = "FAB";
		getJdbcTemplate().update("UPDATE MSECUSRDEF SET PASSWORD=? WHERE FACTORY=? AND USER_ID=?", password, factory, user_id);
	}
}
