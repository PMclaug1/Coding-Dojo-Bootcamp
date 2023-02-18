<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>  

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous">
<title>Travel Expenses</title>
</head>
<body>
	<h1>All Expenses</h1>
	<table class="table table-striped">
		<thead>
			<tr>
				<th scope="col">ID</th>
				<th scope="col">Expense</th>
				<th scope="col">Vendor</th>
				<th scope="col">Amount</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="travel" items="${travels}">
				<tr>
					<td><c:out value="${travel.id}" /></td>
					<td><a href="/expenses/${travel.id}"><c:out
								value="${travel.expense}" /></td>
					</a>
					<td><c:out value="${travel.vendor}" /></td>
					<td><c:out value="${travel.amount}" /></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<div class="container">
		<h3>New Expense</h3>
		<form:form action="/expenses" method="post" modelAttribute="travel">
			<p>
				<form:label path="expense" class="form-control">Expense</form:label>
				<form:errors path="expense" />
				<form:input path="expense" />
			</p>
			<p>
				<form:label path="vendor" class="form-control">Vendor</form:label>
				<form:errors path="vendor" />
				<form:textarea path="vendor" />
			</p>
			<p>
				<form:label path="amount" class="form-control">Amount</form:label>
				<form:errors path="amount" />
				<form:input type="number" path="amount" />
			</p>
			<p>
				<form:label path="description" class="form-control">Description</form:label>
				<form:errors path="description" />
				<form:textarea path="description" />
			</p>
			<input type="submit" value="Submit" />
		</form:form>
	</div>
</body>
</html>