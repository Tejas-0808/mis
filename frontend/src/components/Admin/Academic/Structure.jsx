import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, CardHeader, TextField, } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Structure = () => {
  const [structure, setStructure] = useState([]);

  const fetchAllStructure = async () => {
    try {
      const res = await axios.get("http://localhost:3001/structure",{
        headers: { authorization: localStorage.getItem('token') }
      });
      setStructure(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    fetchAllStructure();
    // eslint-disable-next-line
  }, []);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete("http://localhost:3001/structure/" + id,{
        headers: { authorization: localStorage.getItem('token') }
      });
      const res = await axios.get("http://localhost:3001/structure",{
        headers: { authorization: localStorage.getItem('token') }
      });
      setStructure(res.data);
      // window.location.reload()
      // navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(structure);

//   return (
//     <div>
//       <h1>Structure</h1>
//       <div className="structure">
//         {structure.map((structure) => (
//           <div key={structure.strid} className="structure">
//             <h2>{structure.strid}</h2>
//             <p>{structure.scheme_id}</p>
//             <p>{structure.category}</p>
//             <p>{structure.branch_id}</p>
//             <p>{structure.board_of_study}</p>
//             <p>{structure.coursecode}</p>
//             <p>{structure.coursename}</p>
//             <p>{structure.lecture}</p>
//             <p>{structure.tut}</p>
//             <p>{structure.pract}</p>
//             <p>{structure.ise1}</p>
//             <p>{structure.ise2}</p>
//             <p>{structure.ise3}</p>
//             <p>{structure.PR}</p>
//             <p>{structure.TW}</p>
//             <p>{structure.ese}</p>
//             <p>{structure.total_marks}</p>
//             <p>{structure.total_credits}</p>
//             <button
//               className="delete"
//               onClick={() => handleDelete(structure.strid)}
//             >
//               Delete
//             </button>
//             <button className="update">
//               <Link to={`/updatestructure/${structure.strid}`}>Update</Link>
//             </button>
//           </div>
//         ))}
//         <button>
//           <Link to="/addstructure">Add new Structure</Link>
//         </button>
//       </div>
//     </div>
//   );
// };
return (
  
  <Box
  component="form"
  sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" }, whiteSpace: 'normal', border: 1 }}
  noValidate
  autoComplete="off">
  <Card sx={{ minWidth: 275 }}>
    <CardContent>
   
       
      
        <CardHeader
          title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px" }}>Structure Information</h1>}
          style={{ backgroundColor: "lightblue",padding: "1px"  }}
        />

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
      
          <TableRow>
            <TableCell align="center">Row</TableCell>
            {/* <TableCell align="right">Session ID</TableCell> */}
            <TableCell align="center">Master Scheme ID</TableCell>
            
            <TableCell align="center">Course Category</TableCell>
            <TableCell align="center">Semester</TableCell>
            <TableCell align="center">Branch ID</TableCell>
            <TableCell align="center">Board Of Study</TableCell>
            <TableCell align="center">Session ID</TableCell>
            <TableCell align="center">Course Code</TableCell>
            <TableCell align="center">Course Name</TableCell>
            <TableCell align="center">Lecture</TableCell>
            <TableCell align="center">Tutorial</TableCell>
            <TableCell align="center">Practical</TableCell>
            <TableCell align="center">ISE1</TableCell>
            <TableCell align="center">ISE2</TableCell>
            <TableCell align="center">ISE3</TableCell>
            <TableCell align="center">PR</TableCell>
            <TableCell align="center">TW</TableCell>
            <TableCell align="center">ESE</TableCell>
            <TableCell align="center">Total Marks</TableCell>
            <TableCell align="center">Total Credits</TableCell>
          
          </TableRow>
    
        </TableHead>
        <TableBody>
          {structure.map((structure) => (
            <TableRow
              key={structure.strid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {Session.session_id}
              </TableCell> */}
              <TableCell align="center">{structure.strid}</TableCell>
              <TableCell align="center">{structure.scheme_id}</TableCell>
              <TableCell align="center">{structure.category}</TableCell>
              <TableCell align="center">{structure.branch_id}</TableCell>
              <TableCell align="center">{structure.board_of_study}</TableCell>
              <TableCell align="center">{structure.coursecode}</TableCell>
              <TableCell align="center">{structure.coursename}</TableCell>
              <TableCell align="center">{structure.lecture}</TableCell>
              <TableCell align="center">{structure.tut}</TableCell>
              <TableCell align="center">{structure.pract}</TableCell>
              <TableCell align="center">{structure.ise1}</TableCell>
              <TableCell align="center">{structure.ise2}</TableCell>
              <TableCell align="center">{structure.ise3}</TableCell>
              <TableCell align="center">{structure.PR}</TableCell>
              <TableCell align="center">{structure.TW}</TableCell>
              <TableCell align="center">{structure.ese}</TableCell>
              <TableCell align="center">{structure.total_marks}</TableCell>
              <TableCell align="center">{structure.total_credits}</TableCell>
              <TableCell align="center">
            <button
            className="delete"
               onClick={() => handleDelete(structure.strid)}
           >
            Delete
           </button>
          <button className="update">
             <Link to={`/updatestructure/${structure.strid}`}>Update</Link>
            </button>
            </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br></br>
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <button>
    <Link to="/addstructure">Add New Structure</Link>
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
export default Structure;
