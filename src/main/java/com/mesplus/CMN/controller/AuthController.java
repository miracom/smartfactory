package com.mesplus.CMN.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.mesplus.smartfactory.HomeController;

@Controller
public class AuthController {
	private static final Logger logger = LoggerFactory
			.getLogger(HomeController.class);
		
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login() {
		return "home";
	}
}
