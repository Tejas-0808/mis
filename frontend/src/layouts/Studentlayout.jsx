import { Routes, Route } from "react-router-dom";
import SideBar from "../components/Student/sidebar";
import Student_info from "../components/Student/Profile/Contactdetails";
import Add_C_d from "../components/Student/Profile/Add_contact_details";
import Add_EducationDetails from "../components/Student/Profile/Add_EducationaDetails";
import Educationdetails from "../components/Student/Profile/Educationdetails";
import PersonalDetails from "../components/Student/Profile/Personaldetails";
import AddPersonalDetails from "../components/Student/Profile/AddPersonalDetails";
import Dashboard from "../components/Student/Dashboard/dashboard";
import CourseRegActivity from "../components/Student/Coursereg/Courseregactivity";
import Student from "../components/Student";

function Studentlayout({ StudentElement }) {
    // console.log(children);
    // const StudentElement = children.StudentElement;
    // console.log(StudentElement);

    return (
        <>
            <SideBar />
            <Routes>
                <Route path="/" element={<StudentElement><Dashboard /></StudentElement>} />
                <Route path="/student" element={<StudentElement><Student /></StudentElement>} />
                <Route path="/contact_details" element={<StudentElement><Student_info /></StudentElement>} />
                <Route path="/Add_contact_details" element={<StudentElement><Add_C_d /></StudentElement>} />
                <Route path="/Add_Educationdetails" element={<Add_EducationDetails />} />
                <Route path="/Education_details" element={<StudentElement><Educationdetails /></StudentElement>} />
                <Route path="/PersonalDetails" element={<StudentElement><PersonalDetails /></StudentElement>} />
                <Route path="/addPersonalDetails" element={<StudentElement><AddPersonalDetails /></StudentElement>} />
                <Route path="/coursereg" element={<StudentElement><CourseRegActivity /></StudentElement>} />
            </Routes>
        </>
    );
}

export default Studentlayout;
