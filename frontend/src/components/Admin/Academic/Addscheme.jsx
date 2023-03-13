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

function Addscheme() {
  const [CourseCategory, setCourseCategory] = useState([]);
  const [MasterScheme, setMasterScheme] = useState([]);
  const [scheme, setScheme] = useState({
    scid: "",
    master_sch_id: "",
    category: "",
    ft: "",
    pt: ""
  });

  const fetchCourseCategory = async () => {
    try {
      const res = await axios.get("http://localhost:3001/course_category");
      setCourseCategory(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMasterScheme = async () => {
    try {
      const res = await axios.get("http://localhost:3001/master_scheme");
      setMasterScheme(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMasterScheme();
    fetchCourseCategory();
  }, [])

  const navigate = useNavigate();
  const handleChange = (e) => {
    setScheme((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/scheme", scheme);
      navigate("/scheme");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
  };

  console.log(scheme);
  const [batch, setBatch] = useState([]);

  return (
    // <div className="form">
    //   ADD
    //   <input type="number" placeholder="ID" name="scid" onChange={handleChange} />
    //   <label>
    //     Master Scheme ID:
    //     <select
    //       name="master_sch_id"
    //       placeholder="Master id"
    //       className="form-select-MasterschemeId"
    //       onChange={handleChange}
    //       required
    //     >
    //       <option value="">-- Select Masterscheme ID --</option>
    //       {MasterScheme.map((MasterScheme) => (
    //         <option value={MasterScheme.mastersch_id}>{MasterScheme.mastersch_id}</option>
    //       ))}
    //     </select>
    //   </label>
    //   <label>
    //     Category:
    //     <select
    //       name="category"
    //       placeholder="Category"
    //       className="form-select-MasterschemeId"
    //       onChange={handleChange}
    //       required
    //     >
    //       <option value="">-- Select Course Category --</option>
    //       {CourseCategory.map((CourseCategory) => (
    //         <option value={CourseCategory.name}>{CourseCategory.name}</option>
    //       ))}
    //     </select>
    //   </label>
    //   <input type="number" placeholder="ft" name="ft" onChange={handleChange} />
    //   <input type="number" placeholder="pt" name="pt" onChange={handleChange} />
    //   <button onClick={handleClick}>Add</button>
    // </div>
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" },}}
      noValidate
      autoComplete="off"
    >
  
        
        <TextField
          required
          type="number"
          variant="outlined"
          label="Scheme ID"
          name="scid"
          onChange={handleChange}
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
        <Button variant="contained" onClick={handleClick}>Add</Button>

    </Box>

  )
}

export default Addscheme

