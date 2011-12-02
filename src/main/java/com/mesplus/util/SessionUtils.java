package com.mesplus.util;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

import com.mesplus.SEC.model.CustomUserDetails;

public class SessionUtils {
	public static CustomUserDetails currentUserDetails(){
	    SecurityContext securityContext = SecurityContextHolder.getContext();
	    Authentication authentication = securityContext.getAuthentication();
	    if (authentication != null) {
	        Object principal = authentication.getPrincipal();
	        return (CustomUserDetails)(principal instanceof CustomUserDetails ? principal : null);
	    }
	    return null;
	}
}
