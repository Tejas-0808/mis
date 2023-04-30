import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Box } from "@mui/material/";
import AdminDashboard from "../Admin/AdminDashboard";
import LoginForm from "./LoginForm";
import UserDashboard from "../Users/UserDashboard";
import StudentsectionDashboard from "../Studentsection/StudentsectionDashboard";
import Dashboard from "../Student/Dashboard/dashboard";

const Login = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  console.log(token);
  console.log(role);
  // console.log(username);
  const Logout = () => {
    localStorage.clear();
    navigate("/");
    // window.location.reload();
  };

  const [username, setUsername] = useState('');
  console.log(username);
  useEffect(() => {
    const token = localStorage.getItem('token');
    //    setToken(localStorage.getItem('token'))
    console.log(token);
    if (token) {
      axios.get('http://localhost:3001/me', {
        headers: { Authorization: token }
      }).then((response) => {
        setUsername(response.data.username);
      }).catch((err) => {
        localStorage.clear();
        console.error(err);
      });
    } else {
      navigate("/loginform");
    }
  }, []);
  const btnstyle = { margin: '3px 720px', padding: 10, float: "center" }

  return (
    <Box>

      {/* {token && (
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
          )} */}

      {token ? (
        <>
          {role === '1' && (
            <>
              <p>Welcome Admin!</p>
              <p>You have access to the admin dashboard.</p>
              <AdminDashboard />
            </>
          )}
          {(role === '2' || role === '4') && (
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
              <StudentsectionDashboard />
            </>
          )}
          {role === '5' && (
            <>
              <p>Welcome Student!</p>
              <p>You have access to your Student dashboard.</p>
              <Dashboard />
            </>
          )}
        </>
      ) : <LoginForm />
      }
      <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick={Logout}>logout</Button>
    </Box>
  );
};

export default Login;
