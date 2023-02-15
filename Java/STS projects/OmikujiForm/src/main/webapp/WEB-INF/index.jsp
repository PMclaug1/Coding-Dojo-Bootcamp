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

<title>Omikuji Forms</title>
</head>
<body>
	<div class="container">
		<h3>Send an Omikuji</h3>
		<form action='/send' method="POST">
			<label class="form-label">Pick any number from 5 to 25</label> <input type="number" name='number' class="form-control"> 
			<label class="form-label">Enter the name of any city.</label> <input type='text' name='city' class="form-control"> 
			<label class="form-label">Enter the name of any real person.</label> <input type='text' name='person' class="form-control">
			<label class="form-label">Enter professional endeavor or hobby:</label> <input type='text' name='hobby' class="form-control">
			<label class="form-label">Enter any type of living thing.</label> <input type='text' name='thing' class="form-control">
			<label class="form-label">Say something nice to someone:</label> <input type='text' name='affirmation' class="form-control">    
			
			<p>Send and show a friend</p>
			<input type='submit' value='send'  class="mt-2 bd-highlight">
		</form>

	</div>

</body>
</html>
