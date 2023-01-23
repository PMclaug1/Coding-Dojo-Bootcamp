
import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
    
const Contact = () => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const navigate = useNavigate();
        
    const sendSurvey = (e) => {
        e.preventDefault();
        // When the user clicks the submit input in the form, 
        //we will navigate to the "/results" path
        navigate(-1);
    }
        
    return (
        <form onSubmit={ sendSurvey }>
            <label>Your Name:</label>
            <input type="text" onChange={ (e) => setName(e.target.value) } value={ name } />
            <br />
            <label>Your Comment:</label>
            <textarea onChange={ (e) => setComment(e.target.value) } value={ comment }></textarea>
            <input className="btn btn-primary" type="submit" value="Submit Survey" />
        </form>
    );
}

export default Contact;