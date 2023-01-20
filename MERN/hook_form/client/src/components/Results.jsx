import React from "react";

const Results = (props) => {
    const {firstName, lastName, email, password, confirmPassword} = props.data;
    return (
        <div>
            <h1>Results</h1>
            <h2>First Name: {firstName}</h2>
            <h2>Last Name: {lastName}</h2>
            <h2>Email: {email}</h2>
            <h2>Password: {password}</h2>
            <h2>Confirm Password: {confirmPassword}</h2>
        </div>
    )
}

export default Results