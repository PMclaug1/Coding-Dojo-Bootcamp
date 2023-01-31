import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Display = () => {
    const [songList, setSongList] = useState([])

    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/songs')
        .then((res) => {
            console.log('display page data', res.data)
            setSongList(res.data)
        })
        .catch((err) => {console.log('Display page error: ', err)})
    }, [deleteToggle])

    const handleDelete = (e, id) => {
        console.log(`Deleting ${id}`, e)
        axios.delete(`http://localhost:8000/api/song/${id}`)
        .then((res) => {
            setDeleteToggle(!deleteToggle)
        })
        .catch((err) => console.log(err))
    }

    return (
        <div>
            <h1>SongBird</h1>
            <button className='btn btn-outline-success'><Link to={'/create'}>Add a Song</Link></button>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Rating</th>
                        <th>Top 100</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        songList.map((song, idx) => {
                            return(
                                <tr key={idx}>
                                    <td>{song.title}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.rating}</td>
                                    <td>{song.top100 ? "Yes" : "No"}</td>
                                    <td><button className='btn btn-info'><Link to={`/details/${song._id}`}>View</Link></button> | 
                                    <button className='btn btn-success'><Link to={`/update/${song._id}`}>Edit</Link></button> | 
                                    <button className='btn btn-danger' onClick={(e) => {handleDelete(e, song._id)}}>Delete</button></td>
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