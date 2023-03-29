import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Box } from "@mui/material/";
import AdminDashboard from "../Admin/AdminDashboard";
import LoginForm from "./LoginForm";
import UserDashboard from "../Users/UserDashboard";
import StudentsectionDashboard from "../Studentsection/StudentsectionDashboard";
import StudentDashboard from "../Student/StudentDashboard";

// import { useNavigate } from "react-router-dom";

const Login = () => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    console.log(token);
    console.log(role);
    const Logout = () => {
    localStorage.setItem('token', "");
    window.location.reload();
  };

  return (
    <Box>
      <button onClick={Logout}>logout</button>
      
      {token && (
            <>
              {role === '1' && (
                <>
                  <p>Welcome Admin!</p>
                  <p>You have access to the admin dashboard.</p>
                  <AdminDashboard />
                </>
              )}
              {(role === '2'|| role === '4') && (
                <>
                  <p>Welcome user!</p>
                  <p>You have access to your user dashboard.</p>
                  <UserDashboard />
                </>
              )}
              {role === '3' && (
                <>
                  <p>Student Section</p>
                  <p>You have access to your studentsection dashboard.</p>
                  <StudentsectionDashboard/>
                </>
              )}
              {role === '5' && (
                <>
                  <p>Welcome Student!</p>
                  <p>You have access to your Student dashboard.</p>
                  <StudentDashboard/>
                </>
              )}
            </>
          )}
   </Box>
  

    //   {/* <label htmlFor="username">Username:</label>
    //     <input
    //       type="text"
    //       id="username"
    //       value={username}
    //       onChange={(event) => setUsername(event.target.value)}
    //     /> */}
    //   {/* </div>
    //   <div>
    //     <label htmlFor="password">Password:</label>
    //     <input
    //       type="password"
    //       id="password"
    //       value={password}
    //       onChange={(event) => setPassword(event.target.value)}
    //     />
    //   </div> */}
    //   {/* {error && <div>{error}</div>}
    //   <button type="submit">Log in</button> */}
    // </div>
  );
};

export default Login;
