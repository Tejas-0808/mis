import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Box, Button, TextField, Card, CardContent, CardHeader } from "@mui/material";


function UpdateReligion() {
    const [Religion, setReligion] = useState({ religion_id: "", Religion_name: "" });
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location);
    const C_id = location.pathname.split("/")[2];

    const fetchReligion = async () => {
        try {
            const res = await axios.get("http://localhost:3001/religion/" + C_id);
            setReligion(res.data);
            console.log(Religion);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchReligion();
    }, []);

    const handleChange = async (e) => {
        setReligion((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://localhost:3001/religion/" + C_id, Religion);
            navigate("/religion");
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
                        title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px", textAlign: 'center' }}>Update Religion</h1>}
                        style={{ backgroundColor: "lightblue", padding: "1px" }}
                    />
                    <div className="form">
                        <TextField
                            required
                            type="number"
                            variant="outlined"
                            label="Religion ID"
                            name="religion_id"
                            value={Religion.religion_id}
                            onChange={handleChange} />
                        <TextField
                            required
                            variant="outlined"
                            name="Religion_name"
                            label="Religion Name"
                            value={Religion.Religion_name}
                            onChange={handleChange} />
                        <Button sx={{ ml: 1, alignSelf: 'center', mt: 1, height: 55 }} variant="contained" onClick={handleEdit}>Submit</Button>
                    </div>
                </CardContent>
            </Card>
        </Box>)
}

export default UpdateReligion;