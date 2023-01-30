import React, {useState, useEffect} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";



const People = (props) => {
    const [people, setPeople] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + id + "/")
            .then((response) => {
                console.log(response.data)
                setPeople(response.data);
            })
            .catch(() => navigate("/error"));
    }, [id]);

    if(people == null) {
        return "Loading information"
    }
    return (
        <div>
            <h1>{people.name}</h1>
            <h2>{people.height}</h2>
            <h2>{people.mass}</h2>
            <h2>{people.eye_color}</h2>
            <h2>{people.hair_color}</h2>
            {/* <h2>{people.homeworld}</h2> */}
        </div>
    )
}

export default People;