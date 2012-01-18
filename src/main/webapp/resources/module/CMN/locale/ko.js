/* 
 * 국제화의 기본형 카테고리
 * - format : 날짜, 시간, 기타 도량형의 포맷정의
 * - title : 타이틀 용도의 짧은 텍스트를 정의
 * - msg : 설명형의 비교적 길이가 긴 텍스트를 정의
 * 
 * 추가 카테고리가 필요한 경우에는 
 * Ext.onReady(function() {
 * 	   Text.added = Text.added || {};
 * 
 *     Text.added.abc = 'ABC';
 *     Text.added.abc_s = 'abc';
 *     ...
 * });
 * 식으로 추가한다.
 */

Ext.onReady(function() {
	Text.title.favorites = '즐겨찾기';
	Text.title.favorites_s = '즐찾';
	Text.msg.greeting = '안녕하세요? {user}씨!';
	Text.msg.greeting_s = '안녕. {user}씨!';
	Text.format.date = 'Y-m-d';
	Text.format.time = 'H:i:s';
	Text.format.datetime = 'Y-m-d H:i:s';
});