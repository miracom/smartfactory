<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<jsp:include page="../common/header.jsp">
	<jsp:param name="pageTitle" value="Change Password" />
</jsp:include>

<h1>Change Password</h1>

<form method="post">
	<label for="oldpassword">Old Password</label> 
	<input id="oldpassword"	name="oldpassword" size="20" maxlength="50" type="password" />
	<br /> 
	
	<label for="password">New Password</label>
	<input id="password" name="password" size="20" maxlength="50" type="password" />
	<br />
	
	<label for="passwordconfirm">New Password Confirm</label>
	<input id="passwordconfirm" name="passwordconfirm" size="20" maxlength="50" type="password" /> 
	<br />
	
	<input type="submit" value="New Password" />
</form>

<jsp:include page="../common/footer.jsp" />