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
<link rel="stylesheet" href="/css/main.css" />
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<meta charset="UTF-8">
<title>One Book Dashboard</title>
</head>
<body class="container">

	<h1>Book Details</h1>

	<p>
		<a href="/home">Go to Dashboard</a>
	</p>

	<table class="table table-dark">
		<tr>
			<td scope="col">Title</td>
			<td><c:out value="${book.title }" /></td>
		<tr />
		<tr>
			<td scope="col">Author</td>
			<td><c:out value="${book.author }" /></td>
		<tr />
		<tr>
			<td scope="col">Thoughts</td>
			<td><c:out value="${book.thoughts }" /></td>
		<tr />

		<tr>
			<td scope="col">Member</td>
			<td><c:out value="${book.member.userName }" /></td>
		</tr>

		<tr>
			<td scope="col">Contact Member</td>

			<td><c:out value="${book.member.email }" /></td>
		</tr>
	</table>


	<p>
		<a href="/logout">Log Out</a>
	</p>

</body>
</html>