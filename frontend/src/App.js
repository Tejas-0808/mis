import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Loginform from "./components/Login/LoginForm";
import axios from "axios";
import Protected from "./components/Protected";
import Navigation from "./components/Navbar/navbar";
import Studentlayout from "./layouts/Studentlayout";
import StudentSectionlayout from "./layouts/StudentSectionlayout";
import Userslayout from "./layouts/Userslayout";
import Adminlayout from "./layouts/Adminlayout";

const USER_TYPES = {
  STUDENTSECTION_USER: "2",
  NORMAL_USER: "3",
  ADMIN_USER: "1",
  STUDENT_USER: "4"
}

const role = localStorage.getItem('role');
const username = localStorage.getItem('username');
const token = localStorage.getItem('token');
const CURRENT_USER_TYPE = role
console.log(CURRENT_USER_TYPE);
// console.log(USER_TYPES.ADMIN_USER);
function App() {
  // const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      const token = localStorage.getItem('token');
      //setToken(localStorage.getItem('token'))
      //console.log(token);
      if (token) {
        axios.get('http://localhost:3001/me', {
          headers: { Authorization: token }
        }).then((response) => {
          // setUsername(response.data.username);
        }).catch((err) => {
          localStorage.clear();
          <Navigate to={"/"} />
          console.error(err);
        });
      } else {
        <Navigate to={"/"} />
      }
      console.log('This will run every one hour!');
    }, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {
          token && role && username ? (
            <>
              {(() => {

                if (CURRENT_USER_TYPE == USER_TYPES.STUDENT_USER) {

                  return (
                    <Studentlayout />
                  )

                } else if (CURRENT_USER_TYPE == USER_TYPES.STUDENTSECTION_USER) {

                  return (

                    <StudentSectionlayout />
                  )

                } else if (CURRENT_USER_TYPE == USER_TYPES.NORMAL_USER) {

                  return (

                    <Userslayout />
                  )

                } else if (CURRENT_USER_TYPE == USER_TYPES.ADMIN_USER) {

                  return (
                    <Adminlayout />
                  )

                } else {

                  return (
                    <>
                      <Route path="/" element={<Loginform />} />
                      <Route path="*" element={<Loginform />} />
                    </>
                  )

                }

              })()}

            </>) : <div>
            <Routes>
              <Route path="/" element={<Loginform />} />
              <Route path="*" element={<Loginform />} />
              {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
          </div>
        }

      </BrowserRouter>
    </div>
  );
}



export default App;