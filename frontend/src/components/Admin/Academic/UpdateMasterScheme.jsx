import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Box, TextField, Button } from '@mui/material/';
import {  InputLabel, FormControl, Select, MenuItem, CardContent, Card, CardHeader} from "@mui/material/";

function UpdateMasterscheme() {
    const [Masterscheme, setMasterscheme] = useState({ mastersch_id: "", master_scheme: "", from_year: "", to_year: "" });
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location);
    const C_id = location.pathname.split("/")[2];

    const fetchMasterscheme = async () => {
        try {
            const res = await axios.get("http://localhost:3001/masterscheme/" + C_id ,{
                headers: { authorization: localStorage.getItem('token') }
              });
            setMasterscheme(res.data);
            console.log(Masterscheme);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchMasterscheme();
    }, []);

    const handleChange = async (e) => {
        setMasterscheme((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://localhost:3001/masterscheme/" + C_id, Masterscheme ,{
                headers: { authorization: localStorage.getItem('token') }
              });
            navigate("/masterscheme");
        } catch (err) {
            console.log(err);
        }

    }

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
         title="UPDATE MASTER SCHEME"
       />
            <div className='edit_form'>
                {/* <h2>EDIT MASTER SCHEME</h2> <hr /> */}

                <TextField required type="number" label=" Master ID" name="mastersch_id" value={Masterscheme.mastersch_id} onChange={handleChange} />
                <TextField required type="text" label="Master scheme" name="master_scheme" value={Masterscheme.master_scheme} onChange={handleChange} />
                <TextField required type="number" label="From Year" name="from_year" value={Masterscheme.from_year} onChange={handleChange} />
                <TextField required type="number" label="To Year" name="to_year" value={Masterscheme.to_year} onChange={handleChange} />
                {/* <Button variant="contained" onClick={handleEdit}>Submit</Button> */}
                <Button color='success' variant="contained" onClick={handleEdit}  sx={{ ml: 1, alignSelf: 'center',mt: 1,height: 55 }}>Update</Button>
            </div>
            </CardContent>
      </Card>
        </Box>)
}

export default UpdateMasterscheme;