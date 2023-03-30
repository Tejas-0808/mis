// import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Branch from "./components/Admin/Academic/Branch";
import Student from "./components/Student";
import NewStudent from "./components/Studentsection/Academic/Admission/Newstudent";
import NewUser from "./components/Users/HOD/NewUser";
import Add_per_d from "./components/Student/Profile/AddPersonalDetails";
import Staff from "./components/Staff";
//import Add from "./components/Add";
import Category from "./components/Studentsection/Academic/Masters/Category";
import AddCategory from "./components/Studentsection/Academic/Masters/AddCategory";
import UpdateCategory from "./components/Studentsection/Academic/Masters/UpdateCategory";
import Religion from "./components/Studentsection/Academic/Masters/Religion";
import AddReligion from "./components/Studentsection/Academic/Masters/AddReligion";
import UpdateReligion from "./components/Studentsection/Academic/Masters/UpdateReligion";
import District from "./components/Studentsection/Academic/Masters/District";
import AddDistrict from "./components/Studentsection/Academic/Masters/AddDistrict";
import UpdateDistrict from "./components/Studentsection/Academic/Masters/UpdateDistrict";
import Caste from "./components/Studentsection/Academic/Masters/Caste";
import UpdateCaste from "./components/Studentsection/Academic/Masters/UpdateCaste";
import AddCaste from "./components/Studentsection/Academic/Masters/AddCaste";
import Add from "./components/Admin/Academic/Addbranch";
import City from "./components/Studentsection/Academic/Masters/City";
import Addcity from "./components/Studentsection/Academic/Masters/Addcity";
import UpdateCity from "./components/Studentsection/Academic/Masters/UpdateCity";
import State from "./components/Studentsection/Academic/Masters/State";
import AddState from "./components/Studentsection/Academic/Masters/AddState";
import UpdateState from "./components/Studentsection/Academic/Masters/UpdateState";
import Scheme from "./components/Admin/Academic/Scheme";
import Addscheme from "./components/Admin/Academic/Addscheme";
import Masterscheme from "./components/Admin/Academic/Masterscheme";
import AddMasterscheme from "./components/Admin/Academic/Addmasterscheme";
import UpdateMasterScheme from "./components/Admin/Academic/UpdateMasterScheme";
import Home from "./components/Home";
import AddPaymentType from "./components/Studentsection/Academic/Masters/AddPaymentType";
import PaymentType from "./components/Studentsection/Academic/Masters/PaymentType";
import Update from "./components/Admin/Academic/Update";
// import AddPaymentType from "./components/Studentsection/Academic/Masters/AddPaymentType";
// import PaymentType from "./components/Studentsection/Academic/Masters/PaymentType";
// import Update from "./components/Admin/Academic/Update";
import Student_info from "./components/Student/Profile/Contactdetails";
import Add_C_d from "./components/Student/Profile/Add_contact_details";
import Add_EducationDetails from "./components/Student/Profile/Add_EducationaDetails";
import Educationdetails from "./components/Student/Profile/Educationdetails";
import PersonalDetails from "./components/Student/Profile/Personaldetails";
import AddPersonalDetails from "./components/Student/Profile/AddPersonalDetails";
import Branchchange from "./components/Studentsection/Academic/Utiity/Branchchange";
import Rolllist from "./components/Studentsection/Academic/Utiity/RollList";
import CourseConfirmation from "./components/Users/Academic/courseConfirmation"
import Profile from "./components/Student/Profile/Profile";

import RollNoGeneration from "./components/Studentsection/Academic/Studentsectiontransaction/Rollnogeneration";
import Structure from "./components/Admin/Academic/Structure";
import AddStructure from "./components/Admin/Academic/AddStructure";
import UpdateStructure from "./components/Admin/Academic/UpdateStructure";
import B_o_s from "./components/Admin/Academic/B_o_s";
import AddBos from "./components/Admin/Academic/AddBos";
import UpdateBos from "./components/Admin/Academic/UpdateBos";
import Session from "./components/Admin/Academic/Session";
import AddSession from "./components/Admin/Academic/AddSession";

import Imagetest from "./components/Admin/Academic/Imagetest";
import IdentityCard from './components/Studentsection/Academic/Academicreports/Identitycard'
import Schemeallotment from "./components/Users/Academic/Studentsectiontransaction/Schemeallotment";
import Facultyadvisor from "./components/Users/Academic/Studentsectiontransaction/Facultyadvisor";
import Promotion from "./components/Users/Academic/Studentsectiontransaction/Promotion";

import Offeredcourses from "./components/Users/Academic/Studentsectiontransaction/Offeredcourses";
import Dashboard from "./components/Student/Dashboard/dashboard";
import CourseRegActivity from "./components/Student/Coursereg/Courseregactivity";
import UpdateMasterscheme from "./components/Admin/Academic/UpdateMasterScheme";

import Createuserlogin from "./components/Admin/Users/Createuserlogin";

import Login from "./components/Login/Login";
import Loginform from "./components/Login/LoginForm";
import AdminDashboard from "./components/Admin/AdminDashboard";
import StudentDashboard from "./components/Student/StudentDashboard";
import StudentsectionDashboard from "./components/Studentsection/StudentsectionDashboard";
import UserDashboard from "./components/Users/UserDashboard";

const USER_TYPES = {
  STUDENTSECTION_USER : "3",
  NORMAL_USER : "2",
  ADMIN_USER : "1",
  STUDENT_USER: "5"
}
const role = localStorage.getItem('role');
const CURRENT_USER_TYPE = role
console.log(CURRENT_USER_TYPE);
console.log(USER_TYPES.ADMIN_USER);
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Branch />} /> */}
          {/* <Route path="/edit/:id" element={<Edit/>}/> */}
          <Route path="/" element={<PublicElement><Home /></PublicElement>} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/add" element={<Add />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/newstudent" element={<NewStudent />} />
          <Route path="/student" element={<Student />} />
          <Route path="/fill_profile" element={<Add_per_d />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/contact_details" element={<Student_info />} />
          <Route path="/Add_contact_details" element={<Add_C_d />} />
          <Route path="/Add_Educationdetails" element={<Add_EducationDetails />} />
          <Route path="/Education_details" element={<Educationdetails />} />
          <Route path="/PersonalDetails" element={<PersonalDetails />} />
          <Route path="/addPersonalDetails" element={<AddPersonalDetails />} />

          <Route path="/addPayment" element={<AddPaymentType />} />
          <Route path="/payment" element={<PaymentType />} />
          {/* <Route path="/city" element={<City/>}/>
          <Route path="/addcity" element={<Addcity/>}/> */}
          <Route path="/state" element={<State />} />
          <Route path="/addstate" element={<AddState />} />
          <Route path="/updatestate/:id" element={<UpdateState />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/scheme" element={<Scheme />} />
          <Route path="/addscheme" element={<Addscheme />} />
          <Route path="/masterscheme" element={<Masterscheme />} />
          <Route path="/addmasterscheme" element={<AddMasterscheme />} />
          <Route path="/updatemasterscheme/:id" element={<UpdateMasterScheme />} />

          <Route path="/category" element={<Category />} />
          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="/updatecategory/:id" element={<UpdateCategory />} />

          <Route path="/city" element={<City />} />
          <Route path="/addcity" element={<Addcity />} />

          <Route path="/religion" element={<Religion />} />
          <Route path="/addreligion" element={<AddReligion />} />
          <Route path="/updatereligion/:id" element={<UpdateReligion />} />

          <Route path="/district" element={<District />} />
          <Route path="/adddistrict" element={<AddDistrict />} />
          <Route path="/updatedistrict/:id" element={<UpdateDistrict />} />

          <Route path="/city" element={<City />} />
          <Route path="/updatecity/:id" element={<UpdateCity />} />
          <Route path="/addcity" element={<Addcity />} />

          <Route path="/caste" element={<Caste />} />
          <Route path="/addcaste" element={<AddCaste />} />
          <Route path="/updatecaste/:id" element={<UpdateCaste />} />


          <Route path="/district" element={<District />} />
          <Route path="/adddistrict" element={<AddDistrict />} />
          <Route path="/updatedistrict/:id" element={<UpdateDistrict />} />
          <Route path="/bos" element={<B_o_s />} />
          <Route path="/addbos" element={<AddBos />} />
          <Route path="/updatebos/:id" element={<UpdateBos />} />

          <Route path="/structure" element={<Structure />} />
          <Route path="addstructure" element={<AddStructure />} />
          <Route path="/updatestructure/:id" element={<UpdateStructure />} />
          <Route path="/rollnogeneration" element={<RollNoGeneration />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="addstructure" element={<AddStructure />} />
          <Route path="/updatestructure/:id" element={<UpdateStructure />} />
          <Route path="addsession" element={<AddSession />} />
          <Route path="session" element={<Session />} />

          <Route path="rollnogeneration" element={<RollNoGeneration />} />
          {/* <Route path="/imageshow" element={<Imagetest/>}/> */}
          <Route path="/identitycard" element={<IdentityCard />} />
          <Route path="/schemeallotment" element={<Schemeallotment />} />
          <Route path="/rolllist" element={<Rolllist />} />
          <Route path="/facultyadvisor" element={<Facultyadvisor />} />
          <Route path="/promotion" element={<Promotion />} />

          <Route path="/branchchange" element={<Branchchange />} />
          <Route path="/offeredcourses" element={<Offeredcourses />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/coursereg" element={<CourseRegActivity />} />
          <Route path="/updatemasterscheme/:id" element={<UpdateMasterscheme />} />

          <Route path="/createuserlogin" element={<Createuserlogin />} />

          <Route path="/courseconfirm" element={<CourseConfirmation />} />

          <Route path="/login" element={<AdminElement><Login /></AdminElement>} />
          <Route path="/loginform" element={<Loginform />} />
          <Route path="/admin" element={<AdminElement><AdminDashboard /></AdminElement>} />
          <Route path="/studentdashboard" element={<StudentDashboard />} />
          <Route path="/studentsection" element={<StudentsectionDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="*" element={<div>Page not found</div>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

function PublicElement({ children }) {
  return <>{children}</>
}

function AdminElement({ children }) {
  if(CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER){
    return <>{children}</>;
  }else{
    // return <Navigate to={"/"} />
    return <div>You dont have access to this page!</div>
  }
}

function StudentSectionElement({ children }) {
  if(CURRENT_USER_TYPE === USER_TYPES.STUDENTSECTION_USER){
    return <>{children}</>;
  }else{
    // return <Navigate to={"/"} />
    return <div>You dont have access to this page!</div>
  }
}

function UserElement({ children }) {
  if(CURRENT_USER_TYPE=== USER_TYPES.ADMIN_USER ||
    CURRENT_USER_TYPE=== USER_TYPES.NORMAL_USER){
    return <>{children}</>;
  }else{
    return <Navigate to={"/"} />
    // return <div>You dont have access to this page!</div>
  }
}

function StudentElement({ children }) {
  if(CURRENT_USER_TYPE=== USER_TYPES.STUDENT_USER){
    return <>{children}</>;
  }else{
    return <Navigate to={"/"} />
    // return <div>You dont have access to this page!</div>
  }
}

export default App;
