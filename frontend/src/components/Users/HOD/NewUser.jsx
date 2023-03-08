import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
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

function NewUser() {
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

  const navigate = useNavigate();
  const handleChange = (e) => {
    setStaffDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(staffdetails);
  };

  const handleClickadd = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/newuser", staffdetails);
      navigate("/");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
  };

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

  const [selectedMS, setSelectedMS] = useState(null);
  const handleCheckboxChange = (event) => {
    setSelectedMS(event.target.value);
    handleChange(event);
  };
  const [selectedGender, setSelectedGender] = useState(null);
  const handleCheckboxChange1 = (event) => {
    setSelectedGender(event.target.value);
    handleChange(event);
  };

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

        <TextField
          type="text"
          variant="outlined"
          label="First Name"
          name="First_Name"
          onChange={handleChange}
          required
        />
        <TextField
          type="text"
          variant="outlined"
          label="Middle Name"
          name="Middle_Name"
          onChange={handleChange}
          required
        />
        <TextField
          type="text"
          variant="outlined"
          label="Last Name"
          name="Last_Name"
          onChange={handleChange}
          required
        />
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-label">
            ---Select Program---
          </InputLabel>
          <Select
            labelId="Branch_id"
            label="Select Program"
            name="Branch_id"
            className="form-select-Program"
            onChange={handleChange}
            required
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {branch.map((item) => (
              <MenuItem key={item.Branch_id} value={item.Branch_id}>
                {item.Branch_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          type="text"
          label="Enter Qualifications"
          variant="outlined"
          name="Qualifications"
          onChange={handleChange}
          required
        />
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="demo-simple-select-label">
            ---Select Role---
          </InputLabel>
          <Select
            required
            name="role_id"
            labelId="role_id"
            id="select"
            label="---Select Role---"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {role.map((item) => (
              <MenuItem key={item.role_id} value={item.role_id}>
                {item.role}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          type="email"
          variant="outlined"
          label="Email id"
          name="Email_id"
          onChange={handleChange}
          required
        />
        <TextField
          type="number"
          variant="outlined"
          label="Phone No"
          name="Phone_no"
          onChange={handleChange}
          required
        />
        <TextField
          type="text"
          variant="outlined"
          label="Address"
          name="Address"
          onChange={handleChange}
          required
        />
        {/* <h5>Gender</h5>
        <label>
          <input
            type="radio"
            name="Gender"
            value="Female"
            checked={selectedGender === "Female"}
            onChange={handleCheckboxChange1}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="Gender"
            value="Male"
            checked={selectedGender === "Male"}
            onChange={handleCheckboxChange1}
          />
          Male
        </label> */}

        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="Gender"
            // value={value}
            onChange={handleCheckboxChange1}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />

            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Martial Status
          </FormLabel>

          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="Marital_Status"
            // value={value}
            onChange={handleCheckboxChange1}
          >
            <FormControlLabel
              value="Married" control={<Radio />} label="Married"
            />
            <FormControlLabel value="Unmarried" control={<Radio />} label="Unmarried" />
          </RadioGroup>
          {/* <Typography>Martial Status</Typography>
          <InputLabel>
            <Radio
              type="radio"
              name="Marital_Status"
              value="Married"
              checked={selectedMS === "Married"}
              onChange={handleCheckboxChange}
            />
            Married
          </InputLabel>
          <InputLabel>
            <Radio
              type="radio"
              name="Marital_Status"
              value="Unmarried"
              checked={selectedMS === "Unmarried"}
              onChange={handleCheckboxChange}
            />
            Unmarried
          </InputLabel> */}
        </FormControl>

        <Button variant="contained" onClick={handleClickadd}>
          Add
        </Button>
      </div>
    </Box>
  );
}

export default NewUser;
