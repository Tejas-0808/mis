import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const District = () => {

  const [District, setDistrict] = useState([]);

  const fetchDistrict = async () => {
    try {
      const res = await axios.get("http://localhost:3001/district",{
        headers: { authorization: localStorage.getItem('token') }
      });
      setDistrict(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchDistrict();
  }, []);

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      console.log(id)
      await axios.delete("http://localhost:3001/district/" + id,{
        headers: { authorization: localStorage.getItem('token') }
      })
      const res = await axios.get("http://localhost:3001/district",{
        headers: { authorization: localStorage.getItem('token') }
      });
      setDistrict(res.data);
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
            title="District Management"
          />
        <hr />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead style={{ backgroundColor: '#1976d2'} }>
                <TableRow>
                  <TableCell align="center">District Id</TableCell>
                  <TableCell align="center">District Name</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>

              </TableHead>
              <TableBody>
                {District.map((District) => (
                  <TableRow
                    key={District.district_id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center">{District.district_id}</TableCell>
                    <TableCell align="center">{District.district_name}</TableCell>
                    <TableCell align="center">
                      <Link to={`/updatedistrict/${District.district_id}`}><Button variant='contained' color='success'>Update</Button></Link>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <Button variant='contained' color='error' onClick={() => handleDelete(District.district_id)}>Delete</Button>
                    </TableCell>
                  </TableRow>

                ))}

              </TableBody>
            </Table>
          </TableContainer>
          <br></br>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

            <Link to="/adddistrict"><Button variant='contained'>Add new District</Button></Link>

          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default District;