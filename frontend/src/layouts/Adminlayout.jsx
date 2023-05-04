import { Routes, Route } from "react-router-dom";
import SideBar from "../components/Admin/sidebar";
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
import Createuserlogin from "../components/Admin/Users/Createuserlogin";
import AdminDashboard from "../components/Admin/AdminDashboard";
import Createstafflogin from "../components/Admin/Users/Createstafflogin";
import Createstudlogin from "../components/Admin/Users/Createstudlogin";
import Createotherlogin from "../components/Admin/Users/Createotherlogin";
import Login from "../components/Login/Login";

function Adminlayout({ AdminElement }) {
    console.log(AdminElement);
    // const AdminElement = children.StudentElemnt;
    return (
        <>
            <SideBar />
            <Routes>
                <Route path="/branch" element={<AdminElement><Branch /></AdminElement>} />
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
                <Route path="/branch" element={<Branch />} />
                <Route path="/admin" element={<AdminElement><AdminDashboard /></AdminElement>} />
                <Route path="/login" element={<Login />} />
                <Route path="/createstafflogin" element={<AdminElement><Createstafflogin /></AdminElement>} />
                <Route path="/createstudlogin" element={<AdminElement><Createstudlogin /></AdminElement>} />
                <Route path="/createotherlogin" element={<AdminElement><Createotherlogin /></AdminElement>} />
            </Routes>
        </>
    );
}

export default Adminlayout;
