import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Box } from "@mui/material/";
import LoginForm from "./LoginForm";
import Dashboard from "../Student/Dashboard/dashboard";
import Ssdashboard from "../Studentsection/ssdashboard/ssdashboard";

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
      {token ? (
        <>
          {role === '1' && (
            <>
              <Ssdashboard />
            </>
          )}
          {(role === '2' || role === '4') && (
            <>
              <Ssdashboard />
            </>
          )}
          {role === '3' && (
            <>
              <Ssdashboard />
            </>
          )}
          {role === '5' && (
            <>
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
