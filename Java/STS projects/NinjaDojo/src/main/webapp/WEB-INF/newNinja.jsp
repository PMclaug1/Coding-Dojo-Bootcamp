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
    <title>New Ninja</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
<!--    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<!--      <script type="text/javascript" src="/js/app.js"></script>--><!-- change to match your file/naming structure -->
</head>
<body>
	<h1>New Ninja</h1>
	<p><a href="/">Dashboard</a></p>
	<form:form action="/ninjas/new" modelAttribute="ninja" method="post">
		<div>
			<form:errors path="name"/>
			<form:label path="name" for="name">Name:</form:label>
			<form:input path="name" type="text"/>
		</div>
		<div>
			<form:select path="dojo" class="input">
			    <c:forEach var="dojo" items="${dojos}">
			    	<option value="${dojo.id}">${dojo.name}</option>
			    </c:forEach>
			</form:select>
		</div>
		<div>
			<input value="Add" type="submit"/>
		</div>
	</form:form>
</body>
</html>