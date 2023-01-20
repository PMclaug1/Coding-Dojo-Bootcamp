import React from 'react'

const Form = (props) => {
    const {inputs, setInputs} = props;

    const onChange = (e) => {
        setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
    });

    }

    return (
        <div>
            <h1>User Form</h1>
            <form className='w-50 p-3 mx-auto'> 
                <div className='form-group'>
                    <label>First Name:</label>
                    <input onChange={onChange} type="text" name="firstName" className='form-control'/>
                    {
                        <p>
                            {inputs.firstName.length < 3 && inputs.firstName.length > 0 ? "First name must be at least 3 characters" : ""}
                        </p>
                    }
                </div>

                <div className='form-group'>
                    <label>Last Name:</label>
                    <input onChange={onChange} type="text" name="lastName" className='form-control'/>
                    <p>
                        {inputs.lastName.length < 3 && inputs.lastName.length > 0 ? "Last name must be at least 3 characters" : ""}
                    </p>
                </div>
                <div className='form-group'>
                    <label>Email:</label>
                    <input onChange={onChange} type="email" name="email" className='form-control'/>
                    <p>
                        {inputs.email.length < 8 && inputs.email.length > 0 ? "Email must be at least 8 characters" : ""}
                    </p>
                </div>
                <div className='form-group'>
                    <label>Password:</label>
                    <input onChange={onChange} type="password" name="password" className='form-control'/>
                    <p>
                        {inputs.password.length < 8 && inputs.password.length > 0 ? "Password must be at least 8 characters" : ""}
                    </p>
                </div>
                <div className='form-group'>
                    <label>Confirm Password:</label>
                    <input onChange={onChange} type="password" name="confirmPassword" className='form-control'/>
                    <p>
                        {inputs.confirmPassword.length < 8 && inputs.confirmPassword.length > 0 ? "Password must be at least 8 characters " : ""}
                        {inputs.password !== inputs.confirmPassword ? "Passwords do not match" : ""}
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Form