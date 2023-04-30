import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Box, Button, TextField, Card, CardContent, CardHeader } from "@mui/material";


function UpdateCity() {
  const [City, setCity] = useState({ city_id: "", city_name: "", isDistrict: "", state_id: "" });
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  const C_id = location.pathname.split("/")[2];

  const fetchCity = async () => {
    try {
      const res = await axios.get("http://localhost:3001/city/" + C_id);
      setCity(res.data);
      console.log(City);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchCity();
  }, []);

  const handleChange = async (e) => {
    setCity((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3001/city/" + C_id, City);
      navigate("/city");
    } catch (err) {
      console.log(err);
    }

  }

  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" }, whiteSpace: 'normal' }}
      noValidate
      autoComplete="off">

      <Card sx={{ minWidth: 275 }}>
        <CardContent>

          <CardHeader
            title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px", textAlign: 'center' }}>Update City</h1>}
            style={{ backgroundColor: "lightblue", padding: "1px" }}
          />
          <div className="form">
            <TextField
              required
              type="number"
              variant="outlined"
              label="City ID"
              name="city_id"
              value={City.city_id}
              onChange={handleChange}
            />
            <TextField
              required
              variant="outlined"
              name="city_name"
              label="City Name"
              value={City.city_name}
              onChange={handleChange}
            />
            <TextField
              required
              variant="outlined"
              name="isDistrict"
              label="Is District"
              value={City.isDistrict}
              onChange={handleChange}
            />
            <TextField
              required
              type="number"
              variant="outlined"
              label="State ID"
              name="state_id"
              value={City.state_id}
              onChange={handleChange} />

            <Button sx={{ ml: 1, alignSelf: 'center', mt: 1, height: 55 }} variant="contained" onClick={handleEdit}>Submit</Button>
          </div>
        </CardContent>
      </Card>
    </Box>)
}

export default UpdateCity;