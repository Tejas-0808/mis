import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Card, CardContent, CardHeader } from "@mui/material";
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AddCaste() {
  const [Caste, setCaste] = useState([]);
  const [Addcaste, setAddCaste] = useState({
    caste_name : ""
});

  const fetchAllCaste = async () => {
    try {
      const res = await axios.get("http://localhost:3001/caste", {
        headers: { authorization: localStorage.getItem('token') }
      });
      setCaste(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchAllCaste();
    // eslint-disable-next-line
  }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAddCaste((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const caste_name1 = `${Caste.caste_name}`;
  //     console.log(Caste);
  //     setCaste(prevState => ({
  //       ...prevState,
  //       caste_name: caste_name1
  //     }));
  //     await axios.post("http://localhost:3001/caste", Addcaste, {
  //       headers: { authorization: localStorage.getItem('token') }
  //     });
  //     navigate("/caste");
  //   } catch (err) {
  //     console.log(err);
  //     // setError(true)
  //   }
  // };.
  const handleClick = async (e) => {

    e.preventDefault();
    try {
      // const session_name1=  `${Session.term} ${Session.year}-${(Session.year%100+1)}`

      console.log(Caste);
  // setSession(prevState => ({
  //   ...prevState,
  //   // session_name: session_name1
  // }));
      await axios.post("http://localhost:3001/caste", Addcaste,{
        headers: { authorization: localStorage.getItem('token') }
      });
      navigate("/caste");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
  };

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
              style={{ backgroundColor: "lightblue" }}
              title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px", textAlign: 'center' }}>Add Caste</h1>}
            />
            <div style={{ padding: '5px', marginTop: 30, marginLeft: 5 }}  >
              <Grid container spacing={1} >
                <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'left' }}>
                  {/* <Grid item xs={12} sm={6} md={2} sx={{ p: 0, m: 0 }}>
                     <TextField
                      required
                      type="number"
                      variant="outlined"
                      label="Caste ID"
                      name="caste_id"
                      onChange={handleChange}
                      sx={{ m: 1, minWidth: 120, paddingLeft: 0 }}
                    /> 
                  </Grid> */}
                  <Grid item xs={12} sm={6} md={2} sx={{ p: 0, m: 0 }}>
                    <TextField
                      required
                      variant="outlined"
                      name="caste_name"
                      label="Caste Name"
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
                      <TableCell align="center">Caste ID</TableCell>
                      <TableCell align="center">Caste Name</TableCell>
                    </TableRow>

                  </TableHead>
                  <TableBody>
                    {Caste.map((caste) => (
                      <TableRow
                        key={caste.caste_id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align="center">{caste.caste_id}</TableCell>
                        <TableCell align="center">{caste.caste_name}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>

          </CardContent >
        </Card >
      </Box >
    </div>
  )
}

export default AddCaste