package com.mesplus.CMN.dao;

import java.util.List;

import com.mesplus.CMN.model.File;

/**
 * FILE 관리
 * @author Jinho
 * @since 1.0
 */
public interface FileDao {
	/**
	 * 파일을 생성한다.
	 * @param file 파일정보
	 */
	public void create(File file);
	/**
	 * 파일ID에 해당하는 파일을 삭제한다.
	 * @param id 파일 아이디
	 */
	public void delete(String id);
	
	/**
	 * 파일ID에 해당하는 파일목록을 반환한다.
	 * @param ids 파일ID 목록
	 * @return 파일정보 목록
	 */
	public List<File> select(String[] ids);
	
	/**
	 * 파일ID에 해당하는 파일을 반환한다.
	 * @param id 파일 아이디
	 * @return 파일정보
	 */
	public File find(String id);
}
