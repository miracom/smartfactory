package com.mesplus.SEC.service;

import org.springframework.security.core.userdetails.UserDetailsService;

public interface IChangePassword extends UserDetailsService {
	void changePassword(String name, String password);
}
