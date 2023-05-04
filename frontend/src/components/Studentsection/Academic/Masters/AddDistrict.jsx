import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, TextField, Card, CardContent, CardHeader } from "@mui/material";
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AddDistrict() {

  const [District, setDistrict] = useState([]);

  const [addDistrict, setAddDistrict] = useState({
    district_id: "",
    district_name: "",
  });

  const fetchDistrict = async () => {
    try {
      const res = await axios.get("http://localhost:3001/district");
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
  const handleChange = (e) => {
    setAddDistrict((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/district", addDistrict);
      navigate("/district");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
  };

  //   console.log(branch);
  return (
    <div style={{ height: '100%', width: '100%' }}>
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
              title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px", textAlign: 'center' }}>Add District</h1>}
              style={{ backgroundColor: "lightblue", padding: "1px" }}
            />
            <div style={{ padding: '5px', marginTop: 30, marginLeft: 5 }}  >
              <Grid container spacing={1} >
                <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'left' }}>
                  <Grid item xs={12} sm={6} md={2} sx={{ p: 0, m: 0 }}>
                    <TextField
                      required
                      variant="outlined"
                      label="District ID"
                      name="district_id"
                      onChange={handleChange}
                      sx={{ m: 1, minWidth: 120, paddingLeft: 0 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={2} sx={{ p: 0, m: 0 }}>
                    <TextField
                      required
                      variant="outlined"
                      name="district_name"
                      label="District Name"
                      onChange={handleChange}
                      sx={{ m: 1, minWidth: 120, paddingLeft: 0 }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={2} sx={{ p: 0, m: 0 }}>
                    <Button variant="contained"
                      onClick={handleClick}
                      sx={{ ml: 1, alignSelf: 'center', mt: 1, height: 55 }} >Add</Button>

                  </Grid>
                </Grid>
              </Grid>
              <br />

              <TableContainer component={Paper} style={{ marginTop: 30 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead style={{ backgroundColor: '#1976d2' }}>

                    <TableRow>
                      <TableCell align="center">District Id</TableCell>
                      <TableCell align="center">District Name</TableCell>
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
                      </TableRow>

                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </CardContent>
        </Card>
      </Box>
    </div>
  )
}

export default AddDistrict