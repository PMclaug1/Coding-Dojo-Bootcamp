import React, { useState } from 'react';

const PersonComponent = (props) => {

        let [age, setAge] = useState(props.age)

        const {firstName, lastName, hairColor} = props;

        const addOne = () => {
            setAge(age + 1)
        }

    return (
            <div>
                <div>
                    <h1>{lastName}, {firstName}</h1>
                    <p>Age: {age}</p>
                    <p>Hair Color: {hairColor}</p>
                    <button onClick={addOne}>Birthday button for {firstName} {lastName}</button>
                </div>
            </div>
    )
}

export default PersonComponent;