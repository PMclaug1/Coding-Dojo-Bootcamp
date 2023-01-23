import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// components
import People from "./components/People";
import Planets from "./components/Planets";
import Error from "./components/Error";
// views
import SearchBar from "./views/NavBar";

function App() {
  return (
      <div className="App">
        <SearchBar></SearchBar>
        <Routes>
          <Route path="/people/:id" element={<People/>} />
          <Route path="/planets/:id" element={<Planets/>} />
          <Route path="/error" element={<Error/>} />
        </Routes>
      </div>

  );
}

export default App;