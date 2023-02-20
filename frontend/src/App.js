// import { createRoot } from "react-dom/client";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Branch from "./components/Admin/Academic/Branch";
import Student from "./components/Student";
//import Staff from "./components/Staff";
import Add from "./components/Admin/Academic/Addbranch";
import City from "./components/Studentsection/Academic/Masters/City"
import Addcity from "./components/Studentsection/Academic/Masters/Addcity"
import State from "./components/Studentsection/Academic/Masters/State";
import AddState from "./components/Studentsection/Academic/Masters/AddState";
import Scheme from "./components/Admin/Academic/Scheme";
import Addscheme from "./components/Admin/Academic/Addscheme";
import Masterscheme from "./components/Admin/Academic/Masterscheme";
import AddMasterscheme from "./components/Admin/Academic/Addmasterscheme";
import Home from "./components/Home";
import AddPaymentType from "./components/Studentsection/Academic/Masters/AddPaymentType"
import PaymentType from "./components/Studentsection/Academic/Masters/PaymentType"
import Update from "./components/Update";
import Student_info from "./components/Student/Profile/Contactdetails";
import Add_C_d from "./components/Student/Profile/Add_contact_details";
import Add_EducationDetails from "./components/Student/Profile/Add_EducationaDetails";
import Educationdetails from "./components/Student/Profile/Educationdetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/branch" element={<Branch/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/student" element={<Student/>}/>
          <Route path="/contact_details" element={<Student_info/>}/>
          <Route path="/Add_contact_details" element={<Add_C_d/>}/>
          <Route path="/Add_Education_details" element={<Add_EducationDetails/>}/>
          <Route path="/Education_details" element={<Educationdetails/>}/>
          <Route path="/addPayment" element={<AddPaymentType/>}/>
          <Route path="/payment" element={<PaymentType/>}/>
          <Route path="/city" element={<City/>}/>
          <Route path="/addcity" element={<Addcity/>}/>
          <Route path="/state" element={<State/>}/>
          <Route path="/addstate" element={<AddState/>}/>
          <Route path="/update/:id" element={<Update/>}/>

          <Route path="/scheme" element={<Scheme/>}/>
          <Route path="/addscheme" element={<Addscheme/>}/>
          <Route path="/masterscheme" element={<Masterscheme/>}/>
          <Route path="/addmasterscheme" element={<AddMasterscheme/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
