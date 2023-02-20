// import { createRoot } from "react-dom/client";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Branch from "./components/Branch";
import Student from "./components/Student";
//import Staff from "./components/Staff";
import Add from "./components/Add";
import Edit from "./components/Studentsection/Academic/Masters/Edit";
import City from "./components/Studentsection/Academic/Masters/City";
import Caste from "./components/Studentsection/Academic/Masters/Caste";
import Addcity from "./components/Studentsection/Academic/Masters/Addcity"
import State from "./components/Studentsection/Academic/Masters/State";
import AddState from "./components/Studentsection/Academic/Masters/AddState";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Branch/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/student" element={<Student/>}/>
          <Route path="/city" element={<City/>}/>
          <Route path="/addcity" element={<Addcity/>}/>
          <Route path="/state" element={<State/>}/>
          <Route path="/addstate" element={<AddState/>}/>
          <Route path="/caste" element={<Caste/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
