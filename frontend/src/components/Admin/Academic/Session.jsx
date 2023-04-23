import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, CardHeader, TextField, } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Session = () => {

  const [Session, setSession] = useState([]);

  const fetchAllSession = async () => {
    try {
        const res = await axios.get("http://localhost:3001/session",{
          headers: { authorization: localStorage.getItem('token') }
        });
        setSession(res.data);
        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}

  useEffect(() => {

    fetchAllSession();
    // eslint-disable-next-line
  }, []);
  const navigate = useNavigate();
  const handleChange = (e) => {
    fetchAllSession ((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    axios.get('http://localhost:3001/session',{
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        const data = response.data;
        // const updatedSessions = data.map(item => ({
        //   ...item,
        //   session_name: `${item.term} ${item.year}-${(item.year+1).toString().substring(2)}`
        // }));
        setSession(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete= async (id) =>{
    try{
      console.log(id)
      await axios.delete("http://localhost:3001/session/"+id,{
        headers: { authorization: localStorage.getItem('token') }
      })
      const res = await axios.get("http://localhost:3001/session",{
        headers: { authorization: localStorage.getItem('token') }
      });
      console.log(res.data);
        setSession(res.data);
      // window.location.reload()
      navigate("/session");
    }catch(err){
      console.log(err);
    }

  }
  console.log(Session);

//   return (
    
//     <Box>
//     <Card sx={{ minWidth: 275 }}>
//       <h1>Educational Detail</h1><hr />
//       <CardContent>
       
//           component="form"
//           sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" }, whiteSpace: 'normal', border: 1 }}
//           noValidate
//           autoComplete="off"
        
//           <CardHeader
//             style={{ backgroundColor: "lightblue" }}
//             title="Student Educational Details"
//           />
// <div className="Session">
//         {Session.map((Session) => (
//           <d key={Session.session_id} className="Session">
//             <TextField required type="number" label="Session ID" name="Reg_id" onChange={handleChange} />
//             <TextField required type="text" label="Custom ID" name="Custom_Id" onChange={handleChange} />
//             <TextField required type="text" label="Exam Type " name="Exam_type" onChange={handleChange} />
//             <TextField required type="text" label="Month of passing" name="Month_of_Passing" onChange={handleChange} />
//             <TextField required type="number" label="Year of exam" name="Year_of_exam" onChange={handleChange} />
//             <TextField required type="text" label="Board " name="Board" onChange={handleChange} />
//             <TextField required type="text" label="School/College name" name="School_college_name" onChange={handleChange} />
//             <TextField required type="text" label="Address of school/college" name="Address_School_college" onChange={handleChange} />
//             <TextField required type="number" label="Marks Obtained" name="Marks_obtained" onChange={handleChange} />
//             <TextField required type="number" label="Out of " name="Out_of_marks" onChange={handleChange} />

//             <Button variant='contained' onClick={handleClick}>Add</Button>
      
//     {/* <div>
//         <h1>
//             Session Info 
//         </h1>
//         <div className="Session">
//         {Session.map((Session) => (
//           <div key={Session.session_id} className="Session">
//             <p>{Session.session_id}</p>
//             <p>{Session.session_name}</p>
//             <p>{Session.term}</p>
//             <p>{Session.year}</p>
//             <button className="delete" onClick={()=>handleDelete(Session.session_id)}>Delete</button>
//             </div>
//         ))} */}
        
//         <button>
//             <Link to="/addsession">Add new Session</Link>
//         </button>
//  </div>
   
//     </CardContent>
//     </Card>
//     </Box>

//   )
//         )       
// }
return (
  
  <Box
  component="form"
  sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" }, whiteSpace: 'normal', border: 1 }}
  noValidate
  autoComplete="off">
  <Card sx={{ minWidth: 275 }}>
    <CardContent>
   
       
      
        <CardHeader
          title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px" }}>Session Information</h1>}
          style={{ backgroundColor: "lightblue",padding: "1px"  }}
        />

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
      
          <TableRow>
            <TableCell align="center">Session ID</TableCell>
            {/* <TableCell align="right">Session ID</TableCell> */}
            <TableCell align="center">Session Name</TableCell>
            <TableCell align="center">Term</TableCell>
            <TableCell align="center">Year</TableCell>
          </TableRow>
    
        </TableHead>
        <TableBody>
          {Session.map((Session) => (
            <TableRow
              key={Session.session_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {Session.session_id}
              </TableCell> */}
              <TableCell align="center">{Session.session_id}</TableCell>
              <TableCell align="center">{Session.session_name}</TableCell>
              <TableCell align="center">{Session.term}</TableCell>
              <TableCell align="center">{Session.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br></br>
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <button>
           <Link to="/addsession" >Add new Session</Link>
       </button>
       </Box>
       {/* <Button variant="contained" onClick={handleClick}>
          Add New Session
        </Button> */}
    </CardContent>
  </Card>
  </Box>
)
}

export default Session
