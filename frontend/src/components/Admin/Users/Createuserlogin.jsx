import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Createstudlogin from "./Createstudlogin";
import Createstafflogin from "./Createstafflogin";
import Createotherlogin from "./Createotherlogin";
import {
  Button,
  Checkbox,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  TextField,
  Radio,
  Box,
  Typography,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  CardContent, Card, CardHeader
} from "@mui/material";

function Createuserlogin() {
  const [selectedRoleId, setSelectedRoleId] = useState("");

  const navigate = useNavigate();
  const handleChange = (event) => {
    setSelectedRoleId(event.target.value);
  };

  const [role, setRole] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/privilege",{
        headers: { authorization: localStorage.getItem('token') }
      })
      .then((response) => {
        setRole(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div style={{ height: '100vh', width: '100%'}}>
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
         <Card sx={{ minWidth: 275 }}>
        <CardContent>
       
           
          
            <CardHeader
              title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px" }}>NEW USER</h1>}
              style={{ backgroundColor: "lightblue",padding: "1px"  }}
            />
      <div className="form">
        {/* <Typography variant="h4">New User</Typography> */}

        <FormControl variant="filled" size="small" sx={{ m: 1, minWidth: 165 }}>
          <InputLabel id="demo-simple-select-label">Select User Type</InputLabel>
          <Select
            required
            name="role_id"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {role.map((item, index) => {
              if (index === 0) {
                return null; // skip the first item
              }
              return (
                <MenuItem key={item.role_id} value={item.role_id}>
                  {item.role}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        {selectedRoleId && selectedRoleId === 4 ? (
          <Createstudlogin selectedRoleId={selectedRoleId} />
        ) : selectedRoleId ? (
          <Createstafflogin selectedRoleId={selectedRoleId} />
        ) : null}
        {/* {selectedRoleId && selectedRoleId === 5 ? (
          <Createstudlogin selectedRoleId={selectedRoleId} />
        ) : selectedRoleId && selectedRoleId === 4 ? (
          <Createstafflogin selectedRoleId={selectedRoleId} />
        ) : selectedRoleId ? (
          <Createotherlogin selectedRoleId={selectedRoleId} />
        ) : null} */}
      </div>
      </CardContent>
      </Card>
    </Box>
    </div>
  );
}

export default Createuserlogin;
