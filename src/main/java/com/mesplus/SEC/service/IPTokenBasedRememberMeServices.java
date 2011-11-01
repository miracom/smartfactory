package com.mesplus.SEC.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.security.web.authentication.rememberme.TokenBasedRememberMeServices;

public class IPTokenBasedRememberMeServices extends TokenBasedRememberMeServices {
	private static final ThreadLocal<HttpServletRequest> requestHolder = new ThreadLocal<HttpServletRequest>();

	public HttpServletRequest getContext() {
		return requestHolder.get();
	}

	public void setContext(HttpServletRequest context) {
		requestHolder.set(context);
	}

	protected String getUserIpAddress(HttpServletRequest request) {
		return request.getRemoteAddr();
	}
}
