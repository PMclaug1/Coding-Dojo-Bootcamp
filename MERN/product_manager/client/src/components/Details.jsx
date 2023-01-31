import React, { useEffect, useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router'

const Details = () => {
    const [product, setProduct] = useState("")
    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) => setProduct(res.data))
        .catch(err => console.log('This is our details page: ' + err))
    }, [id])

    const handleDelete = (e, id) => {
        console.log(`Deleting ${id}`, e)
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            navigate("/")
        })
        .catch((err) => console.log(err))
    }

    return (
        <div>
            <h1>Product Details</h1>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.rating}</p>
            <p><button className='btn btn-outline-primary'><Link to={'/'}>Home</Link></button></p>
            <p><button className='btn btn-danger' onClick={(e) => {handleDelete(e, product._id)}}>Delete</button></p>

        </div>
    )
}

export default Details