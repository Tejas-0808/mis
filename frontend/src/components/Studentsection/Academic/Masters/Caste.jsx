import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const Caste = () => {

  const [caste, setCaste] = useState([]);

  const fetchCaste = async () => {
    try {
      const res = await axios.get("http://localhost:3001/caste",{
        headers: { authorization: localStorage.getItem('token') }
      });
      setCaste(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchCaste();
  }, []);

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      console.log(id)
      await axios.delete("http://localhost:3001/caste/" + id, {
        headers: { authorization: localStorage.getItem('token') }
      })
      const res = await axios.get("http://localhost:3001/caste", {
        headers: { authorization: localStorage.getItem('token') }
      });
      setCaste(res.data);
      // window.location.reload()
      // navigate("/"); 
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        width: '100%', height: '100%'
      }}
      noValidate
      autoComplete="off">
      <Card sx={{
        m: 1, minWidth: 275, backgroundColor: '#F5F5F5'
      }}>
        <CardContent>
          <CardHeader
            style={{ backgroundColor: "lightblue", textAlign: 'center' }}
            title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px", textAlign: 'center' }}>Caste Management</h1>}
          />

          <hr />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead style={{ backgroundColor: '#1976d2'} }>
                <TableRow>
                  <TableCell align="center">Caste ID</TableCell>
                  <TableCell align="center">Caste Name</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>

              </TableHead>
              <TableBody  style={{fontSize: "40px"}}>
                {caste.map((caste) => (
                  <TableRow
                    key={caste.caste_id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >

                    <TableCell align="center" >{caste.caste_id}</TableCell>
                    <TableCell align="center" >{caste.caste_name}</TableCell>
                    <TableCell align="center">
                      <Link to={`/updatecaste/${caste.caste_id}`} size="medium"><Button variant="contained" color='success' className='update'>Update</Button></Link>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <Button variant="contained" color='error' className="delete" onClick={() => handleDelete(caste.caste_id)} size="medium">Delete</Button>
                    </TableCell>
                  </TableRow>

                ))}

              </TableBody>
            </Table>
          </TableContainer>
          <br></br>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

            <Link to="/addcaste"><Button variant='contained'>Add new Caste</Button></Link>

          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Caste;