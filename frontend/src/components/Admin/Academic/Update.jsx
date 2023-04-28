import React from 'react'
import { useState, useEffect} from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, TextField, Button } from '@mui/material/';
import {  InputLabel, FormControl, Select, MenuItem, CardContent, Card, CardHeader} from "@mui/material/";

function Update() {
  const [branch, setBranch] = useState({
    Branch_id: "",
    Branch_name: "",
    HOD: "",
    Students_enrolled: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  
  const B_id = location.pathname.split("/")[2];

  const fetchBranch = async () => {
    try {
        const res = await axios.get("http://localhost:3001/branch/"+ B_id,{
          headers: { authorization: localStorage.getItem('token') }
        });
        setBranch(res.data);
        // console.log(res.data+"!");
        console.log(branch);
    } catch(err) {
        console.log(err);
    }
}

  useEffect(() => {

    fetchBranch();
    // eslint-disable-next-line
  }, []);


  const handleChange = (e) => {
    setBranch((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.put("http://localhost:3001/branch/" + B_id, branch,{
            headers: { authorization: localStorage.getItem('token') }
          });
          navigate("/branch");
        } catch (err) {
          console.log(err);
        }
      };

  return (
    <Box component="form"
    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" }, }}
    noValidate
    autoComplete="off"
  >
     <Card sx={{ m: 1, minWidth: 275 }}>
   
      
   <CardContent>

     <CardHeader
       style={{ backgroundColor: "lightblue" }}
       title="UPDATE BRANCH"
     />
    <div className="form">
      {/* Update Branch */}
      <br/>
      <TextField type="number" required label="ID" name="Branch_id" value={branch.Branch_id} onChange={handleChange} />
        <TextField type="text" required label="Branch Name" name="Branch_name" value={branch.Branch_name}onChange={handleChange} />
        <TextField type="text" required label="HOD" name="HOD" value={branch.HOD}onChange={handleChange} />
        <TextField type="number" required label="Students enrolled" name="Students_enrolled" value={branch.Students_enrolled}onChange={handleChange} />
      {/* <input type="number" placeholder="ID" name="Branch_id" value={branch.Branch_id} onChange={handleChange}/>
      <input type="text" placeholder="Brach Name" name="Branch_name" value={branch.Branch_name} onChange={handleChange}/>
      <input type="text" placeholder="HOD " name="HOD" value={branch.HOD} onChange={handleChange}/>
      <input type="number" placeholder="Student enrolled" name="Students_enrolled" value={branch.Students_enrolled} onChange={handleChange}/>
      <button onClick={handleClick}>Update</button> */}
      <Button color='success' variant="contained" onClick={handleClick}  sx={{ ml: 1, alignSelf: 'center',mt: 1,height: 55 }}>Update</Button>
    </div>
    </CardContent>
      
      </Card>
    </Box>
  )
}

export default Update

