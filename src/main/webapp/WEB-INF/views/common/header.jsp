<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<div id="header">
	<div class="username">
		<c:if test="${principal.username}">
		Welcome, <strong><sec:authentication property="principal.username"/></strong>
		</c:if>
		<c:if test="${!principal.username}">
		Welcome, <strong><sec:authentication property="name"/></strong>
		</c:if>
		
		<a href="<c:url value="/logout"/>">로그아웃</a>
	</div>
</div>
