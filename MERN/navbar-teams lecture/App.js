import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs"
import Teams from "./components/Teams";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>Welcome to our Website!</h1>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/teams" element={<Teams/>} />


          <Route path="/teams/:whatever" element={<Teams/>} />
          <Route path="/teams/:whatever/:anotherwhatevs" element={<Teams/>} />

        </Routes>
      </div>

  );
}

export default App;