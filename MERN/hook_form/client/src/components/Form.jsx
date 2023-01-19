import React, {useState} from 'react'

const Form = () => {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let [listOfUsers, setListOfUsers] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        //New inbound data
        let userObj = {firstname, lastname, email, password}
        setListOfUsers([...listOfUsers, userObj]);
    }

    const deleteUser = (e, idx) => {

        let copy = listOfUsers.filter((p, i) => {
            return i !== idx;
        })
        setListOfUsers(copy)
    }

    return (
        <div>
        <h1>User Form</h1>
        <form onSubmit={submitHandler}> 
            <div className='form-group'>
                <label>First Name:</label>
                <input onChange={(e) => setFirstName(e.target.value) } type="text" className='form-control'/>
                {
                    firstname.length < 3 && firstname.length > 0 ? <p className='text-danger'>Name must be 3 characters long</p> : ""
                }
            </div>

            <div className='form-group'>
                <label>Last Name:</label>
                <input onChange={(e) => setLastName(e.target.value) } type="text" className='form-control'/>
            </div>
            <div className='form-group'>
                <label>Email:</label>
                <input onChange={(e) => setEmail(e.target.value) } type="text" className='form-control'/>
            </div>
            <div className='form-group'>
                <label>Password:</label>
                <input onChange={(e) => setPassword(e.target.value) } type="text" className='form-control'/>
            </div>
            <div className='form-group'>
                <label>Confirm Password:</label>
                <input onChange={(e) => setPassword(e.target.value) } type="text" className='form-control'/>
            </div>
            <br />
            <button type="submit" className='btn btn-outline-warning'>Add Me</button>
        </form>
            {
                listOfUsers.map((user, i) => { 
                    return(
                        <div key={i}>
                        <h3>{user.firstname}</h3>
                        <h3>{user.lastname}</h3>
                        <h3>{user.email}</h3>
                        <h3>{user.password}</h3>
                        <br />
                        <button onClick={(e) => deleteUser(e, i)} className="btn btn-danger">Delete Me</button>
                        </div>
                    ) })
            }
        </div>
    )
}

export default Form