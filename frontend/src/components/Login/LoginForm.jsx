import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Box } from "@mui/material/";
import { Grid, Paper, Avatar, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Ssdashboard from "../Studentsection/ssdashboard/ssdashboard";

// import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const paperStyle = { padding: 40, height: '80vh', width: 480, margin: "60px auto" }
  const avatarStyle = { backgroundColor: '#000000', margin: "20px 0" }
  const btnstyle = { margin: '20px 10px', padding: 10 }
  const heading = { margin: '15px 8px', padding: 10 }

  const [role, setRole] = useState("");
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

 

  //   const navigate = useNavigate();
  const SubmitBtn = async (event) => {
    if (username && password) {
      event.preventDefault();

      try {
        const response = await axios.post("http://localhost:3001/login", {
          username,
          password,
        });
        console.log(response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("username", username);
        setToken(response.data.token);
        setRole(response.data.role);
        setError("");
        setUsername("");
        setPassword("");
        console.log(response.data.message);
      } catch (error) {
        console.log(" error ");
        console.error(error.response.data.message);
      }
      alert("login successfully");
      window.location.reload();
      navigate("/");

    } else {
      alert("fill the values");
    }
    // const handleSubmit = async (event) => {
  };
  

  return (

    <Grid container spacing={2}>

      <Paper elevation={14} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
          <h2 style={heading}>Sign In</h2>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label='Username' placeholder='Enter username' variant="outlined" fullWidth required value={username} onChange={(e) => setUsername(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required value={password} onChange={(e) => setPassword(e.target.value)} />
          </Grid>
        </Grid>


        <FormControlLabel
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Remember me"
        />
        <a href="/">
         <Button type='submit' color="success" variant="contained" style={btnstyle} onClick={SubmitBtn} fullWidth>Sign in</Button>
         </a>
        <Typography >
          <Link href="#" >
            Forgot password ?
          </Link>
        </Typography>
        <Typography > Do you have an account ?
          <Link href="#" >
            Sign Up
          </Link>
        </Typography>
      </Paper>
      {/* <div className="ListContainer">
        {token && (
          <>
            {role === 1 && (
              <>
                <Ssdashboard />
              </>
            )}

            {role === 4 && (
              <>
                <Ssdashboard />
              </>
            )}
          </>
        )}
      </div> */}
    </Grid>
  )
}

export default LoginForm;
