import React, {useState} from 'react'

const Form = () => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [age, setAge] = useState("")
    const [img, setImg] = useState("")

    let [listOfPets, setListOfPets] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        //New inbound data
        let petObj = {name, type, age, img}
        setListOfPets([...listOfPets, petObj]);
    }

    const deletePet = (e, idx) => {

        let copy = listOfPets.filter((p, i) => {
            return i !== idx;
        })
        setListOfPets(copy)
    }

    return (
        <div>
        <h1>Pet Form</h1>
        <form onSubmit={submitHandler}> 
            <div className='form-group'>
                <label>Pet Name:</label>
                <input onChange={(e) => setName(e.target.value) } type="text" className='form-control'/>
                {
                    name.length < 3 && name.length > 0 ? <p className='text-danger'>Name must be 3 characters long</p> : ""
                }
            </div>

            <div className='form-group'>
                <label>Pet Type:</label>
                <input onChange={(e) => setType(e.target.value) } type="text" className='form-control'/>
            </div>
            <div className='form-group'>
                <label>Pet Age:</label>
                <input onChange={(e) => setAge(e.target.value) } type="text" className='form-control'/>
            </div>
            <div className='form-group'>
                <label>Pet Image:</label>
                <input onChange={(e) => setImg(e.target.value) } type="text" className='form-control'/>
            </div>
            <br />
            <button type="submit" className='btn btn-outline-warning'>Add Me</button>
        </form>
            {
                listOfPets.map((p, i) => { 
                    return(
                        <div key={i}>
                        <h2>This is the index value: {i}</h2>
                        <h3>{p.name}</h3>
                        <h3>{p.type}</h3>
                        <h3>{p.age}</h3>
                        <img src={p.img} alt="My Pet" height="150px"/>
                        <br />
                        <button onClick={(e) => deletePet(e, i)} className="btn btn-danger">Delete Me</button>
                        </div>
                    ) })
            }
        </div>
    )
}

export default Form