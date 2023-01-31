import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const Update = () => {
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [rating, setRating] = useState(5)
    const [top100, setTop100] = useState(false)

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/songs/${id}`)
        .then((res) => {
            console.log("Update get req", res.data)
            const song = res.data
            setTitle(song.title)
            setArtist(song.artist)
            setRating(song.rating)
            setTop100(song.top100)
        })
        .catch((err) => console.log("Update page error -", err))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/song/${id}`, {title, artist, rating, top100})
        .then((res) => {
            navigate("/")
        })
        .catch(err => console.log("This is put req -", err))
    }

    return (
        <div>
            <h1>Update a Song</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div>
                    <label>Artist</label>
                    <input type="text" value={artist} onChange={(e) => { setArtist(e.target.value) }} />
                </div>
                <div>
                    <label>Rating</label>
                    <input type="number" value={rating} onChange={(e) => { setRating(e.target.value) }} />
                </div>
                <div>
                    <label>Top 100</label>
                    <input type="checkbox" checked={top100} onChange={(e) => { setTop100(e.target.checked) }} />
                </div>
                <div>
                    <button type='submit'>Update Song</button> |
                    <button className='btn btn-outline-warning'><Link to={`/`}>Cancel</Link></button>
                </div>
            </form>

        </div>
    )
}

export default Update