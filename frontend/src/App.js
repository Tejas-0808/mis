// import { createRoot } from "react-dom/client";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Branch from "./components/Admin/Academic/Branch";
import Student from "./components/Student";
import NewStudent from "./components/Studentsection/Academic/Admission/Newstudent";
//import Staff from "./components/Staff";
//import Add from "./components/Add";
import City from "./components/Studentsection/Academic/Masters/City";
import Caste from "./components/Studentsection/Academic/Masters/Caste";
import UpdateCaste from "./components/Studentsection/Academic/Masters/UpdateCaste";
import AddCaste from "./components/Studentsection/Academic/Masters/AddCaste";
import Add from "./components/Admin/Academic/Addbranch";
// import City from "./components/Studentsection/Academic/Masters/City"
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
import Add_per_d from "./components/Student/Profile/AddPersonalDetails";
import PersonalDetails from "./components/Student/Profile/Personaldetails";
import Category from "./components/Studentsection/Academic/Masters/Category";
import AddCategory from "./components/Studentsection/Academic/Masters/AddCategory";
import UpdateCategory from "./components/Studentsection/Academic/Masters/UpdateCategory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Branch/>}/>
          {/* <Route path="/edit/:id" element={<Edit/>}/> */}
          <Route path="/" element={<Home/>}/>
          <Route path="/branch" element={<Branch/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/newstudent" element={<NewStudent/>}/>
          <Route path="/student" element={<Student/>}/>
          <Route path="/contact_details" element={<Student_info/>}/>
          <Route path="/Add_contact_details" element={<Add_C_d/>}/>
          <Route path="/Add_Education_details" element={<Add_EducationDetails/>}/>
          <Route path="/Education_details" element={<Educationdetails/>}/>
          <Route path="/addPayment" element={<AddPaymentType/>}/>
          <Route path="/payment" element={<PaymentType/>}/>
          {/* <Route path="/city" element={<City/>}/>
          <Route path="/addcity" element={<Addcity/>}/> */}
          <Route path="/state" element={<State/>}/>
          <Route path="/addstate" element={<AddState/>}/>
          <Route path="/caste" element={<Caste/>}/>
          <Route path="/update/:id" element={<Update/>}/>
          <Route path="/addcaste" element={<AddCaste/>}/>
          <Route path="/updatecaste/:id" element={<UpdateCaste/>}/>
          <Route path="/scheme" element={<Scheme/>}/>
          <Route path="/addscheme" element={<Addscheme/>}/>
          <Route path="/masterscheme" element={<Masterscheme/>}/>
          <Route path="/addmasterscheme" element={<AddMasterscheme/>}/>

          <Route path="/category" element={<Category/>}/>
          <Route path="/addcategory" element={<AddCategory/>}/>
          <Route path="/updatecategory/:id" element={<UpdateCategory/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
