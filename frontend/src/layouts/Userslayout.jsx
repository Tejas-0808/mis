import { Routes, Route } from "react-router-dom";
import SideBar from "../components/Student/sidebar";

function Userslayout({ children }) {
    console.log(children);
    const StudentElement = children.StudentElemnt;
    return (
        <>
            <SideBar />
            <Routes>
                <Route path="/fill_profile" element={<Add_per_d />} />
                <Route path="/profile" element={<StudentElement><Profile /></StudentElement>} />
                <Route path="/contact_details" element={<StudentElement><Student_info /></StudentElement>} />
                <Route path="/Add_contact_details" element={<StudentElement><Add_C_d /></StudentElement>} />
                <Route path="/Add_Educationdetails" element={<Add_EducationDetails />} />
                <Route path="/Education_details" element={<StudentElement><Educationdetails /></StudentElement>} />
                <Route path="/PersonalDetails" element={<StudentElement><PersonalDetails /></StudentElement>} />
                <Route path="/addPersonalDetails" element={<StudentElement><AddPersonalDetails /></StudentElement>} />
                <Route path="/dashboard" element={<StudentElement><Dashboard /></StudentElement>} />
                <Route path="/coursereg" element={<StudentElement><CourseRegActivity /></StudentElement>} />
            </Routes>
        </>
    );
}

export default Userslayout;
