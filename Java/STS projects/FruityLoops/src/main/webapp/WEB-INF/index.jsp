<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

<title>Fruit Store</title>
</head>
<body>
	<div class="container">
		<h1>Fruit Store</h1>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">Name</th>
					<th scope="col">Price</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="fruits" items="${fruits}">
					<tr class="table-primary">
						<td><c:out value="${fruits.name}"></c:out></td>
						<td><c:out value="${fruits.price}"></c:out></td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>

</body>
</html>
