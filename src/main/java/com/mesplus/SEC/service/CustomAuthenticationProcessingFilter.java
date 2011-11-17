package com.mesplus.SEC.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


public class CustomAuthenticationProcessingFilter extends UsernamePasswordAuthenticationFilter {

	private String factoryParameter = "j_factory";
	private String usernameSeparator = ":";
	
	public String getFactoryParameter() {
		return factoryParameter;
	}

	public void setFactoryParameter(String factoryParameter) {
		this.factoryParameter = factoryParameter;
	}

	@Override
	protected String obtainUsername(HttpServletRequest request) {
		String username = request.getParameter(getUsernameParameter());
		String factory = request.getParameter(getFactoryParameter());

		return username.toUpperCase() + usernameSeparator + factory.toUpperCase();
	}

}
