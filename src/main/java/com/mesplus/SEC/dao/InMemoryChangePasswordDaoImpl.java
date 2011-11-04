package com.mesplus.SEC.dao;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.memory.InMemoryDaoImpl;

import com.mesplus.SEC.service.IChangePassword;

public class InMemoryChangePasswordDaoImpl extends InMemoryDaoImpl implements IChangePassword {
	@Override
	public void changePassword(String username, String password) {
		User userDetails = (User) getUserMap().getUser(username);
		User newUserDetails = new User(userDetails.getUsername(), password, userDetails.isEnabled(), userDetails.isAccountNonExpired(),
				userDetails.isCredentialsNonExpired(), userDetails.isAccountNonLocked(), userDetails.getAuthorities());
		getUserMap().addUser(newUserDetails);
	}
}
