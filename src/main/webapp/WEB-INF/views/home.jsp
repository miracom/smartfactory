<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html lang='en'>
	<head>
		<title>Smart Factory</title>
		<link rel="stylesheet" href="js/ext-js/resources/css/ext-smartfactory.css"></link>
		<link rel="stylesheet" href="css/menu.css"></link>
		<link rel="stylesheet" href="js/ux/statusbar/css/statusbar.css"></link>
		<link rel="stylesheet" href="js/ux/tab/css/TabScrollerMenu.css"></link>
		
		<script src="js/downloadify/swfobject.js"></script>
		<script src="js/downloadify/downloadify.min.js"></script>
		
		<script src="js/ext-js/bootstrap.js"></script>

		<script src="app/application.js"></script>
		
		<script src="product/Miracom/system.js"></script>

		<script src="module/CMN/module.js"></script>
		<script src="module/SEC/module.js"></script>
		<script src="module/RPT/module.js"></script>
		<script src="module/WIP/module.js"></script>
		<script src="module/RAS/module.js"></script>
		<script src="module/MBI/module.js"></script>
		<script src="module/NAM/module.js"></script>
	</head>
	<body user="<sec:authentication property="principal.username"/>" factory="<sec:authentication property="principal.factory"/>">
	</body>
</html>
