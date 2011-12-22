package com.mesplus.CMN.model;

import java.util.Map;

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
		if (property.charAt(0) == ':'){
			return property.replaceAll(":", "");
		}
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
	public String getRawProperty(){
		return property;
	}
	public void setGcmProperty(Map<String,Object> gcmDef){
		String val = "";
		for(int i =1; i<11; i++){
			val = gcmDef.get("KEY_"+i+"_PRT").toString();
			if(val.equals(property)){
				setProperty("KEY_"+i);
			}
		}
		for(int i =1; i<11; i++){
			val = gcmDef.get("DATA_"+i+"_PRT").toString();
			if(val.equals(property)){
				setProperty("DATA_"+i);
			}
		}
	}
}