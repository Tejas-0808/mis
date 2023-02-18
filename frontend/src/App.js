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
import AddPaymentType from "./components/Studentsection/Academic/Masters/AddPaymentType"
import PaymentType from "./components/Studentsection/Academic/Masters/PaymentType"
import City from "./components/Studentsection/Academic/Masters/City"
import Addcity from "./components/Studentsection/Academic/Masters/Addcity"
import State from "./components/Studentsection/Academic/Masters/State";
import AddState from "./components/Studentsection/Academic/Masters/AddState";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Branch/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/student" element={<Student/>}/>
          <Route path="/addPayment" element={<AddPaymentType/>}/>
          <Route path="/payment" element={<PaymentType/>}/>
          <Route path="/city" element={<City/>}/>
          <Route path="/addcity" element={<Addcity/>}/>
          <Route path="/state" element={<State/>}/>
          <Route path="/addstate" element={<AddState/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
