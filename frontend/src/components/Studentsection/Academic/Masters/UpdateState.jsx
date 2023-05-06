import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Box, Button } from "@mui/material";
import { TextField, Card, CardContent, CardHeader } from "@mui/material";


function UpdateState() {
    const [State, setState] = useState({ state_id: "", state_name: "" });
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location);
    const C_id = location.pathname.split("/")[2];
    console.log(C_id);

    const fetchState = async () => {
        try {
            const res = await axios.get("http://localhost:3001/state/" + C_id);
            setState(res.data);
            console.log(State);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchState();
    }, []);

    const handleChange = async (e) => {
        setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://localhost:3001/state/" + C_id, State);
            navigate("/state");
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
                        title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px", textAlign: 'center' }}>Edit State</h1>}
                        style={{ backgroundColor: "lightblue", padding: "1px" }}
                    />

                    <div className="form">
                        <TextField required type="number" variant="outlined" label="State ID" name="state_id" value={State.state_id} onChange={handleChange} />
                        <TextField required type="text" variant="outlined" label="State Name" name="state_name" value={State.state_name} onChange={handleChange} />
                        <Button sx={{ ml: 1, alignSelf: 'center', mt: 1, height: 55 }} variant="contained" onClick={handleEdit}>Submit</Button>
                    </div>
                </CardContent>
            </Card>
        </Box>)
}

export default UpdateState;