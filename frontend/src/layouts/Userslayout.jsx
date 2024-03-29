import { Routes, Route } from "react-router-dom";
import SideBar from "../components/Users/sidebar";
import Schemeallotment from "../components/Users/Academic/Studentsectiontransaction/Schemeallotment";
import Facultyadvisor from "../components/Users/Academic/Studentsectiontransaction/Facultyadvisor";
import Promotion from "../components/Users/Academic/Studentsectiontransaction/Promotion";
import UserDashboard from "../components/Users/UserDashboard";
import Offeredcourses from "../components/Users/Academic/Studentsectiontransaction/Offeredcourses";
import FinalCoursesOffered from "../components/Student/Coursereg/FinalCoursesOffered";
import NewUser from "../components/Users/HOD/NewUser";
import Batchallotment from "../components/Users/Academic/Studentsectiontransaction/Batchallotment";
import Courseallotment from "../components/Users/Academic/Studentsectiontransaction/Courseallotment";
import CourseConfirmation from "../components/Users/Academic/courseConfirmation";
import Ssdashboard from "../components/Studentsection/ssdashboard/ssdashboard";
import Navigation from "../components/Navbar/navbar";
import Login from "../components/Login/Login";
import Facultyadvisorconfirm from "../components/Users/Academic/Studentsectiontransaction/Facultyadvisorconfirm";
import EditCourses from "../components/Users/Academic/Studentsectiontransaction/Editcourses";

function Userslayout({ UserElement }) {
    console.log(UserElement);
    // const StudentElement = children.StudentElemnt;
    return (
        <>
            <div className="d-flex flex-column">
                <Navigation />
                <div className="d-flex">
                    <SideBar />
                    <Routes>
                        <Route path="/" element={<Ssdashboard />} />
                        <Route path="/facultyadvisor" element={<Facultyadvisor />} />
                        <Route path="/promotion" element={<Promotion />} />
                        <Route path="/schemeallotment" element={<Schemeallotment />} />
                        <Route path="/offeredcourses" element={<Offeredcourses />} />
                        <Route path="/courseconfirm" element={<CourseConfirmation />} />
                        <Route path="/newuser" element={<NewUser />} />
                        <Route path="/user" element={<UserDashboard />} />
                        <Route path="/batchallotment" element={<Batchallotment />} />
                        <Route path="/finalcoursesoffered" element={<FinalCoursesOffered />}></Route>
                        <Route path="/courseallotment" element={<Courseallotment />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="facultyconfirm" element={<Facultyadvisorconfirm />}></Route>
                        <Route path="/editcourses/:roll_no" element={<EditCourses />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default Userslayout;
