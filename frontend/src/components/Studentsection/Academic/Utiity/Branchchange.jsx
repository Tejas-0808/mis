import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, Card, CardContent, CardHeader, TextField, } from "@mui/material";


function Branchchange() {
  const [Branchchange, setBranch] = useState({
    roll_no: "",
    Branch: ""
  });

  const navigate = useNavigate();
  const location = useLocation();

  // const B_id = location.pathname.split("/")[2];

  //   const fetchBranch = async () => {
  //     try {
  //         const res = await axios.get("http://localhost:3001/particularstudent/"+ Branchchange.roll_no);
  //         setBranch(res.data);
  //         // console.log(res.data+"!");
  //         console.log(Branchchange);
  //     } catch(err) {
  //         console.log(err);
  //     }
  // }

  // useEffect(() => {

  //   fetchBranch();
  //   // eslint-disable-next-line
  // }, []);


  const handleChange = (e) => {
    setBranch((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const fetchStubranch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:3001/particularstudent/" + Branchchange.roll_no);
      setBranch(res.data);
      // console.log(res.data+"!");
      console.log(Branchchange);

    } catch (err) {
      console.log(err);
    }
  }
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log(Branchchange);
      await axios.put("http://localhost:3001/particularstudent/" + Branchchange.roll_no, Branchchange);
      // navigate("/PersonalDetails");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
    navigate("/");
  };

  // console.log(branch[0]);
  // let bro =  branch[0];
  console.log(Branchchange);
  return (

    // <Card sx={{ minWidth: 275, backgroundColor: '#f5f5f5' }}>
    //   <h1>&nbsp;&nbsp;Utility</h1><hr />
    //   <CardContent>
    //     <Box
    //       component="form"
    //       sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" }, whiteSpace: 'normal', border: 1 }}
    //       noValidate
    //       autoComplete="off"
    //     >
    //       <CardHeader
    //         style={{ backgroundColor: "lightblue" }}
    //         title="Branch Change"
    //       />
   
    <Box sx={{ width: '100%', height: '100%' }}>

      <Card sx={{ m: 1, minWidth: 275, backgroundColor: '#F5F5F5' }}>

        <CardContent>
          <CardHeader
            style={{ backgroundColor: "lightblue" }}
            title="Branch Change"
          />


          <div className="form">

            <br />
            <TextField
                      id="outlined-basic"
                      required
                      variant="outlined"
                      name="roll_no"
                      label="Roll No"
                      onChange={handleChange}
                    />
            {/* <input type="text" placeholder="Roll No" name="roll_no" value={Branchchange.roll_no} onChange={handleChange} /> */}
            &nbsp;&nbsp;
            <TextField
                      id="outlined-basic"
                      variant="outlined"
                      name="Branch"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      label="Branch"
                      value={Branchchange.Branch}
                      onChange={handleChange}
                    />
            {/* <input type="text" placeholder="Branch" name="Branch" value={Branchchange.Branch} onChange={handleChange} /> */}
            &nbsp;&nbsp;
            {/* <button onClick={fetchStubranch}>Fetch</button>
      <button onClick={handleClick}>Update</button> */}
            &nbsp;&nbsp;
            <Button variant="contained" onClick={fetchStubranch} size="medium" >Fetch</Button>
            &nbsp;&nbsp;
            <Button variant="contained" onClick={handleClick} size="medium">Update</Button>
          </div>
        {/* </Box>
      </CardContent>
    </Card> */}
     </CardContent>
        </Card>
      </Box>

  )
}

export default Branchchange

