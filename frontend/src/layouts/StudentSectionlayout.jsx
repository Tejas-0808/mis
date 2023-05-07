import { Routes, Route } from "react-router-dom";
import SideBar from "../components/Studentsection/sidebar.jsx";
import Ssdashboard from "../components/Studentsection/ssdashboard/ssdashboard.jsx";
import AddPaymentType from "../components/Studentsection/Academic/Masters/AddPaymentType";
import PaymentType from "../components/Studentsection/Academic/Masters/PaymentType";
import StudentsectionDashboard from "../components/Studentsection/StudentsectionDashboard.jsx";
import Category from "../components/Studentsection/Academic/Masters/Category";
import AddCategory from "../components/Studentsection/Academic/Masters/AddCategory";
import UpdateCategory from "../components/Studentsection/Academic/Masters/UpdateCategory";
import Religion from "../components/Studentsection/Academic/Masters/Religion";
import AddReligion from "../components/Studentsection/Academic/Masters/AddReligion";
import UpdateReligion from "../components/Studentsection/Academic/Masters/UpdateReligion";
import District from "../components/Studentsection/Academic/Masters/District";
import AddDistrict from "../components/Studentsection/Academic/Masters/AddDistrict";
import UpdateDistrict from "../components/Studentsection/Academic/Masters/UpdateDistrict";
import Caste from "../components/Studentsection/Academic/Masters/Caste";
import UpdateCaste from "../components/Studentsection/Academic/Masters/UpdateCaste";
import AddCaste from "../components/Studentsection/Academic/Masters/AddCaste";
import City from "../components/Studentsection/Academic/Masters/City";
import Addcity from "../components/Studentsection/Academic/Masters/Addcity";
import UpdateCity from "../components/Studentsection/Academic/Masters/UpdateCity";
import State from "../components/Studentsection/Academic/Masters/State";
import AddState from "../components/Studentsection/Academic/Masters/AddState";
import UpdateState from "../components/Studentsection/Academic/Masters/UpdateState";
import Scheme from "../components/Admin/Academic/Scheme";
import Addscheme from "../components/Admin/Academic/Addscheme";
import Masterscheme from "../components/Admin/Academic/Masterscheme";
import AddMasterscheme from "../components/Admin/Academic/Addmasterscheme";
import UpdateMasterScheme from "../components/Admin/Academic/UpdateMasterScheme";
import Update from "../components/Admin/Academic/Update";
import Rolllist from "../components/Studentsection/Academic/Utiity/RollList";
import RollNoGeneration from "../components/Studentsection/Academic/Studentsectiontransaction/Rollnogeneration";
import IdentityCard from '../components/Studentsection/Academic/Academicreports/Identitycard';
import Branchchange from "../components/Studentsection/Academic/Utiity/Branchchange";
import NewStudent from "../components/Studentsection/Academic/Admission/Newstudent";
import Session from "../components/Admin/Academic/Session";
import AddSession from "../components/Admin/Academic/AddSession";
import Login from "../components/Login/Login.jsx";
import Navigation from "../components/Navbar/navbar.jsx";

function StudentSectionlayout({ StudentSectionElement }) {
    console.log(StudentSectionElement);
    // const StudentSectionElement = children.StudentSectionElement;
    return (
        <>
            <div className="d-flex flex-column">
                <Navigation />
                <div className="d-flex">
                    <SideBar />
                    <Routes>
                        <Route path="/" element={<Ssdashboard />} />
                        <Route path="/addsession" element={<AddSession />} />
                        <Route path="/session" element={<Session />} />
                        <Route path="/state" element={<State />} />
                        <Route path="/addstate" element={<AddState />} />
                        <Route path="/updatestate/:id" element={<UpdateState />} />
                        <Route path="/update/:id" element={<Update />} />
                        <Route path="/scheme" element={<Scheme />} />
                        <Route path="/addscheme" element={<Addscheme />} />
                        <Route path="/masterscheme" element={<Masterscheme />} />
                        <Route path="/addmasterscheme" element={<AddMasterscheme />} />
                        <Route path="/updatemasterscheme/:id" element={<UpdateMasterScheme />} />
                        <Route path="/addPayment" element={<AddPaymentType />} />
                        <Route path="/payment" element={<PaymentType />} />
                        <Route path="/studentsection" element={<StudentsectionDashboard />} />
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
                        <Route path="rollnogeneration" element={<RollNoGeneration />} />
                        {/* <Route path="/imageshow" element={<Imagetest/>}/> */}
                        <Route path="/identitycard" element={<IdentityCard />} />
                        <Route path="/rolllist" element={<Rolllist />} />
                        <Route path="/branchchange" element={<Branchchange />} />
                        <Route path="/newstudent" element={<NewStudent />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default StudentSectionlayout;
