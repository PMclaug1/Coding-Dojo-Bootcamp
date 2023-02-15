<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">

<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="/css/style.css">
<title>Omikuji</title>
</head>
<body>
	<div class="container d-flex flex-column align-items-center">
		<h3>Here's Your Omikuji</h3>
			<div id="omi" >
				<p class="col-4 mx-auto">In <c:out value="${number}"/> years, you will live in <c:out value="${city }"/> with <c:out value="${person }"/> as your roommate, <c:out value="${hobby }"/> for a living. The next time you see a <c:out value="${thing }"/> you will have good luck. <c:out value="${affirmation }"/></p>
			</div>


		<a href="/omikuji">Go Back</a>
	</div>

</body>
</html>