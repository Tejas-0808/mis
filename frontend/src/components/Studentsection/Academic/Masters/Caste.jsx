import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, CardHeader, TextField, } from "@mui/material";

const Caste = () => {

    const  [caste, setCaste] = useState([]);

    const fetchCaste = async () => {
        try{
            const res = await axios.get("http://localhost:3001/caste");
            setCaste(res.data);
            console.log(res.data);
        }   catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCaste();
    },[]);

    const navigate = useNavigate();

    const handleDelete= async (id) =>{
        try{
            console.log(id)
            await axios.delete("http://localhost:3001/caste/"+id)
            const res = await axios.get("http://localhost:3001/caste");
              setCaste(res.data);
            // window.location.reload()
            // navigate("/"); 
          }catch(err){
            console.log(err);
          }
    };

    return (
        <Card sx={{ minWidth: 275 }}>
      <h1>&nbsp;&nbsp;Masters</h1><hr />
      <CardContent>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" }, whiteSpace: 'normal', border: 1 }}
          noValidate
          autoComplete="off"
        >
          <CardHeader
            style={{ backgroundColor: "lightblue" }}
            title="Caste Management"
          />

    <div>
        {/* <h1>Caste Management</h1> */}
        <div className='caste'>
        {caste.map((caste) => (
            <div key={caste.caste_id} className="caste">
                <p>{caste.caste_id}</p>
                <p>{caste.caste_name}</p>
                {/* <button className='edit'><Link to={`/edit/${caste.caste_id}`}>Edit</Link></button> */}
                <Button variant="contained"className='update'><Link to={`/updatecaste/${caste.caste_id}`}size="medium">Update</Link></Button>
                <Button variant="contained"className="delete" onClick={()=>handleDelete(caste.caste_id)}size="medium">Delete</Button>

            </div>
        ))}
        </div>
      <hr></hr>
        <button className='AddCaste'><Link to='/addcaste'>ADD Caste</Link></button>
    </div>
    </Box>
    </CardContent>
    </Card>)
}

export default Caste;