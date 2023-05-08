import React from "react";

import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Alert,CardContent, Card, CardHeader } from "@mui/material/";


function Addscheme() {

  const [branch, setbranch] = useState([]);
  const [CourseCategory, setCourseCategory] = useState([]);
  const [MasterScheme, setMasterScheme] = useState([]);
  const [scheme, setScheme] = useState({
    master_sch_id: "",
    category: "",
    branch: "",
    ft: "",
    pt: ""
  });
  const [alert, setAlert] = useState("");


  const fetchCourseCategory = async () => {
    try {
      const res = await axios.get("http://localhost:3001/course_category", {
        headers: { authorization: localStorage.getItem('token') }
      });
      setCourseCategory(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMasterScheme = async () => {
    try {
      const res = await axios.get("http://localhost:3001/master_scheme", {
        headers: { authorization: localStorage.getItem('token') }
      });
      setMasterScheme(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMasterScheme();
    fetchCourseCategory();
    axios
      .get("http://localhost:3001/branch", {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then((response) => {
        setbranch(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  const navigate = useNavigate();
  const handleChange = (e) => {
    setScheme((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/scheme", scheme, {
        headers: { authorization: localStorage.getItem('token') }
      });
        setAlert("Scheme added Successfully");
      navigate("/scheme");
    } catch (err) {
      console.log(err.response.data.error);
        setAlert(err.response.data.error);
    }
  };

  console.log(scheme);
  const [batch, setBatch] = useState([]);

  return (

    <div style={{ height: '100vh', width: '100%' }}>

      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" }, }}
        noValidate
        autoComplete="off"
      >
        <Card sx={{ m: 1, minWidth: 275, backgroundColor: '#F5F5F5' }}>


          <CardContent>

            <CardHeader
              style={{ backgroundColor: "lightblue" }}
              title="ADD SCHEME"
            />

            <FormControl variant="outlined" sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-label">Master Scheme</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="master_sch_id"
                placeholder="Master id"
                className="form-select-MasterschemeId"
                onChange={handleChange}
                required
              >
                <MenuItem value="">-- Select Master Scheme --</MenuItem>
                {MasterScheme.map((item) => (
                  <MenuItem key={item.mastersch_id} value={item.mastersch_id}>
                    {item.mastersch_id}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-label">Course Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="category"
                placeholder="Category"
                className="form-select-MasterschemeId"
                onChange={handleChange}
                required
              >
                <MenuItem value="">-- Select Course Category --</MenuItem>
                {CourseCategory.map((item) => (
                  <MenuItem key={item.course_category_id} value={item.course_category_id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl variant="outlined" sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-label">Department</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="branch"
                placeholder="Department"
                className="form-select-branch"
                onChange={handleChange}
                required
              >
                <MenuItem value="">-- Select Department --</MenuItem>
                {branch.map((item) => (
                  <MenuItem key={item.Branch_id} value={item.Branch_id}>
                    {item.Branch_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              required
              type="number"
              variant="outlined"
              label="pt"
              name="pt"
              onChange={handleChange}
            />

            <TextField
              required
              type="number"
              variant="outlined"
              label="ft"
              name="ft"
              onChange={handleChange}
            />
            <Button variant="contained" onClick={handleClick} sx={{ ml: 1, alignSelf: 'center', mt: 1, height: 55 }}>Add</Button>
            {alert ? <>
                <Alert severity='error'>{alert}</Alert>

            </>: <>
                {/* <Alert severity='error'>{error}</Alert> */}
            </>
            }
          </CardContent>

        </Card>
      </Box>
    </div>

  )
}

export default Addscheme

