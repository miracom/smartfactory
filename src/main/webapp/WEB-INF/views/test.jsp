<%@ page contentType="text/html; charset=utf-8"%> 

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
	<title>Smart Factory</title>
	
	<script type="text/javascript" src="js/jquery/jquery.min.js"></script>
	<script type="text/javascript" src="js/jquery/history/jquery.history.js"></script>
	<script type="text/javascript" src="js/sw/sw-json.js"></script>
	
	<script>
	
	$(document).ready(function() {
	    // check name availability on focus lost
	    $('#name').blur(function() {
	        checkAvailability();
	    });

	    $("#account").submit(function(e) {
 		    var account = $(e.target).serializeObject();

			console.log(account);

			$.postJSON("account", account, function(data) {
		        $("#name").val(data.name);
		        $("#addr").val(data.addr);
			});

			return false;
		});
	});
	 
	function checkAvailability() {
		$.getJSON("json_test", {name: 'NNNNN'}, function(model) {
			console.log(model);
		});
		
 	}
	
	</script>	
</head>
<body>

<jsp:include page="common/header.jsp"/>

<P>  The time on the server is ${serverTime}. </P>

<form id="account" action="account">
	<input name="name" id="name" />
	<input name="addr" id="addr" />
	<input type="submit" value="Go" />
</form>

</body>
</html>
