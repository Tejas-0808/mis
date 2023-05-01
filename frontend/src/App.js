import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navbar/navbar";
import Studentlayout from "./layouts/Studentlayout";
import StudentSectionlayout from "./layouts/StudentSectionlayout";
import Userslayout from "./layouts/Userslayout";
import axios from "axios";
import Login from "./components/Login/Login";
import Loginform from "./components/Login/LoginForm";
import Home from "./components/Home";
import DirectoryTree from "./components/DirectoryTree";
// import Branch from "./components/Admin/Academic/Branch";
// import Addbranch from "./components/Admin/Academic/Addbranch";
// import Scheme from "./components/Admin/Academic/Scheme";
// import Addscheme from "./components/Admin/Academic/Addscheme";
// import Masterscheme from "./components/Admin/Academic/Masterscheme";
// import AddMasterscheme from "./components/Admin/Academic/Addmasterscheme";
// import UpdateMasterScheme from "./components/Admin/Academic/UpdateMasterScheme";
// import Update from "./components/Admin/Academic/Update";
// import Structure from "./components/Admin/Academic/Structure";
// import AddStructure from "./components/Admin/Academic/AddStructure";
// import UpdateStructure from "./components/Admin/Academic/UpdateStructure";
// import B_o_s from "./components/Admin/Academic/B_o_s";
// import AddBos from "./components/Admin/Academic/AddBos";
// import UpdateBos from "./components/Admin/Academic/UpdateBos";
// import Session from "./components/Admin/Academic/Session";
// import AddSession from "./components/Admin/Academic/AddSession";
// import Createuserlogin from "./components/Admin/Users/Createuserlogin";
// import AdminDashboard from "./components/Admin/AdminDashboard";
// import Imagetest from "./components/Admin/Academic/Imagetest";
// import NewStudent from "./components/Studentsection/Academic/Admission/Newstudent";
// import Category from "./components/Studentsection/Academic/Masters/Category";
// import AddCategory from "./components/Studentsection/Academic/Masters/AddCategory";
// import UpdateCategory from "./components/Studentsection/Academic/Masters/UpdateCategory";
// import Religion from "./components/Studentsection/Academic/Masters/Religion";
// import AddReligion from "./components/Studentsection/Academic/Masters/AddReligion";
// import UpdateReligion from "./components/Studentsection/Academic/Masters/UpdateReligion";
// import District from "./components/Studentsection/Academic/Masters/District";
// import AddDistrict from "./components/Studentsection/Academic/Masters/AddDistrict";
// import UpdateDistrict from "./components/Studentsection/Academic/Masters/UpdateDistrict";
// import Caste from "./components/Studentsection/Academic/Masters/Caste";
// import UpdateCaste from "./components/Studentsection/Academic/Masters/UpdateCaste";
// import AddCaste from "./components/Studentsection/Academic/Masters/AddCaste";
// import City from "./components/Studentsection/Academic/Masters/City";
// import Addcity from "./components/Studentsection/Academic/Masters/Addcity";
// import UpdateCity from "./components/Studentsection/Academic/Masters/UpdateCity";
// import State from "./components/Studentsection/Academic/Masters/State";
// import AddState from "./components/Studentsection/Academic/Masters/AddState";
// import UpdateState from "./components/Studentsection/Academic/Masters/UpdateState";
// import AddPaymentType from "./components/Studentsection/Academic/Masters/AddPaymentType";
// import PaymentType from "./components/Studentsection/Academic/Masters/PaymentType";
// import Branchchange from "./components/Studentsection/Academic/Utiity/Branchchange";
// import Rolllist from "./components/Studentsection/Academic/Utiity/RollList";
// import RollNoGeneration from "./components/Studentsection/Academic/Studentsectiontransaction/Rollnogeneration";
// import IdentityCard from './components/Studentsection/Academic/Academicreports/Identitycard';
// import AddPaymentType from "./components/Studentsection/Academic/Masters/AddPaymentType";
// import PaymentType from "./components/Studentsection/Academic/Masters/PaymentType";
// import Update from "./components/Admin/Academic/Update";
import Student from "./components/Student";
import Profile from "./components/Student/Profile/Profile";
import CourseConfirmation from "./components/Users/Academic/courseConfirmation";
import NewUser from "./components/Users/HOD/NewUser";
import Schemeallotment from "./components/Users/Academic/Studentsectiontransaction/Schemeallotment";
import Facultyadvisor from "./components/Users/Academic/Studentsectiontransaction/Facultyadvisor";
import Promotion from "./components/Users/Academic/Studentsectiontransaction/Promotion";
import UserDashboard from "./components/Users/UserDashboard";
import Offeredcourses from "./components/Users/Academic/Studentsectiontransaction/Offeredcourses";
import FinalCoursesOffered from "./components/Student/Coursereg/FinalCoursesOffered";


import ssdashboard from "./components/Studentsection/ssdashboard/ssdashboard";
// import HomeStudentSection from "./components/HomeStudentSection";
// import SideBar from "./components/Sidebar/sidebar";
// import Batchallotment from "./components/Users/Academic/Studentsectiontransaction/Batchallotment";
// import Courseallotment from "./components/Users/Academic/Studentsectiontransaction/Courseallotment";

const USER_TYPES = {
  ADMIN_USER: "1",
  STUDENTSECTION_USER: "2",
  NORMAL_USER: "3",
  STUDENT_USER: "4"
}

let linkarray = [];
const role = localStorage.getItem('role');
const username = localStorage.getItem('username');
const CURRENT_USER_TYPE = role
console.log(CURRENT_USER_TYPE);
// console.log(USER_TYPES.ADMIN_USER);

function App() {
  // const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      const token = localStorage.getItem('token');
      //setToken(localStorage.getItem('token'))
      //console.log(token);
      if (token) {
        axios.get('http://localhost:3001/me', {
          headers: { Authorization: token }
        }).then((response) => {
          // setUsername(response.data.username);
        }).catch((err) => {
          localStorage.clear();
          <Navigate to={"/loginform"} />
          console.error(err);
        });
      } else {
        <Navigate to={"/loginform"} />
      }
      console.log('This will run every one hour!');
    }, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <div className="d-flex">
          {/* <AdminElement AdminElement={AdminElement} /> */}
          {/* <Studentlayout StudentElement={StudentElement} /> */}
          <StudentSectionlayout StudentSectionElement={StudentSectionElement} />
          {/* <Userslayout UserElement={UserElement} /> */}
          <Routes>
            <Route path="/" element={<PublicElement><Home /></PublicElement>} />
            <Route path="/login" element={<Login />} />
            <Route path="/loginform" element={<Loginform />} />
            <Route path="/directorytree" element={<DirectoryTree />} />
            {/* <Route path="*" element={<div>Page not found</div>} /> */}
            {/* <Route path="/branch" element={<AdminElement><Branch /></AdminElement>} />
            <Route path="/addbranch" element={<AdminElement><Addbranch /></AdminElement>} />
            <Route path="/update/:id" element={<AdminElement><Update /></AdminElement>} />
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
            <Route path="/addsession" element={<AdminElement><AddSession /></AdminElement>} />
            <Route path="/session" element={<AdminElement><Session /></AdminElement>} />
            <Route path="/createuserlogin" element={<AdminElement><Createuserlogin /></AdminElement>} />
            <Route path="/admin" element={<AdminElement><AdminDashboard /></AdminElement>} />
            <Route path="/branch" element={<Branch />} /> */}
            {/* this Protected at app.js level */}
            {/* <Route path="/add" element={<Protected Component={Add} pageid="1" />} /> */}
            {/* <Route path="/newuser" element={<NewUser />} /> */}
            {/* <Route path="/newstudent" element={<NewStudent />} /> */}
            {/* student<Route path="/student" element={<Student />} /> */}
            {/* <Route path="/newstudent" element={<NewStudent />} /> */}
            {/* <Route path="/addPayment" element={<StudentSectionElement><AddPaymentType /></StudentSectionElement>} />
            <Route path="/payment" element={<StudentSectionElement><PaymentType /></StudentSectionElement>} /> */}
            {/* <Route path="/city" element={<City/>}/>
          <Route path="/addcity" element={<Addcity/>}/> */}
            {/* <Route path="/state" element={<State />} />
            <Route path="/addstate" element={<AddState />} />
            <Route path="/updatestate/:id" element={<UpdateState />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/scheme" element={<Scheme />} />
            <Route path="/addscheme" element={<Addscheme />} />
            <Route path="/masterscheme" element={<Masterscheme />} />
            <Route path="/addmasterscheme" element={<AddMasterscheme />} />
            <Route path="/updatemasterscheme/:id" element={<UpdateMasterScheme />} /> */}
            {/* <Route path="/category" element={<Category />} />
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
            <Route path="/updatedistrict/:id" element={<UpdateDistrict />} /> */}
            {/* <Route path="rollnogeneration" element={<RollNoGeneration />} /> */}
            {/* <Route path="/imageshow" element={<Imagetest/>}/> */}
            {/* <Route path="/identitycard" element={<IdentityCard />} />
            <Route path="/rolllist" element={<Rolllist />} />
            <Route path="/branchchange" element={<Branchchange />} /> */}
            {/* <Route path="/student" element={<StudentElement><Student /></StudentElement>} /> */}
            {/* <Route path="/fill_profile" element={<Add_per_d />} />
          <Route path="/profile" element={<StudentElement><Profile /></StudentElement>} />
          <Route path="/contact_details" element={<StudentElement><Student_info /></StudentElement>} />
          <Route path="/Add_contact_details" element={<StudentElement><Add_C_d /></StudentElement>} />
          <Route path="/Add_Educationdetails" element={<Add_EducationDetails />} />
          <Route path="/Education_details" element={<StudentElement><Educationdetails /></StudentElement>} />
          <Route path="/PersonalDetails" element={<StudentElement><PersonalDetails /></StudentElement>} />
          <Route path="/addPersonalDetails" element={<StudentElement><AddPersonalDetails /></StudentElement>} />
          <Route path="/dashboard" element={<StudentElement><Dashboard /></StudentElement>} />
          <Route path="/coursereg" element={<StudentElement><CourseRegActivity /></StudentElement>} />
          <Route path="/studentdashboard" element={<StudentElement><StudentDashboard /></StudentElement>} /> */}
            <Route path="/facultyadvisor" element={<UserElement><Facultyadvisor /></UserElement>} />
            <Route path="/promotion" element={<UserElement><Promotion /></UserElement>} />
            <Route path="/schemeallotment" element={<UserElement><Schemeallotment /></UserElement>} />
            <Route path="/offeredcourses" element={<UserElement><Offeredcourses /></UserElement>} />
            <Route path="/courseconfirm" element={<UserElement><CourseConfirmation /></UserElement>} />
            <Route path="/newuser" element={<UserElement><NewUser /></UserElement>} />
            <Route path="/user" element={<UserElement><UserDashboard /></UserElement>} />
            <Route path="/batchallotment" element={<UserElement><Batchallotment /></UserElement>} />
            <Route path="/login" element={<Login />} />
            <Route path="/loginform" element={<Loginform />} />
            <Route path="/directorytree" element={<DirectoryTree />} />
            <Route path="*" element={<div>Page not found</div>} />
            <Route path="/ssdashboard" element={<ssdashboard />} />
            <Route path="/finalcoursesoffered" element={<FinalCoursesOffered />}></Route>
            <Route path="/ssdashboard" element={<ssdashboard />} />
            <Route path="/courseallotment" element={<Courseallotment />}></Route>
          </Routes>
        </div>

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
    return <Navigate to={"/loginform"} />
  }
}

function StudentSectionElement({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPES.STUDENTSECTION_USER) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/loginform"} />
  }
}

function UserElement({ children }) {
  if (username) {
    if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER ||
      CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER) {
      return <>{children}</>;
    } else {
      return <Navigate to={"/loginform"} />
    }
  } else {
    return <Navigate to={"/loginform"} />
  }
}

function StudentElement({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER || CURRENT_USER_TYPE === USER_TYPES.STUDENT_USER) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/loginform"} />
  }
}

export default App;