package com.mesplus.SEC.service;

import org.springframework.dao.DataAccessException;
import org.springframework.security.authentication.encoding.PasswordEncoder;

public class CustomPasswordEncoder implements PasswordEncoder {
	private final String SEED = "aA!dD$jJ*zZ+";
	private final String PASSWORD_PASTE = "                    "; // 20 length spaces for encode_password
	private final String SALT_PASTE = "                    "; // 20 length spaces for username
	private final int SALT_LENGTH = PASSWORD_PASTE.length();
	private final int PASSWORD_LENGTH = SALT_PASTE.length();
	private final int SEED_LENGTH = SEED.length();
	
	@Override
	public String encodePassword(String rawPass, Object salt) throws DataAccessException {
		int i;
		int j = 0;

		String encoded = "";
		
		String s = ((String)salt).toUpperCase() + SALT_PASTE;
		rawPass = rawPass.toUpperCase() + PASSWORD_PASTE;
		
		for(i = 0;i < PASSWORD_LENGTH;i++) {
			j = j + rawPass.charAt(i);
		}
		j = j % 87;

		for(i = 0;i < PASSWORD_LENGTH;i++) {
			int t = rawPass.charAt(i) * s.charAt(i % SALT_LENGTH) * SEED.charAt(i % SEED_LENGTH) + j;
			encoded = encoded.concat(Character.toString((char)(t % 95 + 32)));
		}
		
		return encoded;
	}

	@Override
	public boolean isPasswordValid(String encPass, String rawPass, Object salt) throws DataAccessException {
		return encPass.equals(encodePassword(rawPass, salt));
	}
}
