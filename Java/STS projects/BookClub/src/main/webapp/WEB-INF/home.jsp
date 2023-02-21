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
<title>User Dashboard</title>
</head>
<body class="container">
	<p>
		<a href="/books/new">Add a Book</a>
	</p>


	<h1>Welcome, ${ userName}</h1>


	<table class="table table-dark">
		<thead>
			<tr>
				<th scope="col">#ID</th>
				<th scope="col">Title</th>
				<th scope="col">Author</th>
				<th scope="col">Thoughts</th>
				<th scope="col">Member</th>
				<th scope="col">Action</th>
				<th></th>

			</tr>
		</thead>
		<tbody>
			<c:forEach var="eachBook" items="${bookList}">
				<tr>
					<td scope="row"><c:out value="${eachBook.id }" /></td>
					<td><a href="/books/${eachBook.id }"><c:out
								value="${eachBook.title}" /></a></td>
					<td><c:out value="${eachBook.author}" /></td>
					<td><c:out value="${eachBook.thoughts}" /></td>
					<td><c:out value="${eachBook.member.userName}" /></td>

					<c:choose>
						<c:when test="${userId.equals(eachBook.member.id) }">
							<td><a href="/books/edit/${eachBook.id }">Edit</a></td>
							<td>
						<!-- 	Delete form -->
								<form action="/books/delete/${eachBook.id}"
									method="post">
									<input type="hidden" name="_method" value="delete"> <input
										type="submit" value="Delete" class="btn btn-danger">
								</form>
							</td>
						</c:when>
						<c:otherwise>
							<td></td>
							<td></td>
						</c:otherwise>
					</c:choose>

				</tr>
			</c:forEach>

		</tbody>
	</table>



	<p>
		<a href="/logout">Log Out</a>
	</p>

</body>
</html>