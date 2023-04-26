import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Box, TextField, Button } from '@mui/material/';
import {  InputLabel, FormControl, Select, MenuItem, CardContent, Card, CardHeader} from "@mui/material/";


const Scheme = () => {

  const [scheme, setScheme] = useState([]);

  const fetchAllScheme = async () => {
    try {
        const res = await axios.get("http://localhost:3001/scheme",{
          headers: { authorization: localStorage.getItem('token') }
        });
        setScheme(res.data);
        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}

  useEffect(() => {

    fetchAllScheme();
    // eslint-disable-next-line
  }, []);
//   const navigate = useNavigate();

  
  const handleDelete= async (id) =>{
    try{
      console.log(id)
      await axios.delete("http://localhost:3001/scheme/"+id,{
        headers: { authorization: localStorage.getItem('token') }
      })
      const res = await axios.get("http://localhost:3001/scheme",{
        headers: { authorization: localStorage.getItem('token') }
      });
        setScheme(res.data);
      // window.location.reload()
      // navigate("/");
    }catch(err){
      console.log(err);
    }

  }
  console.log(scheme);

  return (
    <Box component="form"
    sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" },}}
    noValidate
    autoComplete="off"
    >
       <Card sx={{ m: 4, minWidth: 275 }}>
     
        
     <CardContent>

       <CardHeader
         style={{ backgroundColor: "lightblue" }}
         title="Scheme Information"
       />
    <div>
        {/* <h1>
            Scheme info
        </h1> */}
        <div className="scheme">
        {scheme.map((scheme) => (
          <div key={scheme.scid} className="scheme">
            <p>{scheme.scid}</p>
            <p>{scheme.master_sch_id}</p>
            <p>{scheme.category}</p>
            <p>{scheme.ft}</p>
            <p>{scheme.pt}</p>
            <button className="delete" onClick={()=>handleDelete(scheme.scid)}>Delete</button>
            </div>
        ))}
        <button>
            <Link to="/addscheme">Add new Scheme</Link>
        </button>
    </div>
    </div>
    </CardContent>
      
      </Card>
    </Box>
  )
}

export default Scheme
