import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, Card, TextField, CardHeader, CardContent } from "@mui/material";



function AddCategory() {
  const [category, setCategory] = useState({
    category_id: "",
    category_name: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setCategory((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/category", category);
      navigate("/category");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
  };

  //   console.log(branch);
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" }, whiteSpace: 'normal' }}
      noValidate
      autoComplete="off">

      <Card sx={{ minWidth: 275 }}>
        <CardContent>

          <CardHeader
            title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px", textAlign: 'center' }}>Add Category</h1>}
            style={{ backgroundColor: "lightblue", padding: "1px" }}
          />
          <div className="form">

            <TextField
              required
              type="number"
              variant="outlined"
              label="Category ID"
              name="category_id"
              onChange={handleChange}
            />
            {/* <input type="number" placeholder="Category Id" name="category_id" onChange={handleChange}/> */}
            <TextField
              required
              variant="outlined"
              name="category_name"
              label="Category Name"
              onChange={handleChange}
            />
            {/* <input type="text" placeholder="Category Name" name="category_name" onChange={handleChange}/> */}
            {/* <button onClick={handleClick}>Add</button> */}
            <Button variant="contained" onClick={handleClick} sx={{ ml: 1, alignSelf: 'center', mt: 1, height: 55 }}>Add</Button>
          </div>
        </CardContent>
      </Card>
    </Box>
  )
}

export default AddCategory