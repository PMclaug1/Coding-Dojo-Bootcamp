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

<title>Reading Books</title>
</head>
<body>
	<div class="container">
	<h1>All Books</h1>
		<table class="table">
		<tr>
			<th scope="row">ID:</th>
			<td><c:out value="${travel.id }"></c:out></td>
		</tr>
		<tr>
			<th scope="row">Expense:</th>
			<td><c:out value="${travel.expense }"></c:out></td>
		</tr>
		<tr>
			<th scope="row">Vendor:</th>
			<td><c:out value="${travel.vendor}" /></td>
		</tr>
		<tr>
			<th scope="row">Amount:</th>
			<td><c:out value="${travel.amount}" /></td>
		</tr>
		<tr>
			<th scope="row">Description:</th>
			<td><c:out value="${travel.description}" /></td>
		</tr>
		</table>
		
		<a href="/expenses">Home</a>
		<a href="/expenses/edit/${travel.id}">Edit</a>
</body>
</div>

</body>
</html>
