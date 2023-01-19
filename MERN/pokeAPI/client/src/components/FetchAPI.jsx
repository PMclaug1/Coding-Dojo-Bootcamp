import React, { useState } from 'react';
import axios from 'axios';

const AxiosPokemon = () => {
    
    const [pokemons, setPokemons] = useState([]);

    const fetchData = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=870&offset=0")
        .then((response) => {
            console.log("This is the .then function: ", response)
            setPokemons(response.data.results);
        })
        .catch((error) => {
            console.log("This is a catch : ", error);
        })
        console.log("Running before our promise")
    }
    
    return(
        <div>
            <h1>Pokemon API</h1>
            <button onClick={fetchData}>Fetch Pokemon</button>
            {
                pokemons.map((pokemon, index) => {
                    return (
                        <div key={index}>
                            <h1>{pokemon.name}</h1>
                        </div>
                    );
                })
            }
        </div>
    )
}


export default AxiosPokemon