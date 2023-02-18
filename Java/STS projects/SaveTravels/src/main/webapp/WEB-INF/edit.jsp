<%@ page isErrorPage="true"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<h1>Edit Book</h1>
<form:form action="/expenses/${travel.id}" method="post"
	modelAttribute="travel">
	<input type="hidden" name="_method" value="put">
	<p>
		<form:label path="expense">Expense</form:label>
		<form:errors path="expense" />
		<form:input path="expense" />
	</p>
	<p>
		<form:label path="vendor">Vendor</form:label>
		<form:errors path="vendor" />
		<form:textarea path="vendor" />
	</p>
	<p>
		<form:label path="amount">Amount</form:label>
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
<form action="/expenses/${travel.id}" method="post">
	<input type="hidden" name="_method" value="delete"> <input
		type="submit" value="Delete">

	<p>
		<a href="/expenses">Home</a>
	</p>
</form>
