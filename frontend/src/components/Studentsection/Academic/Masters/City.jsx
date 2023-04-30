import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const City = () => {

  const [city, setCity] = useState([]);

  const fetchAllBranch = async () => {
    try {
      const res = await axios.get("http://localhost:3001/city");
      setCity(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {

    fetchAllBranch();
    // eslint-disable-next-line
  }, []);
  const navigate = useNavigate();


  const handleDelete = async (id) => {
    try {
      console.log(id)
      await axios.delete("http://localhost:3001/city/" + id)
      const res = await axios.get("http://localhost:3001/city");
      setCity(res.data);
      // window.location.reload()
      // navigate("/"); 
    } catch (err) {
      console.log(err);
    }

  }
  //   console.log(branch);

  return (

    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <CardHeader
          style={{ backgroundColor: "lightblue", textAlign: 'center' }}
          title="City Management"
        />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">City Id</TableCell>
                <TableCell align="center">City Name</TableCell>
                <TableCell align="center">State Id</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>

            </TableHead>
            <TableBody>
              {city.map((city) => (
                <TableRow
                  key={city.city_id} className="city"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">{city.city_name}</TableCell>
                  <TableCell align="center">{city.isDistrict}</TableCell>
                  <TableCell align="center">{city.state_id}</TableCell>
                  <TableCell align="center">
                    <Link to={`/updatecity/${city.city_id}`}><Button variant='contained' color='success'>Update</Button></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant='contained' color='error' onClick={() => handleDelete(city.city_id)}>Delete</Button>
                  </TableCell>
                </TableRow>

              ))}

            </TableBody>
          </Table>
        </TableContainer>
        <br></br>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

          <Link to="/addcity"><Button variant='contained'>Add new City</Button></Link>

        </Box>
      </CardContent>
    </Card>


    // <div>
    //     <h1>
    //         city info
    //     </h1>
    //     <div className="city">
    //     {city.map((city) => (
    //       <div key={city.city_id} className="city">
    //         <h2>{city.city_id}</h2>
    //         <p>{city.city_name}</p>
    //         <p>{city.isDistrict}</p>
    //         <p>{city.state_id}</p>
    //         <button className='update'><Link to={`/updatecity/${city.city_id}`}>Update</Link></button>
    //         <button className="delete" onClick={()=>handleDelete(city.city_id)}>Delete</button>
    //         </div>
    //     ))}
    //     <button>
    //         <Link to="/addcity">Add new City</Link>
    //     </button>
    // </div>
    // </div>
  )
}

export default City;
