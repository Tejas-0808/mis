import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Box, TextField, Button } from '@mui/material/';
import {  InputLabel, FormControl, Select, MenuItem, CardContent, Card, CardHeader} from "@mui/material/";


const Masterscheme = () => {

  const [Masterscheme, setMasterscheme] = useState([]);

  const fetchAllMasterscheme = async () => {
    try {
        const res = await axios.get("http://localhost:3001/master_scheme",{
          headers: { authorization: localStorage.getItem('token') }
        });
        setMasterscheme(res.data);
        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}

  useEffect(() => {

    fetchAllMasterscheme();
    // eslint-disable-next-line
  }, []);
//   const navigate = useNavigate();

  
  const handleDelete= async (id) =>{
    try{
      console.log(id)
      await axios.delete("http://localhost:3001/master_scheme/"+id,{
        headers: { authorization: localStorage.getItem('token') }
      });
      const res = await axios.get("http://localhost:3001/master_scheme",{
        headers: { authorization: localStorage.getItem('token') }
      });
        setMasterscheme(res.data);
      // window.location.reload()
      // navigate("/");
    }catch(err){
      console.log(err);
    }

  }
  console.log(Masterscheme);

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
         title=" Master Scheme Info"
       />
    <div>
        
        <div className="Masterscheme">
        {Masterscheme.map((Masterscheme) => (
          <div key={Masterscheme.mastersch_id} className="Masterscheme">
            <p>{Masterscheme.master_scheme}</p>
            <p>{Masterscheme.from_year}</p>
            <p>{Masterscheme.to_year}</p>
            <button className='update'><Link to={`/updatemasterscheme/${Masterscheme.mastersch_id}`}>Update</Link></button>
            <button className="delete" onClick={()=>handleDelete(Masterscheme.mastersch_id)}>Delete</button>
            </div>
        ))}
        <button>
            <Link to="/addmasterscheme">Add new Master Scheme</Link>
        </button>
    </div>
    </div>
    </CardContent>
      
      </Card>
    </Box>
  )
}

export default Masterscheme;
