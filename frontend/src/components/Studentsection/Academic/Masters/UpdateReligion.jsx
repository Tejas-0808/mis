import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";


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

    return (<Box
        component="form"
        sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
    >
        <div className="form">
            <h1>EDIT RELIGION</h1>
            <hr></hr>
            <br></br>
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
            <Button variant="contained" onClick={handleEdit}>Submit</Button>
        </div>
    </Box>)
}

export default UpdateReligion;