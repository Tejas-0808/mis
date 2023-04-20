import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SideBar from "../components/Sidebar/sidebar";
import Add_per_d from "../components/Student/Profile/AddPersonalDetails";
import Student_info from "../components/Student/Profile/Contactdetails";
import Add_C_d from "../components/Student/Profile/Add_contact_details";
import Add_EducationDetails from "../components/Student/Profile/Add_EducationaDetails";
import Educationdetails from "../components/Student/Profile/Educationdetails";
import PersonalDetails from "../components/Student/Profile/Personaldetails";
import AddPersonalDetails from "../components/Student/Profile/AddPersonalDetails";
import Profile from "../components/Student/Profile/Profile";
import Dashboard from "../components/Student/Dashboard/dashboard";
import CourseRegActivity from "../components/Student/Coursereg/Courseregactivity";
import StudentDashboard from "../components/Student/StudentDashboard";
function Studentlayout({ children }) {
    console.log(children);
    const StudentElement = children.StudentElemnt;
return (
	<>
	<SideBar />
	<Routes>

    {/* <Route path="/student" element={<StudentElemen  t><Student /></StudentElement>} /> */}
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
          <Route path="/studentdashboard" element={<StudentElement><StudentDashboard /></StudentElement>} />
	</Routes>
	</>
);
}

export default Studentlayout;
