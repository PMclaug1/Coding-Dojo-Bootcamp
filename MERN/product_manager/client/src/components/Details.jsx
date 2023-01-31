import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router'

const Details = () => {
    const [song, setSong] = useState("")
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/songs/${id}`)
        .then((res) => setSong(res.data))
        .catch(err => console.log('This is our details page: ' + err))
    }, [id])

    return (
        <div>
            <h1>Song Details</h1>
            <p>Title: {song.title}</p>
            <p>Artist: {song.artist}</p>
            <p>Rating: {song.rating}</p>
            <p>Top 100: {song.top100 ? "Yes" : "No"}</p>
            <p><button className='btn btn-outline-primary'><Link to={'/'}>Home</Link></button></p>

        </div>
    )
}

export default Details