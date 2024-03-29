<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Dojos</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
<!--    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<!--      <script type="text/javascript" src="/js/app.js"></script>--><!-- change to match your file/naming structure -->
</head>
<body>
	<h1>Dojos</h1>
	<p><a href="/dojos/new">Add a new Dojo</a></p>
	<p><a href="/ninjas/new">Add a new Ninja</a></p>
	<table>
		<thead>
			<tr>
				<th>Dojo</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="dojo" items="${dojos}">
				<tr>
					<td><c:out value="${dojo.name}"/></td>
					<td><a href="/dojos/${dojo.id}"><c:out value="See Ninjas"/></a></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</body>
</html>