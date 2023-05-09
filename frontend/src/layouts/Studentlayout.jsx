import { Routes, Route } from "react-router-dom";
import SideBar from "../components/Student/sidebar";
import Navigation from "../components/Navbar/navbar";
import Student_info from "../components/Student/Profile/Contactdetails";
import Add_C_d from "../components/Student/Profile/Add_contact_details";
import Add_EducationDetails from "../components/Student/Profile/Add_EducationaDetails";
import Educationdetails from "../components/Student/Profile/Educationdetails";
import PersonalDetails from "../components/Student/Profile/Personaldetails";
import AddPersonalDetails from "../components/Student/Profile/AddPersonalDetails";
import Dashboard from "../components/Student/Dashboard/dashboard";
import CourseRegActivity from "../components/Student/Coursereg/Courseregistrationact";
import Student from "../components/Student";
import Login from "../components/Login/Login";

function Studentlayout({ StudentElement }) {
    // console.log(children);
    // const StudentElement = children.StudentElement;
    // console.log(StudentElement);

    return (
        <>
            <div className="d-flex flex-column">
                <Navigation />
                <div className="d-flex">
                    <SideBar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/student" element={<Student />} />
                        <Route path="/contact_details" element={<Student_info />} />
                        <Route path="/Add_contact_details" element={<Add_C_d />} />
                        <Route path="/Add_Educationdetails" element={<Add_EducationDetails />} />
                        <Route path="/Education_details" element={<Educationdetails />} />
                        <Route path="/PersonalDetails" element={<PersonalDetails />} />
                        <Route path="/addPersonalDetails" element={<AddPersonalDetails />} />
                        <Route path="/coursereg" element={<CourseRegActivity />} />
                        <Route path="/login" element={<Login />} />
                        {/* <Route path="/studentdashboard" element={<StudentDashboard />} /> */}
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default Studentlayout;
