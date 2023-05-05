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


const Masterscheme = () => {

  const [Masterscheme, setMasterscheme] = useState([]);

  const fetchAllMasterscheme = async () => {
    try {
      const res = await axios.get("http://localhost:3001/master_scheme", {
        headers: { authorization: localStorage.getItem('token') }
      });
      setMasterscheme(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {

    fetchAllMasterscheme();
    // eslint-disable-next-line
  }, []);
  //   const navigate = useNavigate();


  const handleDelete = async (id) => {
    try {
      console.log(id)
      await axios.delete("http://localhost:3001/master_scheme/" + id, {
        headers: { authorization: localStorage.getItem('token') }
      });
      const res = await axios.get("http://localhost:3001/master_scheme", {
        headers: { authorization: localStorage.getItem('token') }
      });
      setMasterscheme(res.data);
      // window.location.reload()
      // navigate("/");
    } catch (err) {
      console.log(err);
    }

  }
  console.log(Masterscheme);

  // return (
  //   <div>
  //       <h1>
  //           Master Scheme info
  //       </h1>
  //       <div className="Masterscheme">
  //       {Masterscheme.map((Masterscheme) => (
  //         <div key={Masterscheme.mastersch_id} className="Masterscheme">
  //           <p>{Masterscheme.master_scheme}</p>
  //           <p>{Masterscheme.from_year}</p>
  //           <p>{Masterscheme.to_year}</p>
  //           <button className='update'><Link to={`/updatemasterscheme/${Masterscheme.mastersch_id}`}>Update</Link></button>
  //           <button className="delete" onClick={()=>handleDelete(Masterscheme.mastersch_id)}>Delete</button>
  //           </div>
  //       ))}
  //       <button>
  //           <Link to="/addmasterscheme">Add new Master Scheme</Link>
  //       </button>
  //   </div>
  //   </div>
  // )
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
              title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px" }}>MASTER SCHEME INFORMATION</h1>}
              style={{ backgroundColor: "lightblue", padding: "1px" }}
            />

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>

                  <TableRow>
                    <TableCell align="center">Master Scheme ID</TableCell>
                    {/* <TableCell align="right">Session ID</TableCell> */}
                    <TableCell align="center">Master Scheme</TableCell>
                    <TableCell align="center">From Year</TableCell>
                    <TableCell align="center">To Year</TableCell>
                  </TableRow>

                </TableHead>
                <TableBody>
                  {Masterscheme.map((Masterscheme) => (
                    <TableRow
                      key={Masterscheme.mastersch_id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      {/* <TableCell component="th" scope="row">
                  {Session.session_id}
                </TableCell> */}
                      <TableCell align="center">{Masterscheme.mastersch_id}</TableCell>
                      <TableCell align="center">{Masterscheme.master_scheme}</TableCell>
                      <TableCell align="center">{Masterscheme.from_year}</TableCell>
                      <TableCell align="center">{Masterscheme.to_year}</TableCell>
                      <TableCell align="center">


                        <Link to={`/updatemasterscheme/${Masterscheme.mastersch_id}`}><Button color='success' variant='contained' className="update">Update</Button></Link>
                        &nbsp;&nbsp;&nbsp;
                        <Button color='error' variant='contained' className="delete" onClick={() => handleDelete(Masterscheme.mastersch_id)}>Delete</Button>

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

              <Link to="/addmasterscheme"><Button variant='contained'>Add new Master Scheme</Button></Link>

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

export default Masterscheme;
