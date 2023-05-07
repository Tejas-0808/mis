import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Box, Card, CardContent, CardHeader } from "@mui/material";


const Educationdetails = () => {

  const [Edudetails, setEdudetails] = useState([]);

  const fetchAllBranch = async () => {
    try {
      const res = await axios.get("http://localhost:3001/qualification_details");
      setEdudetails(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {

    fetchAllBranch();
    // eslint-disable-next-line
  }, []);
  const navigate = useNavigate();


  const handleDelete = async (id) => {
    try {
      console.log(id)
      await axios.delete("http://localhost:3001/qualification_details/" + id)
      const res = await axios.get("http://localhost:3001/qualification_details");
      setEdudetails(res.data);
      // window.location.reload()
      // navigate("/");
    } catch (err) {
      console.log(err);
    }

  }
  console.log(Edudetails);

  return (
    <Card sx={{ minWidth: 275, backgroundColor: '#f5f5f5' }}>
      {/* <h1>Educational Detail</h1><hr /> */}
      <CardContent>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" }, whiteSpace: 'normal', border: 1 }}
          noValidate
          autoComplete="off"
        >

          <CardHeader
            // style={{ backgroundColor: "lightblue" }}
            title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "-15px" }}> Education info</h1>}
          />

          <div>
            <div className="Edudetails">
              {Edudetails.map((Edudetails) => (
                <div key={Edudetails.Reg_id} className="Edudetails">
                  <h2>{Edudetails.Reg_id}</h2>
                  <p>{Edudetails.Custom_Id}</p>
                  <p>{Edudetails.Exam_type}</p>
                  <p>{Edudetails.Month_of_Passing}</p>
                  <p>{Edudetails.Year_of_exam}</p>
                  <p>{Edudetails.Board}</p>
                  <p>{Edudetails.School_college_name}</p>
                  <p>{Edudetails.Address_School_college}</p>
                  <p>{Edudetails.Marks_obtained}</p>
                  <p>{Edudetails.Out_of_marks}</p>

                  <button className="delete" onClick={() => handleDelete(Edudetails.Reg_id)}>Delete</button>
                </div>
              ))}
              <button>
                <Link to="/Education_details">Add Educational Details</Link>
              </button>
            </div>
          </div>
        </Box>
      </CardContent>
    </Card>
  )
}

export default Educationdetails
