import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Box, TextField, Button } from '@mui/material/';
import {  InputLabel, FormControl, Select, MenuItem, CardContent, Card, CardHeader} from "@mui/material/";



function UpdateStructure() {
    const [Structure, setStructure] = useState({
        strid: "",
        scheme_id: "",
        category: "",
        semester: "",
        branch_id: "",
        board_of_study: "",
        coursecode: "",
        coursename: "",
        lecture: "",
        tut: "",
        pract: "",
        ise1: "",
        ise2: "",
        ise3: "",
        PR: "",
        TW: "",
        ese: "",
        total_marks: "",
        total_credits: ""
    });
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location);
    const C_id = location.pathname.split("/")[2];

    const fetchStructure = async () => {
        try {
            const res = await axios.get("http://localhost:3001/structure/" + C_id,{
                headers: { authorization: localStorage.getItem('token') }
              });
            setStructure(res.data);
            console.log(Structure);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchStructure();
    }, []);

    const handleChange = async (e) => {
        setStructure((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://localhost:3001/structure/" + C_id, Structure,{
                headers: { authorization: localStorage.getItem('token') }
              });
            navigate("/structure");
        } catch (err) {
            console.log(err);
        }

    }

    return(
         <Box component="form"
    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" },}}
    noValidate
    autoComplete="off"
    >
       <Card sx={{ m: 1, minWidth: 275 }}>
     
        
     <CardContent>

       <CardHeader
         style={{ backgroundColor: "lightblue" }}
         title="ADD BOS"
       />
    
        <div className="form">
            <h1>EDIT Structure</h1>
            <br></br><hr></hr>
            <TextField required type="number" label="Structure ID" name="strid" value={Structure.strid} onChange={handleChange} />
            <TextField required type="number" label="Scheme Id" name="scheme_id" value={Structure.scheme_id} onChange={handleChange} />
            <TextField required type="text" label="category" name="category" value={Structure.category} onChange={handleChange} />
            <TextField required type="text" label="Semester" name="semester" value={Structure.semester} onChange={handleChange} />
            <TextField required type="number" label="Branch Id" name="branch_id" value={Structure.branch_id} onChange={handleChange} />
            <TextField required type="text" label="Board of Study" name="board_of_study" value={Structure.board_of_study} onChange={handleChange} />
            <TextField required type="text" label="Course Code" name="coursecode" value={Structure.coursecode} onChange={handleChange} />
            <TextField required type="text" label="Course Name" name="coursename" value={Structure.coursename} onChange={handleChange} />
            <TextField required type="number" label="Lecture" name="lecture" value={Structure.lecture} onChange={handleChange} />
            <TextField required type="number" label="Tutorial" name="tut" value={Structure.tut} onChange={handleChange} />
            <TextField required type="number" label="Practical" name="pract" value={Structure.pract} onChange={handleChange} />
            <TextField required type="number" label="In Sem 1" name="ise1" value={Structure.ise1} onChange={handleChange} />
            <TextField required type="number" label="In Sem 2" name="ise2" value={Structure.ise2} onChange={handleChange} />
            <TextField required type="number" label="In Sem 3" name="ise3" value={Structure.ise3} onChange={handleChange} />
            <TextField required type="number" label="PR" name="PR" value={Structure.PR} onChange={handleChange} />
            <TextField required type="number" label="TW" name="TW" value={Structure.TW} onChange={handleChange} />
            <TextField required type="number" label="End Sem" name="ese" value={Structure.ese} onChange={handleChange} />
            <TextField required type="number" label="Total Marks" name="total_marks" value={Structure.total_marks} onChange={handleChange} />
            <TextField required type="number" label="Total Credits" name="total_credits" value={Structure.total_credits} onChange={handleChange} />
            <button onClick={handleEdit}>Submit</button>
        </div>
            </CardContent>
      
            </Card>
          </Box>
    )
}

export default UpdateStructure;