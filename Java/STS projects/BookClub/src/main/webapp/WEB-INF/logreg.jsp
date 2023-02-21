<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/css/main.css">
<script type="text/javascript" src="/js/app.js"></script>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/main.css" />
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<title>Registration and Login</title>
</head>
<body class="container">

	<div class="container">
	<h1>Welcome!</h1>
	
	<h3>Join our growing community</h3>
		<div class="container-fluid mb-1 pb-1" style="border:2px solid #000000; background: #6495ed">
<!-- Register -->
			<h2>New User</h2>
			<form:form action="/register" method="POST" modelAttribute="newUser">
				<div class="form-group">
					<form:label path="userName">Name:</form:label>
					<form:input path="userName" class="form-control" />
					<form:errors path="userName" class="text-danger" />
				</div>

				<div class="form-group">
					<form:label path="email">Email:</form:label>
					<form:input path="email" class="form-control" />
					<form:errors path="email" class="text-danger" />
				</div>

				<div class="form-group">
					<form:label path="password">Password:</form:label>
					<form:input path="password" class="form-control" type="password" />
					<form:errors path="password" class="text-danger" />
				</div>

				<div class="form-group">
					<form:label path="confirm">Confirm Password:</form:label>
					<form:input path="confirm" class="form-control" type="password" />
					<form:errors path="confirm" class="text-danger" />
				</div>
				<button type="submit" class="btn mt-2" style="background: #979797">Submit</button>
			</form:form>
		</div>
<!-- Log In -->
		<div class="container-fluid mb-1 pb-1" style="border:2px solid #000000; background: #6495ed">
			<h2>Log in</h2>
			<form:form action="/login" method="POST" modelAttribute="newLogin">

				<div class="form-group">
					<form:label class="form-label" path="email">Email:</form:label>
					<form:input path="email" class="form-control" />
					<form:errors path="email" class="text-danger" />
				</div>

				<div class="form-group">
					<form:label path="password">Password:</form:label>
					<form:input path="password" class="form-control" type="password" />
					<form:errors path="password" class="text-danger" />
				</div>

				<button type="submit" class="btn mt-2" style="background: #979797">Submit</button>

			</form:form>
		</div>
	</div>


</body>
</html>