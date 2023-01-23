import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const [formState, setFormState] = useState({
        option: "people",
        id: ""
    });

    function onChangeHandler(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate("/" + formState.option + "/" + formState.id)

    }

    return (
        <form onSubmit={onSubmitHandler}>
            <label>Search For:</label>
            <select name="option" 
            value={formState.option} onChange={onChangeHandler}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <label>ID:</label>
            <input name="id" value={formState.id} onChange={onChangeHandler}/>
            <button>Search</button>
        </form>
    )
}

export default SearchBar