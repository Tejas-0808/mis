import { Routes, Route } from "react-router-dom";
import SideBar from "../components/Studentsection/sidebar.jsx";
import AddPaymentType from "../components/Studentsection/Academic/Masters/AddPaymentType";
import PaymentType from "../components/Studentsection/Academic/Masters/PaymentType";
import StudentsectionDashboard from "../components/Studentsection/StudentsectionDashboard.jsx";

function StudentSectionlayout({ children }) {
    console.log(children);
    const StudentSectionElement = children.StudentSectionElement;
    return (
        <>
            <SideBar />
            <Routes>
                <Route path="/addPayment" element={<StudentSectionElement><AddPaymentType /></StudentSectionElement>} />
                <Route path="/payment" element={<StudentSectionElement><PaymentType /></StudentSectionElement>} />
                <Route path="/studentsection" element={<StudentSectionElement><StudentsectionDashboard /></StudentSectionElement>} />

            </Routes>
        </>
    );
}

export default StudentSectionlayout;
