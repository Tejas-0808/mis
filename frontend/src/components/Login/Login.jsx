import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Box } from "@mui/material/";
import AdminDashboard from "../Admin/AdminDashboard";
import LoginForm from "./LoginForm";
import UserDashboard from "../Users/UserDashboard";
import StudentsectionDashboard from "../Studentsection/StudentsectionDashboard";
import StudentDashboard from "../Student/StudentDashboard";
import Profile from "../Student/Profile/Profile";

const Login = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  console.log(token);
  console.log(role);
  // console.log(username);
  const Logout = () => {
    localStorage.setItem('token', "");
    navigate("/");
    // window.location.reload();
  };

  const [username, setUsername] = useState('');
  const [linkarray, setLinkarray] = useState([]);
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
          localStorage.setItem('token', "");
          console.error(err);
        });
        // try {
        //   (async () => {
        //   const res = await axios.post("http://localhost:3001/links_id", username);
        //   const linkarray = [...res.data];
        //   setLinkarray(linkarray);
        //   console.log(linkarray);
        //   })();
        // } catch (err) {
        //   console.log(err);
        // }
      }else{
        <div>login Again</div>
      }
    },[]); 

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
              { role === '1' && (
                <>
                  <p>Welcome Admin!</p>
                  <p>You have access to the admin dashboard.</p>
                  <AdminDashboard />
                </>
              )}
              {(role === '3'|| role === '5') && (
                <>
                  <p>Welcome user!</p>
                  <p>You have access to your user dashboard.</p>
                  <UserDashboard />
                </>
              )}
              {role === '2' && (
                <>
                  <p>Student Section</p>
                  <p>You have access to your studentsection dashboard.</p>
                  <StudentsectionDashboard/>
                </>
              )}
              {role === '4' && (
                <>
                  <p>Welcome Student!</p>
                  <p>You have access to your Student dashboard.</p>
                  <StudentDashboard/>
                </>
              )}
            </>
          ): <LoginForm/>
          }
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
