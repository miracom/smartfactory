package com.mesplus.CMN.model;

import java.util.Date;


/**
 * 파일의 정보를 정의하는 모델
 * @author Jinho
 * @since 1.0
 */
public class File {
	private String id;
	private String file_path;
	private String origin_name;
	private int file_size;
	private String file_type;
	private String uploader;
	private Date upload_time;

	/**
	 * 파일의 아이디를 반환
	 * @return 파일의 아이디
	 */
	public String getId() {
		return id;
	}

	/**
	 * 파일의 아이디를 저장
	 * @param id 파일의 아이디
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * 파일의 경로를 반환
	 * @return 파일의 경로
	 */
	public String getFile_path() {
		return file_path;
	}

	/**
	 * 파일의 경로를 저장
	 * @param file_path 파일의 경로
	 */
	public void setFile_path(String file_path) {
		this.file_path = file_path;
	}

	/**
	 * 파일의 원본 파일명 반환
	 * @return 원본 파일명
	 */
	public String getOrigin_name() {
		return origin_name;
	}

	/**
	 * 파일의 원본 파일명 저장
	 * @param origin_name 원본 파일명
	 */
	public void setOrigin_name(String origin_name) {
		this.origin_name = origin_name;
	}

	/**
	 * 파일의 사이즈를 반환
	 * @return 파일 사이즈
	 */
	public int getFile_size() {
		return file_size;
	}

	/**
	 * 파일의 사이즈를 저장
	 * @param file_size 파일 사이즈
	 */
	public void setFile_size(int file_size) {
		this.file_size = file_size;
	}
	
	public String getFile_type() {
		return file_type;
	}
	
	public void setFile_type(String file_type) {
		this.file_type = file_type;
	}

	/**
	 * 파일을 업로드한 사용자를 반환
	 * @return 업로드한 사용자
	 */
	public String getUploader() {
		return uploader;
	}

	/**
	 * 파일을 업로드한 사용자를 저장
	 * @param uploader 업로드한 사용자
	 */
	public void setUploader(String uploader) {
		this.uploader = uploader;
	}

	/**
	 * 파일의 업로드 시간을 반환
	 * @return 파일 업로드 시간
	 */
	public Date getUpload_time() {
		return upload_time;
	}

	/**
	 * 파일의 업로드 시간을 저장
	 * @param upload_time 파일 업로드 시간
	 */
	public void setUpload_time(Date upload_time) {
		this.upload_time = upload_time;
	}

}
