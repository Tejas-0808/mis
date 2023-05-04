import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import {  Button,InputLabel, FormControl, Select, MenuItem, CardContent, Card, CardHeader,Box} from "@mui/material/";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



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
    <div style={{ height: '100vh', width: '100%'}}>
  
    <Box
    component="form"
    sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" }, whiteSpace: 'normal', border: 1 }}
    noValidate
    autoComplete="off">
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
     
         
        
          <CardHeader
            title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px" }}>SCHEME INFORMATION</h1>}
            style={{ backgroundColor: "lightblue",padding: "1px"  }}
          />
  
  <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650}} aria-label="simple table">
          <TableHead>
        
            <TableRow>
              <TableCell align="center">Scheme ID</TableCell>
              {/* <TableCell align="right">Session ID</TableCell> */}
              <TableCell align="center">Master Scheme ID</TableCell>
              <TableCell align="center">Course Category ID</TableCell>
              <TableCell align="center">Full Time</TableCell>
              <TableCell align="center">Part Time</TableCell>
            </TableRow>
      
          </TableHead>
          <TableBody>
            {scheme.map((scheme) => (
              <TableRow
                key={scheme.scid}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {/* <TableCell component="th" scope="row">
                  {Session.session_id}
                </TableCell> */}
                <TableCell align="center">{scheme.scid}</TableCell>
                <TableCell align="center">{scheme.master_sch_id}</TableCell>
                <TableCell align="center">{scheme.category}</TableCell>
                <TableCell align="center">{scheme.ft}</TableCell>
                <TableCell align="center">{scheme.pt}</TableCell>
                <TableCell align="center">
                {/* <button className="delete" onClick={()=>handleDelete(scheme.scid)}>Delete</button> */}
                <Button color='error' variant='contained' className="delete" onClick={() => handleDelete(scheme.scid)}>Delete</Button>

  </TableCell>
                {/* < button className="delete" onClick={()=>handleDelete(branch.Branch_id)}>Delete</button>
              &nbsp;&nbsp;
               <button className="update"><Link to = {`/update/${branch.Branch_id}`}>Update</Link></button> */}
              </TableRow>
             
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <br></br>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      {/* <button>
      <Link to="/addbranch">Add new Branch</Link>
         </button> */}
          {/* <button>
          <Link to="/addscheme">Add new Scheme</Link>
        </button> */}
         <Link to="/addscheme"><Button variant='contained'>Add New Scheme</Button></Link>
         </Box>
         {/* <Button variant="contained" onClick={handleClick}>
            Add New Session
          </Button> */}
      </CardContent>
    </Card>
    </Box>
</div>
  )
}
  {/* /* // return (
  //   <div>
  //       <h1>
  //           Scheme info
  //       </h1>
  //       <div className="scheme">
  //       {scheme.map((scheme) => ( */}
  {/* //         <div key={scheme.scid} className="scheme">
  //           <p>{scheme.scid}</p>
  //           <p>{scheme.master_sch_id}</p>
  //           <p>{scheme.category}</p>
  //           <p>{scheme.ft}</p>
  //           <p>{scheme.pt}</p>
  //           <button className="delete" onClick={()=>handleDelete(scheme.scid)}>Delete</button>
  //           </div>
  //       ))}
  //       <button>
  //           <Link to="/addscheme">Add new Scheme</Link>
  //       </button>
  //   </div>
  //   </div>
  // ) */}


export default Scheme
