import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const Update = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(5)

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) => {
            console.log("Update get req", res.data)
            const song = res.data
            setTitle(song.title)
            setDescription(song.description)
            setPrice(song.price)
        })
        .catch((err) => console.log("Update page error -", err))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/${id}`, {title, description, price})
        .then((res) => {
            navigate("/")
        })
        .catch(err => console.log("This is put req -", err))
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                </div>
                <div>
                    <button type='submit'>Update Product</button> |
                    <button className='btn btn-outline-warning'><Link to={`/`}>Cancel</Link></button>
                </div>
            </form>

        </div>
    )
}

export default Update