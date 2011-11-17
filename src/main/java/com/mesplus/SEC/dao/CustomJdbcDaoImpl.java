package com.mesplus.SEC.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.security.authentication.dao.SaltSource;
import org.springframework.security.authentication.encoding.PasswordEncoder;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.GrantedAuthorityImpl;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.jdbc.JdbcDaoImpl;

import com.mesplus.SEC.model.CustomUserDetails;
import com.mesplus.SEC.service.IChangePassword;


public class CustomJdbcDaoImpl extends JdbcDaoImpl implements IChangePassword {
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private SaltSource saltSource;
	
	private static final String USERNAME_SEPARATOR = ":";
	private static final String DATE_FORMAT = "yyyyMMdd";
	public static final SimpleDateFormat format = new SimpleDateFormat(DATE_FORMAT);
	
	@Override
	public void changePassword(String user_id, String password) {
		CustomUserDetails user = (CustomUserDetails)loadUserByUsername(user_id);
		
		String encodePassword = passwordEncoder.encodePassword(password, saltSource.getSalt(user));
		
		getJdbcTemplate().update("UPDATE MSECUSREXT SET ENCODE_PASSWORD=? WHERE FACTORY=? AND USER_ID=?", encodePassword, user.getFactory(), user.getUser_id());
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException, DataAccessException {
		String[] query_args = username.split(USERNAME_SEPARATOR);
		
		List<CustomUserDetails> result =  getJdbcTemplate().query(getUsersByUsernameQuery(), 
				query_args, new RowMapper<CustomUserDetails>(){

			@Override
			public CustomUserDetails mapRow(ResultSet rs, int rowNum) throws SQLException {
				CustomUserDetails user = new CustomUserDetails();

				user.setFactory(rs.getString("FACTORY"));
				user.setUser_id(rs.getString("USER_ID"));
				user.setEncode_password(rs.getString("ENCODE_PASSWORD"));
				user.setPassword_change_date(rs.getString("PASSWORD_CHANGE_DATE"));
				user.setPassword_change_period(rs.getString("PASSWORD_CHANGE_PERIOD"));
				user.setChange_password_flag(rs.getString("CHANGE_PASSWORD_FLAG"));
				user.setPassword_fail_count(rs.getString("PASSWORD_FAIL_COUNT"));
				user.setOld_password_1(rs.getString("OLD_PASSWORD_1"));
				user.setOld_password_2(rs.getString("OLD_PASSWORD_2"));
				user.setOld_password_3(rs.getString("OLD_PASSWORD_3"));
				user.setOld_password_4(rs.getString("OLD_PASSWORD_4"));
				user.setOld_password_5(rs.getString("OLD_PASSWORD_5"));
				user.setCreate_user_id(rs.getString("CREATE_USER_ID"));
				user.setUpdate_user_id(rs.getString("UPDATE_USER_ID"));

				try {
					user.setCreate_time(CustomJdbcDaoImpl.format.parse(rs.getString("CREATE_TIME")));
				} catch(ParseException e) {
					user.setCreate_time(null);
				}
				try {
					user.setUpdate_time(CustomJdbcDaoImpl.format.parse(rs.getString("UPDATE_TIME")));
				} catch(ParseException e) {
					user.setUpdate_time(null);
				}

				return user;
			}
		});
		
		if(result == null || result.size() == 0) {
			throw new UsernameNotFoundException("User ["+username+"] not found.");
		}
		
		return result.get(0);
	}

	@Override
	protected List<GrantedAuthority> loadUserAuthorities(String username) {
		String[] query_args = username.split(USERNAME_SEPARATOR);
		
		List<GrantedAuthority> result =  getJdbcTemplate().query(getAuthoritiesByUsernameQuery(), 
				query_args, new RowMapper<GrantedAuthority>(){

			@Override
			public GrantedAuthority mapRow(ResultSet rs, int rowNum) throws SQLException {
				/*
				 *  query should be looks like below 
				 *  - select username,authority from authorities where username = ?
				 */
				return new GrantedAuthorityImpl(rs.getString(1)); 
			}
		});
		
		return result;
	}

	@Override
	protected List<GrantedAuthority> loadGroupAuthorities(String username) {
		String[] query_args = username.split(USERNAME_SEPARATOR);
		
		/*
		 * TODO getGroupAuthoritiesByUsernameQuery() method가 없기 때문에, 우선 getAuthoritiesByUsernameQuery로 하도록 함.
		 */
		List<GrantedAuthority> result =  getJdbcTemplate().query(getAuthoritiesByUsernameQuery(), 
				query_args, new RowMapper<GrantedAuthority>(){

			@Override
			public GrantedAuthority mapRow(ResultSet rs, int rowNum) throws SQLException {
				/*
				 *  query should be looks like below 
				 *  - select g.id, g.group_name, ga.authority 
				 *  - from groups g, group_members gm, group_authorities ga 
				 *  - where gm.username = ? and g.id = ga.group_id and g.id = gm.group_id
				 */
				return new GrantedAuthorityImpl(rs.getString(2));
			}
		});
		
		return result;
	}
	
	
	
}
