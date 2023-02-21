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
// import City from "./components/Studentsection/Academic/Masters/City";
// import Addcity from "./components/Studentsection/Academic/Masters/Addcity";
import State from "./components/Studentsection/Academic/Masters/State";
import AddState from "./components/Studentsection/Academic/Masters/AddState";
import Add_per_d from "./components/Student/Profile/AddPersonalDetails";
import PersonalDetails from "./components/Student/Profile/Personaldetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Branch/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/student" element={<Student/>}/>
          {/* <Route path="/city" element={<City/>}/>
          <Route path="/addcity" element={<Addcity/>}/> */}
          <Route path="/state" element={<State/>}/>
          <Route path="/addstate" element={<AddState/>}/>
          <Route path="/addpersonaldetails" element={<Add_per_d/>}/>
          <Route path="/personaldetails" element={<PersonalDetails/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
