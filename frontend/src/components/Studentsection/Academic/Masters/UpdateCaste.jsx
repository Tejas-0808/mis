import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Box, Button } from "@mui/material";
import { TextField, Card, CardContent, CardHeader } from "@mui/material";



function UpdateCaste() {
    const [Caste, setCaste] = useState({ caste_id: "", caste_name: "" });
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location);
    const C_id = location.pathname.split("/")[2];

    const fetchCaste = async () => {
        try {
            const res = await axios.get("http://localhost:3001/caste/" + C_id);
            setCaste(res.data);
            console.log(Caste);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCaste();
    }, []);

    const handleChange = async (e) => {
        setCaste((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://localhost:3001/caste/" + C_id, Caste);
            navigate("/caste");
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

            <Card sx={{ minWidth: 275, backgroundColor: '#f5f5f5' }}>
                <CardContent>

                    <CardHeader
                        title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px", textAlign: 'center' }}>Update Caste</h1>}
                        style={{ backgroundColor: "lightblue", padding: "1px" }}
                    />

                    <div className='edit_form'>

                        <TextField
                            required
                            type="number"
                            variant="outlined"
                            label="Caste ID"
                            name="caste_id"
                            value={Caste.caste_id}
                            onChange={handleChange}
                        />

                        <TextField
                            required
                            variant="outlined"
                            name="caste_name"
                            label="Caste Name"
                            value={Caste.caste_name}
                            onChange={handleChange}
                        />

                        <Button variant="contained" sx={{ ml: 1, alignSelf: 'center', mt: 1, height: 55 }} onClick={handleEdit}>SUBMIT</Button>

                        {/* <input type="number" placeholder="ID" name="caste_id" value={Caste.caste_id} onChange={handleChange}/>
        <input type="text" placeholder="Caste Name" name="caste_name" value={Caste.caste_name} onChange={handleChange}/>
        <button onClick={handleEdit}>Submit</button> */}
                    </div>
                </CardContent>
            </Card>
        </Box>
    )
}

export default UpdateCaste;