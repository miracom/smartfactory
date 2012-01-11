package com.mesplus.CMN.dao;

import java.util.List;
import java.util.Map;
/**
 * GCM 설정 조회 기능을 관리
 * @author kyunghyang
 * @since 1.0
 */
public interface GcmDefineDao {
	/**
	 * 입력받은 parameter를 조합하여 쿼리로 생성하여 DB에서 조건에 맞는 데이타를 조회한다.
	 * @param table 검색할 테이블명
	 * @return 검색된 1개의 DB 데이타
	 */
	public Map<String, Object> select(String table);
}
