package com.mesplus.SEC.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.dao.SaltSource;
import org.springframework.security.authentication.encoding.PasswordEncoder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.jdbc.JdbcDaoImpl;

import com.mesplus.SEC.service.IChangePassword;


public class CustomJdbcDaoImpl extends JdbcDaoImpl implements IChangePassword {
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private SaltSource saltSource;

	@Override
	public void changePassword(String user_id, String password) {
		UserDetails user = loadUserByUsername(user_id);
		
		String encodePassword = passwordEncoder.encodePassword(password, saltSource.getSalt(user));
		
		String factory = "FAB";
		getJdbcTemplate().update("UPDATE MSECUSREXT SET ENCODE_PASSWORD=? WHERE FACTORY=? AND USER_ID=?", encodePassword, factory, user_id);
	}
}
