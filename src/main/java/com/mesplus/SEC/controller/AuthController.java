package com.mesplus.SEC.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.mesplus.SEC.dao.CustomJdbcDaoImpl;
import com.mesplus.smartfactory.HomeController;

@Controller
public class AuthController {
	private static final Logger logger = LoggerFactory
			.getLogger(HomeController.class);
	
	@Autowired
	private CustomJdbcDaoImpl jdbcUserService;

//	private UserDetailsManager userDetailsManager;
	
	@RequestMapping(value="/account/changePassword", method=RequestMethod.GET)
	public void showChangePasswordPage() {
	}
	
	@RequestMapping(value="/account/changePassword", method=RequestMethod.POST)
	public String submitChangePasswordPage(@RequestParam("oldpassword") String oldPassword, @RequestParam("password") String newPassword){
		jdbcUserService.changePassword(oldPassword, newPassword);

		SecurityContextHolder.clearContext();
		
		return "redirect:/home";
	}
		
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login() {
		return "login";
	}
}
