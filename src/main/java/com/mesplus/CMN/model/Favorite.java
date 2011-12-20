package com.mesplus.CMN.model;

/**
 * 즐겨찾기 정보를 정의하는 모델
 * @author Jinho
 * @since 1.0
 */
public class Favorite {
	/**
	 * 공장 아이디
	 * @since 1.0
	 */
	private String factory;
	private String program_id;
	private String user_id;
	private String seq_num;
	private String func_name;
	private String user_func_desc;
	
	/**
	 * 공장의 아이디를 반환
	 * @return 공장 아이디
	 */
	public String getFactory() {
		return factory;
	}
	
	/**
	 * 공장의 아이디를 저장
	 * @param factory 공장 아이디
	 */
	public void setFactory(String factory) {
		this.factory = factory;
	}
	
	/**
	 * 프로그램의 아이디를 반환
	 * @return 프로그램 아이디
	 */
	public String getProgram_id() {
		return program_id;
	}
	
	/**
	 * 프로그램의 아이디를 저장
	 * @param program_id 프로그램 아이디
	 */
	public void setProgram_id(String program_id) {
		this.program_id = program_id;
	}
	
	/**
	 * 사용자 아이디를 반환
	 * @return 사용자 아이디
	 */
	public String getUser_id() {
		return user_id;
	}
	
	/**
	 * 사용자 아이디를 저장
	 * @param user_id 사용자 아이디
	 */
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	
	/**
	 * 순차 번호를 반환
	 * @return 순차번호
	 */
	public String getSeq_num() {
		return seq_num;
	}
	
	/**
	 * 순차 번호를 저장
	 * @param seq_num 순차번호
	 */
	public void setSeq_num(String seq_num) {
		this.seq_num = seq_num;
	}
	
	/**
	 * Function 아이디를 반환
	 * @return Function 아이디
	 */
	public String getFunc_name() {
		return func_name;
	}
	
	/**
	 * Function 아이디를 저장
	 * @param func_name Function 아이디
	 */
	public void setFunc_name(String func_name) {
		this.func_name = func_name;
	}
	
	/**
	 * Function 설명을 반환
	 * @return Function 설명
	 */
	public String getUser_func_desc() {
		return user_func_desc;
	}
	
	/**
	 * Function 설명을 저장
	 * @param user_func_desc Function 설명
	 */
	public void setUser_func_desc(String user_func_desc) {
		this.user_func_desc = user_func_desc;
	}
}
