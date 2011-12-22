package com.mesplus.CMN.model;

import java.util.Map;

/**
 * 쿼리에 검색 조건을 정의하는 모델
 * @author Jinho
 * @since 1.0
 */
public class Filter {
	String property;
	String value;
	
	/**
	 * 기본 생성자
	 */
	public Filter() {
		
	}
	
	/**
	 * 컬럼명과 조건값을 지정하는 생성자
	 * @param property 컬럼명
	 * @param value 조건값
	 */
	public Filter(String property, String value) {
		this.property = property;
		this.value = value;
	}
	
	/**
	 * property를 반환
	 * @return 컬럼명
	 */
	public String getProperty() {
		if (property.charAt(0) == ':'){
			return property.replaceAll(":", "");
		}
		return property;
	}
	
	/**
	 * property를 저장
	 * @param property 컬럼명
	 */
	public void setProperty(String property) {
		this.property = property;
	}
	
	/** 
	 * value를 반환
	 * @return 조건값
	 */
	public String getValue() {
		return value;
	}
	
	/**
	 * value를 저장
	 * @param value 조건값
	 */
	public void setValue(String value) {
		this.value = value;
	}
	
	/** 
	 * value를 반환
	 * @return 조건값
	 */
	public String getRawProperty(){
		return property;
	}
	
	/**
	 * value를 저장
	 * @param value 조건값
	 */
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
