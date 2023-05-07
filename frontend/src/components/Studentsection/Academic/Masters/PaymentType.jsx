import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const PaymentType = () => {

  const [payment, setPayment] = useState([]);

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

  useEffect(() => {

    fetchAllPayment();
    // eslint-disable-next-line
  }, []);
  const navigate = useNavigate();


  const handleDelete = async (id) => {
    try {
      console.log(id)
      await axios.delete("http://localhost:3001/payment/" + id,{
        headers: { authorization: localStorage.getItem('token') }
      })
      const res = await axios.get("http://localhost:3001/payment",{
        headers: { authorization: localStorage.getItem('token') }
      });
      setPayment(res.data);
      // window.location.reload()
      // navigate("/");
    } catch (err) {
      console.log(err);
    }

  }
  console.log(payment);

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
            title="Payment Management"
          />
          <hr />

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead style={{ backgroundColor: '#1976d2'} }>
                <TableRow>
                  <TableCell align="center">Payment Id</TableCell>
                  <TableCell align="center">Payment Name</TableCell>
                  <TableCell align="center"></TableCell>
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
                    <TableCell align="center">
                      <Link to={`/updatePayment/${payment.payment_id}`}><Button variant='contained' color='success'>Update</Button></Link>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <Button variant='contained' color='error' onClick={() => handleDelete(payment.payment_id)}>Delete</Button>
                    </TableCell>
                  </TableRow>

                ))}

              </TableBody>
            </Table>
          </TableContainer>
          <br></br>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

            <Link to="/addpayment"><Button variant='contained'>Add new Payment</Button></Link>

          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default PaymentType;
