// import { createRoot } from "react-dom/client";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Branch from "./components/Branch";
import Student from "./components/Student";
import NewStudent from "./components/Studentsection/Academic/Admission/Newstudent";
//import Staff from "./components/Staff";
import Add from "./components/Add";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Branch/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/newstudent" element={<NewStudent/>}/>
          <Route path="/student" element={<Student/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
