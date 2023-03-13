import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Createstudlogin from "./Createstudlogin";
import {
  Button,
  Checkbox,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  TextField,
  Radio,
  Box,
  Typography,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

function Createuserlogin() {
  const [staffdetails, setStaffDetails] = useState({
    First_Name: "",
    Middle_Name: "",
    Last_Name: "",
    Branch_id: "",
    Qualifications: "",
    role_id: "",
    Email_id: "",
    Phone_no: "",
    Address: "",
    Gender: "",
    Marital_Status: "",
  });

  const [selectedRoleId, setSelectedRoleId] = useState('');
  

  const navigate = useNavigate();
  const handleChange = (event) => {
    setSelectedRoleId(event.target.value);
    console.log(staffdetails);
  };

  // const handleClickadd = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:3001/newuser", staffdetails);
  //     navigate("/");
  //   } catch (err) {
  //     console.log(err);
  //     // setError(true)
  //   }
  // };

  const [branch, setBranch] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/branch")
      .then((response) => {
        setBranch(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const [role, setRole] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/privilege")
      .then((response) => {
        setRole(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="form">
        <Typography variant="h4">New User</Typography>

        <FormControl variant="filled" size="small" sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            required
            name="role_id"
            label="-- Select Role --"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {role.map((item, index) => {
              if (index === 0) {
                return null; // skip the first item
              }
              return (
                <MenuItem key={item.role_id} value={item.role_id}>
                  {item.role}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Createstudlogin selectedRoleId={selectedRoleId} />
        {/* <Createstudlogin myProp={role.role_id}/> */}
      </div>
    </Box>
  );
}

export default Createuserlogin;
