import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";


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

    return (<Box
        component="form"
        sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
    >

        <div className="form">
            <h1>EDIT STATE</h1>
            <hr></hr>
            <br></br>
            <TextField required type="number" variant="outlined" label="State ID" name="state_id" value={State.state_id} onChange={handleChange} />
            <TextField required type="text" variant="outlined" label="State Name" name="state_name" value={State.state_name} onChange={handleChange} />
            <Button variant="contained" onClick={handleEdit}>Submit</Button>
        </div>
    </Box>)
}

export default UpdateState;