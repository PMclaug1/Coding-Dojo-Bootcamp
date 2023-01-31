import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(5)

    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/product`, {title, description, price})
        .then(res => {
            navigate("/")
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors; 
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) { 
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })    
    }

    return (
        <div>
            <h1>Add a Product - Create </h1>
            <form onSubmit={handleSubmit}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div>
                    <label>Title</label>
                    <input type="text" onChange={(e) => {setTitle(e.target.value)}} />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" onChange={(e) => {setDescription(e.target.value)}} />
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" onChange={(e) => {setPrice(e.target.value)}} />
                </div>
                <div>
                    <button type='submit'>Add a Product</button> | 
                    <button className='btn btn-outline-warning'><Link to={`/`}>Cancel</Link></button>
                </div>
            </form>
        </div>
    )
}

export default Create