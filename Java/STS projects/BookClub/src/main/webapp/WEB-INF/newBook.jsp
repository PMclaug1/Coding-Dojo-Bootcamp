<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css"/>
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<meta charset="UTF-8">
<title>New Book</title>
</head>
<body class="container">

	<h1>Create a New Book</h1>
	<form:form action="/books/new" method="post"
		modelAttribute="newBook">
		<p class="form-group">
			<form:label path="title">Title</form:label>

			<form:input path="title" class="form-control" />
			<form:errors path="title" class="text-danger" />
		</p>
		<p class="form-group">
			<form:label path="author">Author</form:label>

			<form:input path="author" class="form-control" />
			<form:errors path="author" class="text-danger" />
		</p>
		<p class="form-group">
			<form:label path="thoughts">Thoughts</form:label>

			<form:input path="thoughts" class="form-control" />
			<form:errors path="thoughts" class="text-danger" />
		</p>
		
		
		<form:hidden path="member" value="${userId}"/>
		
		<input type="submit" value="Submit" class="btn btn-primary" />
	</form:form>
	

</body>
</html>