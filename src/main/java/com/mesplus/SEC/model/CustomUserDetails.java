package com.mesplus.SEC.model;

import java.util.Collection;
import java.util.Date;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class CustomUserDetails implements UserDetails {

	private static final long serialVersionUID = 1L;
	
	private String factory;
	private String user_id;
	private String encode_password;
	private String password_change_date;
	private String password_change_period;
	private String change_password_flag;
	private String password_fail_count;
	private String old_password_1;
	private String old_password_2;
	private String old_password_3;
	private String old_password_4;
	private String old_password_5;
	private String create_user_id;
	private Date create_time;
	private String update_user_id;
	private Date update_time;

	@Override
	public Collection<GrantedAuthority> getAuthorities() {
		return null;
	}

	@Override
	public String getPassword() {
		return encode_password;
	}

	@Override
	public String getUsername() {
		return user_id;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	public String getFactory() {
		return factory;
	}

	public void setFactory(String factory) {
		this.factory = factory;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getEncode_password() {
		return encode_password;
	}

	public void setEncode_password(String encode_password) {
		this.encode_password = encode_password;
	}

	public String getPassword_change_date() {
		return password_change_date;
	}

	public void setPassword_change_date(String password_change_date) {
		this.password_change_date = password_change_date;
	}

	public String getPassword_change_period() {
		return password_change_period;
	}

	public void setPassword_change_period(String password_change_period) {
		this.password_change_period = password_change_period;
	}

	public String getChange_password_flag() {
		return change_password_flag;
	}

	public void setChange_password_flag(String change_password_flag) {
		this.change_password_flag = change_password_flag;
	}

	public String getPassword_fail_count() {
		return password_fail_count;
	}

	public void setPassword_fail_count(String password_fail_count) {
		this.password_fail_count = password_fail_count;
	}

	public String getOld_password_1() {
		return old_password_1;
	}

	public void setOld_password_1(String old_password_1) {
		this.old_password_1 = old_password_1;
	}

	public String getOld_password_2() {
		return old_password_2;
	}

	public void setOld_password_2(String old_password_2) {
		this.old_password_2 = old_password_2;
	}

	public String getOld_password_3() {
		return old_password_3;
	}

	public void setOld_password_3(String old_password_3) {
		this.old_password_3 = old_password_3;
	}

	public String getOld_password_4() {
		return old_password_4;
	}

	public void setOld_password_4(String old_password_4) {
		this.old_password_4 = old_password_4;
	}

	public String getOld_password_5() {
		return old_password_5;
	}

	public void setOld_password_5(String old_password_5) {
		this.old_password_5 = old_password_5;
	}

	public String getCreate_user_id() {
		return create_user_id;
	}

	public void setCreate_user_id(String create_user_id) {
		this.create_user_id = create_user_id;
	}

	public Date getCreate_time() {
		return create_time;
	}

	public void setCreate_time(Date create_time) {
		this.create_time = create_time;
	}

	public String getUpdate_user_id() {
		return update_user_id;
	}

	public void setUpdate_user_id(String update_user_id) {
		this.update_user_id = update_user_id;
	}

	public Date getUpdate_time() {
		return update_time;
	}

	public void setUpdate_time(Date update_time) {
		this.update_time = update_time;
	}

}
