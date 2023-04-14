import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Box } from "@mui/material/";
import { Grid, Paper, Avatar, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AdminDashboard from "../Admin/AdminDashboard";

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
      navigate("/login");
    } else {
      alert("fill the values");
    }
    // const handleSubmit = async (event) => {
  };

  return (
    <Grid>
      <Paper elevation={14} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
          <h2 style={heading}>Sign In</h2>
        </Grid>
        <TextField label='Username' placeholder='Enter username' variant="outlined" fullWidth required value={username} onChange={(e) => setUsername(e.target.value)} />
        <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required value={password} onChange={(e) => setPassword(e.target.value)} />
        <FormControlLabel
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Remember me"
        />
        <Button type='submit' color="success" variant="contained" style={btnstyle} onClick={SubmitBtn} fullWidth>Sign in</Button>
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
      <div className="ListContainer">
        {token && (
          <>
            {role === 1 && (
              <>
                <p>Welcome Admin!</p>
                <p>You have access to the admin dashboard.</p>
                <AdminDashboard />
              </>
            )}

            {role === 4 && (
              <div>
                <p>Welcome User!</p>
                <p>You have access to your user dashboard.</p>
              </div>
            )}
          </>
        )}
      </div>
    </Grid>
  )
}

export default LoginForm;
