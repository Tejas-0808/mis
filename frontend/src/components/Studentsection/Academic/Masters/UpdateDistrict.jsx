import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Box, Button, TextField, Card, CardContent, CardHeader } from "@mui/material";


function UpdateDistrict() {
    const [District, setDistrict] = useState({ district_id: "", district_name: "" });
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location);
    const C_id = location.pathname.split("/")[2];

    const fetchDistrict = async () => {
        try {
            const res = await axios.get("http://localhost:3001/district/" + C_id);
            setDistrict(res.data);
            console.log(District);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchDistrict();
    }, []);

    const handleChange = async (e) => {
        setDistrict((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://localhost:3001/district/" + C_id, District);
            navigate("/district");
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
                        title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px", textAlign: 'center' }}>Update District</h1>}
                        style={{ backgroundColor: "lightblue", padding: "1px" }}
                    />
                    <div className="form">
                        <TextField type="number" placeholder="District ID" name="district_id" value={District.district_id} onChange={handleChange} />
                        <TextField type="text" placeholder="District Name" name="district_name" value={District.district_name} onChange={handleChange} />
                        <Button sx={{ ml: 1, alignSelf: 'center', mt: 1, height: 55 }} variant="contained" onClick={handleEdit}>Submit</Button>
                    </div>
                </CardContent>
            </Card>
        </Box>)
}

export default UpdateDistrict;