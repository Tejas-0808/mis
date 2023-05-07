import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  Button,
  Card,
  CardContent,
  CardHeader,
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
    Phone_No: "",
    Address: "",
    Gender: "",
    Marital_Status: "",
  });

  // const [email, setEmail] = useState("");  
  // const [isValid, setIsValid] = useState(false);
  const [emailError, setEmailError] = useState("");

  const [phoneError, setPhoneError] = useState("");


  const navigate = useNavigate();
  //  const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     setStaffDetails((prev) => ({ ...prev, [name]: value }));
  //     if (name === "Email_id" ) {
  //       setEmailError(
  //         /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  //           ? ""
  //           : "Invalid email address"
  //       );

  //     console.log(staffdetails);
  //   }
  const handleChange = (event) => {
    const { name, value } = event.target;

    setStaffDetails((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "Phone_No") {
      setPhoneError(
        /^\d{10}$/.test(value)
          ? ""
          : "Invalid Phone Number"
      );
    }

    if (name === "Email_id") {
      setEmailError(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email address"
      );
    }

    console.log(staffdetails);
  };


  const handleClickadd = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/newuser", staffdetails,{
        headers: { authorization: localStorage.getItem('token') }
      });
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
  };

  const [branch, setBranch] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/branch", {
        headers: { authorization: localStorage.getItem('token') }
      })
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
      .get("http://localhost:3001/privilege", {
        headers: { authorization: localStorage.getItem('token') }
      })
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
    // <Box
    //   component="form"
    //   sx={{
    //     "& .MuiTextField-root": { m: 1, width: "25ch" },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >

    //   <Card sx={{ m: 1, minWidth: 275, backgroundColor: '#f5f5f5' }}>


    //     <CardContent>

    //       <CardHeader
    //         style={{ backgroundColor: "lightblue" }}
    //         title="New User"
    //       />
    <Box
    component="form"
    sx={{
        width: '100%', height: '100%'
    }}
    noValidate
    autoComplete="off">
    <Card sx={{
        m: 1, minWidth: 275, backgroundColor: '#F5F5F5'
    }}>
        <CardContent>
            <CardHeader
                style={{ backgroundColor: "lightblue", textAlign: 'center' }}
                title="New User"
            />
            <hr />
            <Box 
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <div>
       
        <hr></hr>

          <Grid container spacing={1} >
            <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
            <TextField
              type="text"
              variant="outlined"
              label="First Name"
              name="First_Name"
              onChange={handleChange}
              required
            />
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }} >
            <TextField
              type="text"
              variant="outlined"
              label="Middle Name"
              name="Middle_Name"
              onChange={handleChange}
              required
            />
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
            <TextField
              type="text"
              variant="outlined"
              label="Last Name"
              name="Last_Name"
              onChange={handleChange}
              required
            />
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
            <FormControl sx={{ m: 1, minWidth:  "25ch" }}>
              <InputLabel id="demo-simple-select-label">
                 Program
              </InputLabel>
              <Select
                label="Select Program"
                name="Branch_id"
                labelId="demo-simple-select-helper-label"
                className="form-select-Program"
                onChange={handleChange}
                sx={{ height: 55}}
                required
              >
                <MenuItem value="">
                  <em>--Select Program--</em>
                </MenuItem>
                {branch.map((item) => (
                  <MenuItem key={item.Branch_id} value={item.Branch_id}>
                    {item.Branch_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={1} >
            <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
            <TextField
              type="text"
              label="Enter Qualifications"
              variant="outlined"
              name="Qualifications"
              onChange={handleChange}
              required
            />
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }} >
            <FormControl sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-label">
                  Role
              </InputLabel>
              <Select
                required
                name="role_id"
                labelId="role_id"
                id="select"
                label="Role"
                onChange={handleChange}
                sx={{ height: 55}}
              >
                <MenuItem value="">
                  <em>--Select Role--</em>
                </MenuItem>
                {role.map((item) => (
                  <MenuItem key={item.role_id} value={item.role_id}>
                    {item.role}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
            <TextField
              label="Email"
              name="Email_id"
              value={staffdetails.Email_id}
              onChange={handleChange}
              error={Boolean(emailError)}
              helperText={emailError}
            />
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
            <TextField
              label="Phone No"
              name="Phone_No"
              // value={staffdetails.Phone_No}
              onChange={handleChange}
              error={Boolean(phoneError)}
              helperText={phoneError}
            />
            </Grid>
          </Grid>
            
            
          

            
          <Grid container spacing={1} >
            <Grid item xs={12} sm={6} md={4} sx={{ p: 0, m: 0 }}>
            <TextField
              type="text"
              variant="outlined"
              label="Address"
              name="Address"
              onChange={handleChange}
              required
  
            />
            </Grid>
            
            <Grid item xs={12} sm={6} md={4} sx={{ p: 0, m: 0 }}>
            <FormControl sx={{ m: 1, minWidth: 250 }}>
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
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ p: 0, m: 0 }}>
            <FormControl sx={{ m: 1, minWidth: 250 }}>
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
              
            </FormControl>
            </Grid>
          </Grid>

            

          
          

            
            <br />
           <br />

           
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

            <Button variant='contained' onClick={handleClickadd}>Add New Staff Member</Button>

          </Box>
         

            {/* <Button variant="contained" onClick={handleClickadd}>
              Add
            </Button> */}
         </div>
    </Box>
        </CardContent>

      </Card>
    </Box>
  );
}

export default NewUser;
