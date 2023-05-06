import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, Card, TextField, CardHeader, CardContent,FormControl,InputLabel,Select, MenuItem } from "@mui/material";
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AddPayment() {
  const [payment, setPayment] = useState([]);


  const [addPayment, setAddPayment] = useState({
    
    payment_type: "",
    category_id: "",
  });

  const fetchAllPayment = async () => {
    try {
      const res = await axios.get("http://localhost:3001/payment",{
        headers: { authorization: localStorage.getItem('token') }
      });
      setPayment(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  
  const [category, setCategory] = useState([]);

  const fetchCategory = async () => {
      try {
          const res = await axios.get("http://localhost:3001/category",{
              headers: { authorization: localStorage.getItem('token') }
            });
          setCategory(res.data);
          console.log(res.data);
      } catch (err) {
          console.log(err);
      }
  }

  useEffect(() => {

    fetchAllPayment();
    fetchCategory();
    // eslint-disable-next-line
  }, []);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setAddPayment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/payment", addPayment,{
        headers: { authorization: localStorage.getItem('token') }
      });
      navigate("/payment");
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
              title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px", textAlign: 'center' }}>Add Payment</h1>}
              style={{ backgroundColor: "lightblue", padding: "1px" }}
            />
            <div style={{ padding: '5px', marginTop: 30, marginLeft: 5 }}  >
              <Grid container spacing={1} >
                <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'left' }}>
                  
                  <Grid item xs={12} sm={6} md={2} sx={{ p: 0, m: 0 }}>
                    <TextField
                      required
                      variant="outlined"
                      name="payment_type"
                      label="Payment Type"
                      onChange={handleChange}
                      sx={{ m: 1, minWidth: 120, paddingLeft: 0 }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={2} sx={{ p: 0, m: 0 }}>
                  <FormControl sx={{ m: 1, minWidth: 180 , width: '100%' }}>
                    <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                    <Select
                      required
                      name="category_id"
                      className="form-select-category"
                      labelId="demo-simple-select-helper-label"
                      label="Category"
                      onChange={handleChange}
                      sx={{ height: 55}}
                    >
                      <MenuItem value="">
                        <em>-- Select Category --</em>
                      </MenuItem>
                      {category.map((item) => (
                        <MenuItem key={item.category_id} value={item.category_id}>
                          {item.category_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                    {/* <TextField
                      required
                      variant="outlined"
                      name="category_id"
                      label="Category"
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


<hr />
              <TableContainer component={Paper} style={{ marginTop: 30 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead style={{ backgroundColor: '#1976d2' }}>

                    <TableRow>
                      <TableCell align="center">Payment ID</TableCell>
                      <TableCell align="center">Payment Type</TableCell>
                    </TableRow>

                  </TableHead>
                  <TableBody>
                    {payment.map((payment) => (
                      <TableRow
                        key={payment.payment_id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align="center">{payment.payment_id}</TableCell>
                        <TableCell align="center">{payment.payment_type}</TableCell>
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

export default AddPayment