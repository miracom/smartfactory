package com.mesplus.CMN.model;

/**
 * 쿼리에 정렬 조건을 정의하는 모델
 * @author Jinho
 * @since 1.0
 */
public class Sorter {
	String property;
	String direction;
	
	/**
	 * 기본 생성자
	 */
	public Sorter() {
		
	}
	
	/**
	 * 컬럼명과 조건값을 지정하는 생성자
	 * @param property 컬럼명
	 * @param direction 정렬 조건값(ASC, DESC)
	 */
	public Sorter(String property, String direction) {
		this.property = property;
		this.direction = direction;
	}
	
	/**
	 * property를 반환
	 * @return 컬럼명
	 */
	public String getProperty() {
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
	 * direction 반환
	 * @return 정렬 조건값(ASC, DESC)
	 */
	public String getDirection() {
		return direction;
	}
	
	/**
	 * direction 저장
	 * @param direction 정렬 조건값(ASC, DESC)
	 */
	public void setDirection(String direction) {
		this.direction = direction;
	}
}
