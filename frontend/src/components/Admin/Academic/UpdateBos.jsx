import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Box, TextField, Button } from '@mui/material/';
import {  InputLabel, FormControl, Select, MenuItem, CardContent, Card, CardHeader} from "@mui/material/";


function UpdateBos(){
    const [Bos, setBos] = useState({bos_id: "" , bos_name: "", code:""});
    const navigate = useNavigate();
    const location = useLocation();
    
    console.log(location);
    const C_id = location.pathname.split("/")[2];

    const fetchBos = async() => {
        try{
            const res = await axios.get("http://localhost:3001/b_o_s/"+ C_id,{
                headers: { authorization: localStorage.getItem('token') }
              });
            setBos(res.data);
            console.log(Bos);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchBos();
    }, []);

    const handleChange = async (e) => {
        setBos((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        try{
            await axios.put("http://localhost:3001/b_o_s/" + C_id, Bos,{
                headers: { authorization: localStorage.getItem('token') }
              });
            navigate("/bos");
        }catch(err){
            console.log(err);
        }
        
    }

    return (
        <Box component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" },}}
        noValidate
        autoComplete="off"
      >
       
       <Card sx={{ m: 1, minWidth: 275 }}>
     
        
     <CardContent>

       <CardHeader
         style={{ backgroundColor: "lightblue" }}
         title="UPDATE BRANCH"
       />
        <div className='edit_form'>
        {/* <h2>EDIT BOS</h2> <hr /> */}
        <TextField type="number" required label="BOS ID" name="bos_id" value={Bos.bos_id} onChange={handleChange} />
        <TextField type="text" required label="BOS Name" name="bos_name" value={Bos.bos_name}onChange={handleChange} />
        <TextField type="text" required label="BOS Code" name="code" value={Bos.code}onChange={handleChange} />
        {/* <Button variant="contained" onClick={handleClick} sx={{ ml: 1, alignSelf: 'center',mt: 1,height: 55 }}>Add</Button> */}
        <Button color='success' variant="contained" onClick={handleEdit}  sx={{ ml: 1, alignSelf: 'center',mt: 1,height: 55 }}>Update</Button>
    </div>
    </CardContent>
      </Card>
      </Box>
 
    )
}

export default UpdateBos;