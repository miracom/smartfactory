package com.mesplus.SEC.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.mesplus.SEC.service.IChangePassword;
import com.mesplus.smartfactory.HomeController;

@Controller
public class AuthController {
	private static final Logger logger = LoggerFactory
			.getLogger(HomeController.class);
	
	@Autowired
	private IChangePassword changePasswordDao;
	
	@RequestMapping(value="/account/changePassword", method=RequestMethod.GET)
	public void showChangePasswordPage() {
	}
	
	@RequestMapping(value="/account/changePassword", method=RequestMethod.POST)
	public String submitChangePasswordPage(@RequestParam("password") String newPassword){
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String username = principal.toString();
		if(principal instanceof UserDetails) {
			username = ((UserDetails)principal).getUsername();
		}
		changePasswordDao.changePassword(username, newPassword);
		SecurityContextHolder.clearContext();
		return "redirect:/home";
	}
		
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login() {
		return "login";
	}
}
