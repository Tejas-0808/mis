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
      .get("http://localhost:3001/privilege")
      .then((response) => {
        setRole(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="form">
        <Typography variant="h4">New User</Typography>

        <FormControl variant="filled" size="small" sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            required
            name="role_id"
            label="-- Select Role --"
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
        {selectedRoleId && selectedRoleId === 5 ? (
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
    </Box>
  );
}

export default Createuserlogin;
