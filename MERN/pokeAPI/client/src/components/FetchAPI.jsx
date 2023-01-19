import React, { useState } from 'react'

const FetchAPI = () => {

    const [pokemons, setPokemons] = useState([]);

    const fetchData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then((response) => {
            // console.log(response)
            return response.json()
        })
        .then((response) => {
            console.log(response)
            setPokemons(response)
        })
        .catch((error) => {
            console.log("This is a catch error:  ", error)
        })
        console.log("I'm doing my other tasks while waiting for response")
    }

    return (
        <div>
            <h1>Pokemon API</h1>
            <button onClick={fetchData}>Fetch Pokemon</button>
            {
                pokemons.map((p, i) => {
                    return(
                        <div key={i}>
                            <h1>{p.name}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

expor