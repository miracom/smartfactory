<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<html lang='en'>
<head>
<title>Smart Factory</title>
<link rel="stylesheet" href="css/menu.css"></link>
</head>
<body class="welcome">
	<%-- <jsp:include page="common/header.jsp">
			<jsp:param name="pageTitle" value="Login"/>
		</jsp:include> --%>

	<div class="welcomeMent">
		<span class="productName">MESplus 6 JAVA</span> <span>Welcome,</span>
		Please Log In to Your Account ...
	</div>



	<form action="j_spring_security_check" method="post">
		<label for="j_password">Factory</label> <input id="j_password"
			name="j_password" maxlength="50" type="text" class="loginInput" /> <label
			for="j_username">user name</label> <input id="j_username"
			name="j_username" maxlength="50" type="text" class="loginInput" /> <label
			for="j_password">Password</label> <input id="j_password"
			name="j_password" maxlength="50" type="password" class="loginInput" />

		<div class="btnline">
			<input id="_spring_security_remember_me"
				name="_spring_security_remember_me" type="checkbox" value="true" />
			<label for="_spring_security_remember_me">remember me?</label> <input
				type="submit" value="Login" class="btnWelcomeLogin" />
		</div>
	</form>

	<jsp:include page="common/footer.jsp" />
</body>
</html>



