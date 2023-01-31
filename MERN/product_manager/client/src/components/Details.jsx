import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router'

const Details = () => {
    const [product, setProduct] = useState("")
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) => setProduct(res.data))
        .catch(err => console.log('This is our details page: ' + err))
    }, [id])

    return (
        <div>
            <h1>Product Details</h1>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.rating}</p>
            <p><button className='btn btn-outline-primary'><Link to={'/'}>Home</Link></button></p>

        </div>
    )
}

export default Details