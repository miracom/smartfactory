package com.mesplus.CMN.model;

public class Sorter {
	String property;
	String direction;
	
	public Sorter() {
		
	}
	
	public Sorter(String property, String direction) {
		this.property = property;
		this.direction = direction;
	}
	
	public String getProperty() {
		return property;
	}
	public void setProperty(String property) {
		this.property = property;
	}
	public String getDirection() {
		return direction;
	}
	public void setDirection(String direction) {
		this.direction = direction;
	}
}
