import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const State = () => {

  const [state, setState] = useState([]);

  const fetchAllState = async () => {
    try {
      const res = await axios.get("http://localhost:3001/state");
      setState(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {

    fetchAllState();
    // eslint-disable-next-line
  }, []);
  const navigate = useNavigate();


  const handleDelete = async (id) => {
    try {
      console.log(id)
      await axios.delete("http://localhost:3001/state/" + id)
      const res = await axios.get("http://localhost:3001/state");
      setState(res.data);
      // window.location.reload()
      // navigate("/"); 
    } catch (err) {
      console.log(err);
    }

  }
  //   console.log(branch);

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
            title="State Management"
          />

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">State Id</TableCell>
                  <TableCell align="center">State Name</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>

              </TableHead>
              <TableBody>
                {state.map((state) => (
                  <TableRow
                    key={state.state_id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center">{state.state_id}</TableCell>
                    <TableCell align="center">{state.state_name}</TableCell>
                    <TableCell align="center">
                      <Link to={`/updatestate/${state.state_id}`}><Button variant='contained' color='success'>Update</Button></Link>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <Button variant='contained' color='error' onClick={() => handleDelete(state.state_id)}>Delete</Button>
                    </TableCell>
                  </TableRow>

                ))}

              </TableBody>
            </Table>
          </TableContainer>
          <br></br>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

            <Link to="/addstate"><Button variant='contained'>Add new State</Button></Link>

          </Box>
        </CardContent>
      </Card>
    </Box>
    // <div>
    //     <h1>
    //         State info
    //     </h1>
    //     <div className="State">
    //     {state.map((state) => (
    //       <div key={state.state_id} className="State">
    //         <h2>{state.state_id}</h2>
    //         <p>{state.state_name}</p>
    //         <button className='update'><Link to={`/updatestate/${state.state_id}`}>Update</Link></button>
    //         <button className="delete" onClick={()=>handleDelete(state.state_id)}>Delete</button>
    //         </div>
    //     ))}
    //     <button>
    //         <Link to="/addstate">Add new State</Link>
    //     </button>
    // </div>
    // </div>
  )
}

export default State;
