import { Routes, Route } from "react-router-dom";
import SideBar from "../components/Student/sidebar";
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

function Userslayout({ UserElement }) {
    console.log(UserElement);
    // const StudentElement = children.StudentElemnt;
    return (
        <>
            <SideBar />
            <Routes>
                <Route path="/facultyadvisor" element={<UserElement><Facultyadvisor /></UserElement>} />
                <Route path="/promotion" element={<UserElement><Promotion /></UserElement>} />
                <Route path="/schemeallotment" element={<UserElement><Schemeallotment /></UserElement>} />
                <Route path="/offeredcourses" element={<UserElement><Offeredcourses /></UserElement>} />
                <Route path="/courseconfirm" element={<UserElement><CourseConfirmation /></UserElement>} />
                <Route path="/newuser" element={<UserElement><NewUser /></UserElement>} />
                <Route path="/user" element={<UserElement><UserDashboard /></UserElement>} />
                <Route path="/batchallotment" element={<UserElement><Batchallotment /></UserElement>} />
                <Route path="/finalcoursesoffered" element={<FinalCoursesOffered />}></Route>
                <Route path="/courseallotment" element={<Courseallotment />}></Route>
            </Routes>
        </>
    );
}

export default Userslayout;
