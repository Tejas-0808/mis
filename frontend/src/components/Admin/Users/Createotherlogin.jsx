import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { DataGrid } from '@mui/x-data-grid';
import {
    TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material/";

function Createotherlogin(props) {
  const navigate = useNavigate();

  const [otherlogins, SetOtherLogins] = useState({
    username: "",
    password: "",
    role_id: props.selectedRoleId
  });
  const handleChange = async (e) => {
    SetOtherLogins((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClicked = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/otherlogins", otherlogins);
      navigate("/");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
  };
//   const handleUpdateButtonClick = async (e) => {
//     e.preventDefault();
  
    
//     // Make an API call to insert the student names as passwords into the login table
//     const users = selectedStudents.map((student) => ({
//       username: username,
//       password: password, // Using the student's name as the password is not secure!
//       role_id: props.selectedRoleId,
//     }));
    
//     console.log(typeof(users));

//     try {
//       await axios.post("http://localhost:3001/studpassword", users);
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//     }
//     navigate("/");
//   };

  return (
    <Box>
      <div>
        <h1>Other Login</h1>
        <hr></hr>
        <TextField
          type="text"
          variant="outlined"
          label="Username"
          name="username"
          onChange={handleChange}
          required
        />
        <TextField
          type="text"
          variant="outlined"
          label="Password"
          name="password"
          onChange={handleChange}
          required
        />
        <Button variant="contained" onClick={handleClicked}>
              Create Login
            </Button>
      </div>
    </Box>
  );
}

export default Createotherlogin;
