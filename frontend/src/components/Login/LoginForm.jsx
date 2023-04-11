import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Box } from "@mui/material/";
import AdminDashboard from "../Admin/AdminDashboard";

// import { useNavigate } from "react-router-dom";

const LoginForm = () => {
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
        localStorage.setItem("username",username);
        setToken(response.data.token);
        setRole(response.data.role);
        setError("");
        setUsername("");
        setPassword("");
        console.log(response.data.message);
      } catch (error) {
        console.log("ithe error ahe");
        console.error(error.response.data.message);
      }
      navigate("/login");
    } else {
      alert("fill the values");
    }
    // const handleSubmit = async (event) => {
  };

  return (
    <Box>
      <div className="form_container">
        {/* <h1> Login </h1> */}
        <TextField
          className="input"
          // id="standard-password-input"
          label="Username"
          type="text"
          // autoComplete="current-password"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          className="input input_2"
          // id="standard-password-input"
          label="Password"
          type="password"
          // autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Button onClick={SubmitBtn} variant="contained" color="secondary">
          Login
        </Button>
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
      </div>
      {/* <div> */}

      {/* <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        /> */}
      {/* </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div> */}
       {error && <div>{error}</div>}
      {/*<button type="submit">Log in</button> */}
    </Box>
  );
};

export default LoginForm;
