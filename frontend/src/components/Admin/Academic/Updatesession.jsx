import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, TextField, Button } from '@mui/material/';
import { InputLabel, FormControl, Select, MenuItem, CardContent, Card, CardHeader } from "@mui/material/";

function Update() {
  const [session, setSession] = useState({
    session_id: "",
    session_name : "",
    name : "",
    year : "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const S_id = location.pathname.split("/")[2];

  const fetchSession = async () => {
    try {
      const res = await axios.get("http://localhost:3001/session/" + S_id, {
        headers: { authorization: localStorage.getItem('token') }
      });
      setSession(res.data);
      // console.log(res.data+"!");
      console.log(session);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {

    fetchSession();
    // eslint-disable-next-line
  }, []);


  const handleChange = (e) => {
    setSession((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3001/session/" + S_id, session, {
        headers: { authorization: localStorage.getItem('token') }
      });
      navigate("/session");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>

      <Box style={{ maxHeight: 650, overflow: 'auto' }} component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" }, }}
        noValidate
        autoComplete="off"
      >
        <Card sx={{ m: 1, minWidth: 275, backgroundColor: '#F5F5F5' }}>

          <CardContent>

            <CardHeader
              style={{ backgroundColor: "lightblue" }}
              title="UPDATE SESSION"
            />
            <div className="form">
              {/* Update Branch */}
              <br />
              <TextField type="number" required label="ID" name="session_id" value={session.session_id} onChange={handleChange} />
              <TextField type="text" required label="Session Name" name="session_name" value={session.session_name} onChange={handleChange} />
              <TextField type="text" required label="name" name="name" value={session.term} onChange={handleChange} />
              <TextField type="number" required label="year" name="year" value={session.year} onChange={handleChange} />
              {/* <input type="number" placeholder="ID" name="Branch_id" value={branch.Branch_id} onChange={handleChange}/>
      <input type="text" placeholder="Brach Name" name="Branch_name" value={branch.Branch_name} onChange={handleChange}/>
      <input type="text" placeholder="HOD " name="HOD" value={branch.HOD} onChange={handleChange}/>
      <input type="number" placeholder="Student enrolled" name="Students_enrolled" value={branch.Students_enrolled} onChange={handleChange}/>
      <button onClick={handleClick}>Update</button> */}
              <Button color='success' variant="contained" onClick={handleClick} sx={{ ml: 1, alignSelf: 'center', mt: 1, height: 55 }}>Update</Button>
            </div>
          </CardContent>

        </Card>
      </Box>
    </div>
  )
}

export default Update

