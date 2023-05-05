import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, TextField, Card, CardContent, CardHeader ,InputLabel, FormControl, Select,  MenuItem} from "@mui/material";
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Addcity() {
  const [City, setCity] = useState([]);
  const [addCity, setAddCity] = useState({
    city_name: "",
    isDistrict: "",
    state_id: "",
  });

  const [state, setState] = useState([]);

  const fetchAllCities = async () => {
    try {
      const res = await axios.get("http://localhost:3001/city", {
        headers: { authorization: localStorage.getItem('token') }
      });
      setCity(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const fetchAllStates = async () =>{
    try {
      const res = await axios.get("http://localhost:3001/state", {
        headers: { authorization: localStorage.getItem('token') }
      });
      setState(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchAllCities();
    fetchAllStates();
  }, []);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setAddCity((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/city", addCity, {
        headers: { authorization: localStorage.getItem('token') }
      });
      console.log(res);
      navigate("/city");
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
              style={{ backgroundColor: "lightblue" }}
              title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px", textAlign: 'center' }}>Add City</h1>}
            />
            <div style={{ padding: '5px', marginTop: 30, marginLeft: 5 }}  >
              <Grid container spacing={1} >
                <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'left' }}>
                  <Grid item xs={12} sm={6} md={2} sx={{ p: 0, m: 0 }}>
                   
                  </Grid>
                  <Grid item xs={12} sm={6} md={2} sx={{ p: 0, m: 0 }}>
                    <TextField
                      required
                      variant="outlined"
                      name="city_name"
                      label="City Name"
                      onChange={handleChange}
                      sx={{ m: 1, minWidth: 120, paddingLeft: 0 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={2} sx={{ p: 0, m: 0 }}>
                    <TextField
                      required
                      variant="outlined"
                      name="isDistrict"
                      label="Is District"
                      onChange={handleChange}
                      sx={{ m: 1, minWidth: 120, paddingLeft: 0 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={2} sx={{ p: 0, m: 0 }}>
                  <FormControl sx={{ m: 1, minWidth: 180 }}>
                    <InputLabel id="demo-simple-select-helper-label">State</InputLabel>
                    <Select
                      required
                      name="state_id"
                      className="form-select-state"
                      labelId="demo-simple-select-helper-label"
                      label="State"
                      onChange={handleChange}
                      sx={{ height: 55}}
                    >
                      <MenuItem value="">
                        <em>-- Select State --</em>
                      </MenuItem>
                      {state.map((item) => (
                        <MenuItem key={item.state_id} value={item.state_id}>
                          {item.state_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>


                    {/* <TextField
                      required
                      variant="outlined"
                      label="State ID"
                      name="state_id"
                      onChange={handleChange}
                      sx={{ m: 1, minWidth: 120, paddingLeft: 0 }}
                    /> */}
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
                      <TableCell align="center">City Name</TableCell>
                      <TableCell align="center">State Id</TableCell>
                    </TableRow>

                  </TableHead>
                  <TableBody>
                    {City.map((city) => (
                      <TableRow
                        key={city.city_id} className="city"
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align="center">{city.city_name}</TableCell>
                        <TableCell align="center">{city.state_id}</TableCell>
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

export default Addcity