import React from 'react'
import { useParams } from "react-router";


const Teams = () => {

    const { whatever, anotherwhatevs } = useParams();

    return (
        <div>
            <h1>Teams</h1>
            <h2 style={{backgroundColor: anotherwhatevs}}>Welcome to {whatever} </h2>
        </div>
    )
}

export default Teams
