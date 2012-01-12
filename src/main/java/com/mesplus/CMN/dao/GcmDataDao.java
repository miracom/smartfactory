package com.mesplus.CMN.dao;

import java.util.List;
import java.util.Map;

import com.mesplus.CMN.model.Filter;
import com.mesplus.CMN.model.Sorter;
/**
 * GCM DATA 조회 기능을 관리
 * @author kyunghyang
 * @since 1.0
 */
public interface GcmDataDao {
	/**
	 * 입력받은 parameter를 조합하여 쿼리로 생성하여 DB에서 조건에 맞는 데이타를 조회한다.
	 * <pre>
	 * 		select [selects]  
	 * 			from (select [selects] from [table] where [filters] order by [orders]) 
	 * 			where ROWNUM > start AND ROWNUM <= limit
	 * </pre>
	 * @param table 검색할 테이블명
	 * @param selects 검색하여 출력할 컬럼명
	 * @param filters 검색할 검색조건
	 * @param start 검색할 시작범위(ROWNUM)
	 * @param limit 검색할 끝 범위(ROWNUM)
	 * @param gcmDef GCM 설정 정보
	 * @return 검색된 N개의 DB 데이타
	 */
	public List<Map<String, Object>> select(String table, String[] selects, List<Filter> filters, int start, int limit, Map<String, Object> gcmDef);
	
	/**
	 * 입력받은 parameter를 조합하여 쿼리로 생성하여 DB에서 조건에 맞는 데이타 건수를 조회한다.
	 * <pre>
	 * 		select count(*) 
	 * 			from [table] 
	 * 			where [filters]
	 * </pre>
	 * @param table 검색할 테이블명
	 * @param filters 검색할 검색조건
	 * @param gcmDef GCM 설정 정보
	 * @return 검색된 데이타 개수
	 */
	public int selectCount(String table, List<Filter> filters, Map<String,Object> gcmDef);
	
	/**
	 * 입력받은 parameter를 조합하여 쿼리로 생성하여 DB에서 조건에 맞는 하나의 데이타를 조회한다.
	 * <pre>
	 * 		select [selects] 
	 * 			from [table] 
	 * 			where [filters]
	 * </pre>
	 * @param table 검색할 테이블명
	 * @param selects 검색하여 출력할 컬럼명
	 * @param filters 검색할 검색조건
	 * @param gcmDef GCM 설정 정보
	 * @return 검색된 1개의 DB 데이타
	 */
	public Map<String, Object> find( String table,String from, String[] selects, List<Filter> filters, Map<String,Object> gcmDef);
}
