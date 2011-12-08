package com.mesplus.CMN.model;

public class Filter {
	String property;
	String value;
	
	public Filter() {
		
	}
	
	public Filter(String property, String value) {
		this.property = property;
		this.value = value;
	}
	
	public String getProperty() {
		return property;
	}
	public void setProperty(String property) {
		this.property = property;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
}
