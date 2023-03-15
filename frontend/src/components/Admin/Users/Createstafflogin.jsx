import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { DataGrid } from '@mui/x-data-grid';
import {
  TextField,
  Button,
  Box,
} from "@mui/material/";

function Createstafflogin(props) {
  const navigate = useNavigate();
  // const [email, setEmail] = useState({
  //   Email_id: "",
  //   username:"",
  //   role_id: props.selectedRoleId
  // });

  // const [otherlogins, SetOtherLogins] = useState({
  //   username: "",
  //   password: "",
  //   role_id: props.selectedRoleId
  // });
  const [formValues, setFormValues] = useState({
    Email_id: "",
    username: "",
    password: "",
    role_id: props.selectedRoleId,
  });

  const [faculty, setFaculty] = useState([]);
  const [emailError, setEmailError] = useState("");
  const [degree, setdegree] = useState([]);
  const [branch, setbranch] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // SetOtherLogins((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    // setEmail((prev) => ({ ...prev, [name]: value }));
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name === "Email_id") {
      setEmailError(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email address"
      );
    }
    console.log(formValues);
  };

  const fetchFaculty = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3001/facultyrolllist",
        formValues
      );

      setFaculty(res.data);
      if (res.data.length > 0) {
        const faculty = res.data[0];
        if (faculty.Staff_username) {
          console.log("Faculty staff username exists!");
        }
        else{
          setFormValues((prevValues) => ({
          ...prevValues,
          username: faculty.Staff_username || prevValues.username,
        }));
      }
      }
      // setBranch(res.data);
      // console.log(res.data+"!");
      // console.log("Email ID or Role Id doesn't matched");
    } catch (err) {
      console.log(err);
    }
  };

  const handleClicked = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/addusername_staff", formValues);
      console.log('Username created successfully');
      navigate("/");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
    try {
      console.log(formValues);
      await axios.post("http://localhost:3001/otherlogins", formValues);
      console.log('User registered successfully');
      navigate("/");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
  };

  return (
    <Box>
      <div>
        <h1>Staff Login</h1>
        <hr></hr>

        <TextField
          required
          type="email"
          variant="outlined"
          label="Email ID"
          name="Email_id"
          // value={Email_id}
          onChange={handleChange}
          error={Boolean(emailError)}
          helperText={emailError}
        />

        <Button variant="contained" onClick={fetchFaculty}>
          Fetch
        </Button>

        <div className="facultylogin">
          <div>
            <table id="stafflist">
              {faculty.map((faculty) => (
                <table>
                  <tr>
                    <td>
                      <span>
                        {faculty.First_Name + " " + faculty.Last_Name}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <TextField
                        type="text"
                        variant="outlined"
                        label="Username"
                        name="username"
                        value={
                          faculty.Staff_username === null
                            ? formValues.username
                            : faculty.Staff_username
                        }
                        onChange={handleChange}
                        //  InputLabelProps={{ shrink: true }}
                        InputLabelProps={
                          faculty.Staff_username !== null && { shrink: true }
                        }
                        InputProps={{
                          readOnly: faculty.Staff_username !== null,
                        }}
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
                        Create Username
                      </Button>
                    </td>
                  </tr>
                </table>
              ))}
            </table>
          </div>
        </div>

        <br></br>
      </div>
    </Box>
  );
}

export default Createstafflogin;
