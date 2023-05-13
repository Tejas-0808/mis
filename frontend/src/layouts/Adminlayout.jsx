import { Routes, Route } from "react-router-dom";
import SideBar from "../components/Admin/sidebar";
import Navigation from "../components/Navbar/navbar";
import Branch from "../components/Admin/Academic/Branch";
import Addbranch from "../components/Admin/Academic/Addbranch";
import Scheme from "../components/Admin/Academic/Scheme";
import Addscheme from "../components/Admin/Academic/Addscheme";
import Masterscheme from "../components/Admin/Academic/Masterscheme";
import AddMasterscheme from "../components/Admin/Academic/Addmasterscheme";
import UpdateMasterScheme from "../components/Admin/Academic/UpdateMasterScheme";
import Update from "../components/Admin/Academic/Update";
import Structure from "../components/Admin/Academic/Structure";
import AddStructure from "../components/Admin/Academic/AddStructure";
import UpdateStructure from "../components/Admin/Academic/UpdateStructure";
import B_o_s from "../components/Admin/Academic/B_o_s";
import AddBos from "../components/Admin/Academic/AddBos";
import UpdateBos from "../components/Admin/Academic/UpdateBos";
import Session from "../components/Admin/Academic/Session";
import AddSession from "../components/Admin/Academic/AddSession";
import Updatesession from "../components/Admin/Academic/Updatesession"
import Createuserlogin from "../components/Admin/Users/Createuserlogin";
import AdminDashboard from "../components/Admin/AdminDashboard";
import Createstafflogin from "../components/Admin/Users/Createstafflogin";
import Createstudlogin from "../components/Admin/Users/Createstudlogin";
import Createotherlogin from "../components/Admin/Users/Createotherlogin";
import Login from "../components/Login/Login";
import Ssdashboard from "../components/Studentsection/ssdashboard/ssdashboard";

function Adminlayout() {
    return (
        <>
            <div className="d-flex flex-column">

                <Navigation />
                <div className="d-flex">

                    <SideBar />
                    <Routes>
                        <Route path="/" element={<Ssdashboard />} />
                        <Route path="/branch" element={ <Branch /> } />
                        <Route path="/addbranch" element={ <Addbranch /> } />
                        <Route path="/update/:id" element={ <Update /> } />
                        <Route path="/scheme" element={ <Scheme /> } />
                        <Route path="/addscheme" element={ <Addscheme /> } />
                        <Route path="/masterscheme" element={ <Masterscheme /> } />
                        <Route path="/addmasterscheme" element={ <AddMasterscheme /> } />
                        <Route path="/updatemasterscheme/:id" element={ <UpdateMasterScheme /> } />
                        <Route path="/bos" element={ <B_o_s /> } />
                        <Route path="/addbos" element={ <AddBos /> } />
                        <Route path="/updatebos/:id" element={ <UpdateBos /> } />
                        <Route path="/structure" element={ <Structure /> } />
                        <Route path="addstructure" element={ <AddStructure /> } />
                        <Route path="/updatestructure/:id" element={ <UpdateStructure /> } />
                        <Route path="/addsession" element={ <AddSession /> } />
                        <Route path="/session" element={ <Session /> } />
                        <Route path="/updatesession/:id" element={ <Updatesession /> } />
                        <Route path="/createuserlogin" element={ <Createuserlogin /> } />
                        <Route path="/branch" element={<Branch />} />
                        <Route path="/admin" element={ <AdminDashboard /> } />
                        <Route path="/login" element={<Login />} />
                        <Route path="/createstafflogin" element={ <Createstafflogin /> } />
                        <Route path="/createstudlogin" element={ <Createstudlogin /> } />
                        <Route path="/createotherlogin" element={ <Createotherlogin /> } />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default Adminlayout;
