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

const B_o_s = () => {

  const [B_o_s, setB_o_s] = useState([]);

  const fetchB_o_s = async () => {
    try {
      const res = await axios.get("http://localhost:3001/b_o_s", {
        headers: { authorization: localStorage.getItem('token') }
      });
      setB_o_s(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchB_o_s();
  }, []);

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      console.log(id)
      await axios.delete("http://localhost:3001/b_o_s/" + id, {
        headers: { authorization: localStorage.getItem('token') }
      })
      const res = await axios.get("http://localhost:3001/b_o_s", {
        headers: { authorization: localStorage.getItem('token') }
      });
      setB_o_s(res.data);
      // window.location.reload()
      // navigate("/"); 
    } catch (err) {
      console.log(err);
    }
  };

  // return (
  //     <Box component="form"
  //     sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" },}}
  //     noValidate
  //     autoComplete="off"
  //     >
  //        <Card sx={{ m: 1, minWidth: 275 }}>


  //      <CardContent>

  //        <CardHeader
  //          style={{ backgroundColor: "lightblue" }}
  //          title="ADD BOS"
  //        /><div>
  //     <h1>B_o_s Management</h1>
  //     <div className='B_o_s'>
  //     {B_o_s.map((B_o_s) => (
  //         <div key={B_o_s.bos_id} className="B_o_s">
  //             <p>{B_o_s.bos_id}</p>
  //             <p>{B_o_s.bos_name}</p>
  //             <p>{B_o_s.code}</p>


  //             <button className='update'><Link to={`/updatebos/${B_o_s.bos_id}`}>Update</Link></button>
  //             <button className="delete" onClick={()=>handleDelete(B_o_s.bos_id)}>Delete</button>
  //         </div>
  //     ))}
  //     </div>
  //     <button className='AddBos'><Link to='/addbos'>ADD B_o_s</Link></button>
  // </div>
  // </CardContent>

  //   </Card>
  // </Box>
  // )
  return (
    <div style={{ height: '100vh', width: '100%' }}>

      <Box style={{ maxHeight: 650, overflow: 'auto' }}
        component="form"
        sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" }, whiteSpace: 'normal', border: 1 }}
        noValidate
        autoComplete="off">
        <Card sx={{ minWidth: 275, backgroundColor: '#F5F5F5' }}>
          <CardContent>



            <CardHeader
              title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px" }}>BOS INFORMATION</h1>}
              style={{ backgroundColor: "lightblue", padding: "1px" }}
            />

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>

                  <TableRow>
                    <TableCell align="center">ID</TableCell>
                    {/* <TableCell align="right">Session ID</TableCell> */}
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Code</TableCell>
                  </TableRow>

                </TableHead>
                <TableBody>
                  {B_o_s.map((B_o_s, index) => (
                    <TableRow
                      key={B_o_s.bos_id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      {/* <TableCell component="th" scope="row">
                    {Session.session_id}
                  </TableCell> */}
                      <TableCell align="center">{index}</TableCell>
                      <TableCell align="center">{B_o_s.bos_name}</TableCell>
                      <TableCell align="center">{B_o_s.code}</TableCell>

                      <TableCell align="center">
                        <Link to={`/updatebos/${B_o_s.bos_id}`}><Button color='success' variant='contained' className='update'>Update</Button></Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {/* <button className="delete" onClick={()=>handleDelete(B_o_s.bos_id)}>Delete</button> */}
                        <Button color='error' variant='contained' className="delete" onClick={() => handleDelete(B_o_s.bos_id)}>Delete</Button>
                        {/* <button className="delete" onClick={()=>handleDelete(scheme.scid)}>Delete</button>
   */}
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
              {/* <button className='AddBos'><Link to='/addbos'>ADD B_o_s</Link></button> */}
              <Link to="/addbos"><Button variant='contained' className='AddBos'>Add B_o_s</Button></Link>
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


export default B_o_s;