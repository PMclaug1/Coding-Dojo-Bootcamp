import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [rating, setRating] = useState(5)
    const [top100, setTop100] = useState(false)

    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/songs`, {title, artist, rating, top100})
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
            <h1>Add a song - Create </h1>
            <form onSubmit={handleSubmit}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div>
                    <label>Title</label>
                    <input type="text" onChange={(e) => {setTitle(e.target.value)}} />
                </div>
                <div>
                    <label>Artist</label>
                    <input type="text" onChange={(e) => {setArtist(e.target.value)}} />
                </div>
                <div>
                    <label>Rating</label>
                    <input type="number" onChange={(e) => {setRating(e.target.value)}} />
                </div>
                <div>
                    <label>Top 100</label>
                    <input type="checkbox" onChange={(e) => {setTop100(e.target.checked)}} />
                </div>
                <div>
                    <button type='submit'>Add a Song</button> | 
                    <button className='btn btn-outline-warning'><Link to={`/`}>Cancel</Link></button>
                </div>
            </form>
        </div>
    )
}

export default Create