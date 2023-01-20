import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Form from './components/Form';
import Results from "./components/Results"
import React, { useState } from "react";

function App() {

  const [formData, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="App">
      <Form inputs={formData} setInputs={setForm}></Form>
      <Results data={formData}></Results>
    </div>
  );
}

export default App;
