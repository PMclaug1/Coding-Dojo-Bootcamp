import React, {useState, useEffect} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const Planets = (props) => {
    const [planets, setPlanets] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/" + id + "/")
            .then((response) => {
                console.log(response.data)
                setPlanets(response.data);
            })
            .catch(() => navigate("/error"));
    }, [id]);

    if(planets == null) {
        return "Loading information"
    }
    return (
        <div>
            <h1>{planets.name}</h1>
            <h2>{planets.climate}</h2>
            <h2>{planets.terrain}</h2>
            <h2>{planets.surface_water}</h2>
            <h2>{planets.population}</h2>
            <h2>{planets.gravity}</h2>
        </div>
    )
}

export default Planets;