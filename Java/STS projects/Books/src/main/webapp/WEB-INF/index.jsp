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
	<h1>All Books</h1>
	<table class="table table-striped">
		<thead>
			<tr>
				<th scope="col">ID</th>
				<th scope="col">Title</th>
				<th scope="col">Language</th>
				<th scope="col">Number of Pages</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="book" items="${books}">
				<tr>
					<td><c:out value="${book.id}" /></td>
					<td><a href="/books/${book.id}"><c:out
								value="${book.title}" /></td>
					</a>
					<td><c:out value="${book.language}" /></td>
					<td><c:out value="${book.numberOfPages}" /></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<a href="/books/new">Create a New Book</a>
</body>
</html>