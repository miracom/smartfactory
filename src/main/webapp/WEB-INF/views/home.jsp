<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html lang='en'>
	<head>
		<title>Smart Factory</title>
		<link rel="stylesheet" href="js/ext-js/resources/css/ext-smartfactory.css"></link>
		<link rel="stylesheet" href="css/smartfactory.css"></link>
		<link rel="stylesheet" href="js/ux/statusbar/css/statusbar.css"></link>
		<link rel="stylesheet" href="js/ux/tab/css/TabScrollerMenu.css"></link>
		<link rel="stylesheet" type="text/css" href="js/ux/grid/css/CheckHeader.css">
		
		
		<!-- JavaScripts For Excel Export -->
		<script src="js/downloadify/swfobject.js"></script>
		<script src="js/downloadify/downloadify.min.js"></script>

		<!-- JavaScripts For jQuery -->
	    <script type="text/javascript" src="js/jquery/jquery.min.js"></script>
	    <script type="text/javascript" src="js/jquery/upload/fileuploader.js"></script>	    

		<!-- JavaScripts For Each Modules -->
		<script src="js/smartfactory/cmn.js"></script>

		<!-- JavaScripts For Comet -->
	    <script type="text/javascript" src="js/org/cometd.js"></script>
	    <script type="text/javascript" src="js/org/cometd/AckExtension.js"></script>
	    <script type="text/javascript" src="js/org/cometd/ReloadExtension.js"></script>
	    <script type="text/javascript" src="js/jquery/comet/json2.js"></script>
	    <script type="text/javascript" src="js/jquery/cookie/jquery.cookie.js"></script>
	    <script type="text/javascript" src="js/jquery/comet/jquery.cometd.js"></script>
	    <script type="text/javascript" src="js/jquery/comet/jquery.cometd-reload.js"></script>
    		
	    <script type="text/javascript" src="js/locale/locale.js"></script>

		<script type="text/javascript">
		var login = {
			username : '<sec:authentication property="principal.username"/>',
			factory : '<sec:authentication property="principal.factory"/>',
			locale : 'ko'
		};
		
		initLocalization(this);
		</script>

		<!-- JavaScripts For ExtJS -->
		<script src="js/ext-js/bootstrap.js"></script>

		<script src="app/application.js"></script>
		
		<script src="module/CMN/module.js"></script>
		<script src="module/SEC/module.js"></script>
		<script src="module/ARC/module.js"></script>
		
		<script src="module/RPT/module.js"></script>
		<script src="module/WIP/module.js"></script>
		<script src="module/RAS/module.js"></script>
		<script src="module/MBI/module.js"></script>
		<script src="module/WMG/module.js"></script>

		<script src="module/WIX/module.js"></script>
	</head>
	<body>
	</body>
</html>
