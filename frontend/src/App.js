// import { createRoot } from "react-dom/client";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Branch from "./components/Admin/Academic/Branch";
import Addbranch from "./components/Admin/Academic/Addbranch";
import Scheme from "./components/Admin/Academic/Scheme";
import Addscheme from "./components/Admin/Academic/Addscheme";
import Masterscheme from "./components/Admin/Academic/Masterscheme";
import AddMasterscheme from "./components/Admin/Academic/Addmasterscheme";
import UpdateMasterScheme from "./components/Admin/Academic/UpdateMasterScheme";
import Update from "./components/Admin/Academic/Update";
import Structure from "./components/Admin/Academic/Structure";
import AddStructure from "./components/Admin/Academic/AddStructure";
import UpdateStructure from "./components/Admin/Academic/UpdateStructure";
import B_o_s from "./components/Admin/Academic/B_o_s";
import AddBos from "./components/Admin/Academic/AddBos";
import UpdateBos from "./components/Admin/Academic/UpdateBos";
import Session from "./components/Admin/Academic/Session";
import AddSession from "./components/Admin/Academic/AddSession";
import Createuserlogin from "./components/Admin/Users/Createuserlogin";
// import AdminDashboard from "./components/Admin/AdminDashboard";
import Imagetest from "./components/Admin/Academic/Imagetest";


import NewStudent from "./components/Studentsection/Academic/Admission/Newstudent";
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
import City from "./components/Studentsection/Academic/Masters/City";
import Addcity from "./components/Studentsection/Academic/Masters/Addcity";
import UpdateCity from "./components/Studentsection/Academic/Masters/UpdateCity";
import State from "./components/Studentsection/Academic/Masters/State";
import AddState from "./components/Studentsection/Academic/Masters/AddState";
import UpdateState from "./components/Studentsection/Academic/Masters/UpdateState";
import AddPaymentType from "./components/Studentsection/Academic/Masters/AddPaymentType";
import PaymentType from "./components/Studentsection/Academic/Masters/PaymentType";
import Branchchange from "./components/Studentsection/Academic/Utiity/Branchchange";
import Rolllist from "./components/Studentsection/Academic/Utiity/RollList";
import RollNoGeneration from "./components/Studentsection/Academic/Studentsectiontransaction/Rollnogeneration";
import IdentityCard from './components/Studentsection/Academic/Academicreports/Identitycard';
// import StudentsectionDashboard from "./components/Studentsection/StudentsectionDashboard";


// import Login from "./components/Login/Login";
// import Loginform from "./components/Login/LoginForm";
import Staff from "./components/Staff";
//import Add from "./components/Add";
import Home from "./components/Home";
import DirectoryTree from "./components/DirectoryTree";


// import AddPaymentType from "./components/Studentsection/Academic/Masters/AddPaymentType";
// import PaymentType from "./components/Studentsection/Academic/Masters/PaymentType";
// import Update from "./components/Admin/Academic/Update";
import Student from "./components/Student";
import Add_per_d from "./components/Student/Profile/AddPersonalDetails";
import Student_info from "./components/Student/Profile/Contactdetails";
import Add_C_d from "./components/Student/Profile/Add_contact_details";
import Add_EducationDetails from "./components/Student/Profile/Add_EducationaDetails";
import Educationdetails from "./components/Student/Profile/Educationdetails";
import PersonalDetails from "./components/Student/Profile/Personaldetails";
import AddPersonalDetails from "./components/Student/Profile/AddPersonalDetails";
import Profile from "./components/Student/Profile/Profile";
import Dashboard from "./components/Student/Dashboard/dashboard";
import CourseRegActivity from "./components/Student/Coursereg/Courseregactivity";
// import StudentDashboard from "./components/Student/StudentDashboard";


import CourseConfirmation from "./components/Users/Academic/courseConfirmation";
import NewUser from "./components/Users/HOD/NewUser";
import Schemeallotment from "./components/Users/Academic/Studentsectiontransaction/Schemeallotment";
import Facultyadvisor from "./components/Users/Academic/Studentsectiontransaction/Facultyadvisor";
import Promotion from "./components/Users/Academic/Studentsectiontransaction/Promotion";
// import UserDashboard from "./components/Users/UserDashboard";
import Offeredcourses from "./components/Users/Academic/Studentsectiontransaction/Offeredcourses";



import ssdashboard from "./components/Studentsection/ssdashboard/ssdashboard";
import HomeStudentSection from "./components/HomeStudentSection";

import Login from "./components/Login/Login";
import Loginform from "./components/Login/LoginForm";
import AdminDashboard from "./components/Admin/AdminDashboard";
import StudentDashboard from "./components/Student/StudentDashboard";
import StudentsectionDashboard from "./components/Studentsection/StudentsectionDashboard";
import UserDashboard from "./components/Users/UserDashboard";
import axios from "axios";
import Protected from "./components/Protected";
import AssignedLinks from "./components/AssignedLinks";

const USER_TYPES = {
  STUDENTSECTION_USER: "2",
  NORMAL_USER: "3",
  ADMIN_USER: "1",
  STUDENT_USER: "4"
}
let linkarray = [];
const role = localStorage.getItem('role');
const username = localStorage.getItem('username');
const CURRENT_USER_TYPE = role
console.log(CURRENT_USER_TYPE);
console.log(USER_TYPES.ADMIN_USER);
function App() {
  // const [linkarray,setLinkarray] =   useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
//    setToken(localStorage.getItem('token'))
    console.log(token);
    if (token) {
      try {
        (async () => {
        const res = await axios.post("http://localhost:3001/links_id", username);
        const linkarray = [...res.data];
        // setLinkarray(linkarray);
        console.log(linkarray);
  
        })();
      } catch (err) {
        console.log(err);
      }
    }else{
      <div>login Again</div>
    }
  }); 


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Branch />} /> */}
          {/* <Route path="/edit/:id" element={<Edit/>}/> */}
          <Route path="/" element={<PublicElement><Home /></PublicElement>} />
          <Route path="/HomeStudentSection" element={<HomeStudentSection/>} />

          <Route path="/branch" element={<AdminElement><Branch /></AdminElement>} />
          <Route path="/academics/master/addbranch" element={<UserElement><Addbranch /></UserElement>} />
          <Route path="/update/:id" element={<AssignedLinks><Update /></AssignedLinks>} />
          <Route path="/scheme" element={<AdminElement><Scheme /></AdminElement>} />
          <Route path="/addscheme" element={<AdminElement><Addscheme /></AdminElement>} />
          <Route path="/masterscheme" element={<AdminElement><Masterscheme /></AdminElement>} />
          <Route path="/addmasterscheme" element={<AdminElement><AddMasterscheme /></AdminElement>} />
          <Route path="/updatemasterscheme/:id" element={<AdminElement><UpdateMasterScheme /></AdminElement>} />
          <Route path="/bos" element={<AdminElement><B_o_s /></AdminElement>} />
          <Route path="/addbos" element={<AdminElement><AddBos /></AdminElement>} />
          <Route path="/updatebos/:id" element={<AdminElement><UpdateBos /></AdminElement>} />
          <Route path="/structure" element={<AdminElement><Structure /></AdminElement>} />
          <Route path="addstructure" element={<AdminElement><AddStructure /></AdminElement>} />
          <Route path="/updatestructure/:id" element={<AdminElement><UpdateStructure /></AdminElement>} />
          <Route path="addsession" element={<AdminElement><AddSession /></AdminElement>} />
          <Route path="session" element={<AdminElement><Session /></AdminElement>} />
          <Route path="/createuserlogin" element={<AdminElement><Createuserlogin /></AdminElement>} />
          <Route path="/admin" element={<AdminElement><AdminDashboard /></AdminElement>} />
          <Route path="/branch" element={<Branch />} />
          {/* this Protected at app.js level */}
          <Route path="/add" element={<Protected Component={Addbranch} pageid="1" />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/newstudent" element={<NewStudent />} />
          <Route path="/student" element={<Student />} />
          <Route path="/fill_profile" element={<Add_per_d />} />
          <Route path="/profile" element={<Profile />} />


          <Route path="/newstudent" element={<StudentSectionElement><NewStudent /></StudentSectionElement>} />
          <Route path="/addPayment" element={<StudentSectionElement><AddPaymentType /></StudentSectionElement>} />
          <Route path="/payment" element={<StudentSectionElement><PaymentType /></StudentSectionElement>} />
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
          <Route path="addsession" element={<AddSession />} />
          <Route path="session" element={<Session />} />

          <Route path="rollnogeneration" element={<RollNoGeneration />} />
          {/* <Route path="/imageshow" element={<Imagetest/>}/> */}
          <Route path="/identitycard" element={<StudentSectionElement><IdentityCard /></StudentSectionElement>} />
          <Route path="/rolllist" element={<StudentSectionElement><Rolllist /></StudentSectionElement>} />
          <Route path="/branchchange" element={<StudentSectionElement><Branchchange /></StudentSectionElement>} />
          <Route path="/studentsection" element={<StudentSectionElement><StudentsectionDashboard /></StudentSectionElement>} />


          <Route path="/student" element={<StudentElement><Student /></StudentElement>} />
          <Route path="/fill_profile" element={<StudentElement><Add_per_d /></StudentElement>} />
          <Route path="/profile" element={<StudentElement><Profile /></StudentElement>} />
          <Route path="/contact_details" element={<StudentElement><Student_info /></StudentElement>} />
          <Route path="/Add_contact_details" element={<StudentElement><Add_C_d /></StudentElement>} />
          <Route path="/Add_Educationdetails" element={<StudentElement><Add_EducationDetails /></StudentElement>} />
          <Route path="/Education_details" element={<StudentElement><Educationdetails /></StudentElement> }/>
          <Route path="/PersonalDetails" element={<StudentElement><PersonalDetails /></StudentElement>} />
          <Route path="/addPersonalDetails" element={<StudentElement><AddPersonalDetails /></StudentElement>} />
          <Route path="/dashboard" element={<StudentElement><Dashboard /></StudentElement>} />
          <Route path="/coursereg" element={<StudentElement><CourseRegActivity /></StudentElement>} />
          <Route path="/studentdashboard" element={<StudentElement><StudentDashboard /></StudentElement>} />


          <Route path="/facultyadvisor" element={<UserElement><Facultyadvisor /></UserElement>} />
          <Route path="/promotion" element={<UserElement><Promotion /></UserElement>} />
          <Route path="/schemeallotment" element={<UserElement><Schemeallotment /></UserElement>} />
          <Route path="/offeredcourses" element={<UserElement><Offeredcourses /></UserElement>} />
          <Route path="/courseconfirm" element={<UserElement><CourseConfirmation /></UserElement>} />
          <Route path="/newuser" element={<UserElement><NewUser/></UserElement>} />
          <Route path="/user" element={<UserElement><UserDashboard/></UserElement>} />

          <Route path="/login" element={<Login />} />
          <Route path="/loginform" element={<Loginform />} />
          <Route path="/directorytree" element={<DirectoryTree/>} />

          <Route path="*" element={<div>Page not found</div>} />
          <Route path="/ssdashboard" element={<ssdashboard/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

function PublicElement({ children }) {
  return <>{children}</>
}

function AdminElement({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) {
    return <>{children}</>;
  } else {
    // return <Navigate to={"/"} />
    return <div>You dont have access to this page!</div>
  }
}

function StudentSectionElement({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPES.STUDENTSECTION_USER) {
    return <>{children}</>;
  } else {
    // return <Navigate to={"/"} />
    return <div>You dont have access to this page!</div>
  }
}

function UserElement({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER ||
    CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/"} />
    // return <div>You dont have access to this page!</div>
  }
}

function StudentElement({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPES.STUDENT_USER) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/"} />
    // return <div>You dont have access to this page!</div>
  }
}

export default App;
