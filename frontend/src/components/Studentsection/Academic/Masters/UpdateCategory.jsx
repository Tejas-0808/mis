import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Box, Button } from "@mui/material";
import { TextField, Card, CardContent, CardHeader } from "@mui/material";

function UpdateCategory() {
    const [Category, setCategory] = useState({ category_id: "", category_name: "" });
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location);
    const C_id = location.pathname.split("/")[2];

    const fetchCategory = async () => {
        try {
            const res = await axios.get("http://localhost:3001/category/" + C_id);
            setCategory(res.data);
            console.log(Category);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCategory();
    }, []);

    const handleChange = async (e) => {
        setCategory((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://localhost:3001/category/" + C_id, Category);
            navigate("/category");
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
                        title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px", textAlign: 'center' }}>Update Category</h1>}
                        style={{ backgroundColor: "lightblue", padding: "1px" }}
                    />
                    <div className='edit_form'>
                        <TextField
                            required
                            type="number"
                            variant="outlined"
                            label="Category ID"
                            name="category_id"
                            value={Category.category_id}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            variant="outlined"
                            name="category_name"
                            label="Category Name"
                            value={Category.category_name}
                            onChange={handleChange}
                        />
                        <Button variant="contained" sx={{ ml: 1, alignSelf: 'center', mt: 1, height: 55 }} onClick={handleEdit}>SUBMIT</Button>
                        {/* <h2>UPDATE CATEGORY</h2>
        <input type="number" placeholder="ID" name="category_id" value={Category.category_id} onChange={handleChange}/>
        <input type="text" placeholder="Category Name" name="category_name" value={Category.category_name} onChange={handleChange}/>
        <button onClick={handleEdit}>Submit</button> */}
                    </div >
                </CardContent>
            </Card>
        </Box>
    )

}

export default UpdateCategory;