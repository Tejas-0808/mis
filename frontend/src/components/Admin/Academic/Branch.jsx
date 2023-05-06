import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Button, InputLabel, FormControl, Select, MenuItem, CardContent, Card, CardHeader, Box } from "@mui/material/";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Branch = () => {

  const [branch, setBranch] = useState([]);
  const token = localStorage.getItem('token')
  const fetchAllBranch = async () => {
    try {
      const res = await axios.get("http://localhost:3001/branch", {
        headers: { authorization: token }
      });
      setBranch(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {

    fetchAllBranch();
    // eslint-disable-next-line
  }, []);
  const navigate = useNavigate();


  const handleDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete("http://localhost:3001/branch/" + id, {
        headers: { authorization: token }
      });
      const res = await axios.get("http://localhost:3001/branch", {
        headers: { authorization: token }
      });
      setBranch(res.data);
      // window.location.reload()
      // navigate("/");
    } catch (err) {
      console.log(err);
    }

  }
  console.log(branch);

  // return (
  // <Box component="form"
  //     sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" },}}
  //     noValidate
  //     autoComplete="off"
  //     >
  //        <Card sx={{ m: 1, minWidth: 275 }}>


  //      <CardContent>

  //        <CardHeader
  //          style={{ backgroundColor: "lightblue" }}
  //          title="BRANCH INFORMATION"
  //        />
  // <div>
  //     {/* <h1>
  //         branch info
  //     </h1> */}
  //     <div className="branch">
  //     {branch.map((branch) => (
  //       <div key={branch.Branch_id} className="branch">
  //         <h2>{branch.Branch_id}</h2>
  //         <p>{branch.Branch_name}</p>
  //         <p>{branch.HOD}</p>
  //         <p>{branch.Students_enrolled}</p>
  //         <button className="delete" onClick={()=>handleDelete(branch.Branch_id)}>Delete</button>
  //         <button className="update"><Link to = {`/update/${branch.Branch_id}`}>Update</Link></button>
  //         </div>
  //     ))}
  //     <button>
  //         <Link to="/add">Add new Branch</Link>
  //     </button>
  // </div>
  // </div>
  // </CardContent>

  //   </Card>
  // </Box>
  return (
    <div style={{ height: '100vh', width: '100%' }}>

      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" }, whiteSpace: 'normal', border: 1 }}
        noValidate
        autoComplete="off">
        <Card sx={{ minWidth: 275, backgroundColor: '#F5F5F5' }}>
          <CardContent>

            <CardHeader
              title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px" }}>Branch Information</h1>}
              style={{ backgroundColor: "lightblue", padding: "1px" }}
            />

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Branch ID</TableCell>
                    {/* <TableCell align="right">Session ID</TableCell> */}
                    <TableCell align="center">Branch Name</TableCell>
                    <TableCell align="center">HOD</TableCell>
                    <TableCell align="center">Students Enrolled</TableCell>
                  </TableRow>

                </TableHead>
                <TableBody>
                  {branch.map((branch) => (
                    <TableRow
                      key={branch.Branch_id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      {/* <TableCell component="th" scope="row">
                    {Session.session_id}
                  </TableCell> */}
                      <TableCell align="center">{branch.Branch_id}</TableCell>
                      <TableCell align="center">{branch.Branch_name}</TableCell>
                      <TableCell align="center">{branch.HOD}</TableCell>
                      <TableCell align="center">{branch.Students_enrolled}</TableCell>
                      <TableCell align="center">
                        {/* <button className="delete" onClick={() => handleDelete(branch.Branch_id)}>Delete</button> */}


                        <Link to={`/update/${branch.Branch_id}`}><Button color='success' variant='contained' className='update'>Update</Button></Link>
                        &nbsp;&nbsp;&nbsp;
                        <Button color='error' variant='contained' className="delete" onClick={() => handleDelete(branch.Branch_id)}>Delete</Button>
                        {/* <button className="update">
        <Link to={`/update/${branch.Branch_id}`}>Update</Link>
      </button> */}
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
              <Link to="/addbranch"><Button variant='contained' className='AddBos'>Add New Branch</Button></Link>
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

export default Branch
