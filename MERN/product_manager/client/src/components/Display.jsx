import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Display = () => {
    const [productList, setProductList] = useState([])

    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res) => {
            console.log('display page data', res.data)
            setProductList(res.data)
        })
        .catch((err) => {console.log('Display page error: ', err)})
    }, [deleteToggle])

    const handleDelete = (e, id) => {
        console.log(`Deleting ${id}`, e)
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then((res) => {
            setDeleteToggle(!deleteToggle)
        })
        .catch((err) => console.log(err))
    }

    return (
        <div>
            <h1>All Products</h1>
            <button className='btn btn-outline-success'><Link to={'/create'}>Add a Product</Link></button>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map((product, idx) => {
                            return(
                                <tr key={idx}>
                                    <td>{product.title}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td><button className='btn btn-info'><Link to={`/details/${product._id}`}>View</Link></button> | 
                                    <button className='btn btn-success'><Link to={`/update/${product._id}`}>Edit</Link></button> | 
                                    <button className='btn btn-danger' onClick={(e) => {handleDelete(e, product._id)}}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Display