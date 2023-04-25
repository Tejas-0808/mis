import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, CardHeader, TextField, } from "@mui/material";


const PersonalDetails = () => {

  const [personaldetails, setpersonaldetails] = useState([]);
  const [image, setImage] = useState(null);


  const fetchAllPersonalDetails = async () => {
    try {
      const roll_no = localStorage.getItem('username');
      const res = await axios.get("http://localhost:3001/student/"+roll_no);
      console.log(res);
        // const imgres = await axios.get("http://localhost:3001/images/"+"1");
        // const blob =  await imgres.blob();
        
        // console.log(res.data[0].Signature.data);
        // const tryb = res.data[0].Signature.data;
        // let blob = new Blob([JSON.stringify(tryb,null,2)],{type:''});
        // console.log(blob);
        // var image1 = new Image();
        // image1.src = URL.createObjectURL(blob);
        // document.body.appendChild(image1);
        // setImage(URL.createObjectURL(blob));
        setpersonaldetails(res.data);
        // console.log(URL.createObjectURL(blob));
        // const blob = await res.blob();  
    } catch(err) {
        console.log(err);
    }
  }
console.log(image);

  useEffect(() => {

    fetchAllPersonalDetails();
    // eslint-disable-next-line
  }, []);
  const navigate = useNavigate();
  const handleChange = (e) => {
    fetchAllPersonalDetails ((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleDelete = async (id) => {
    try {
      console.log(id)
      await axios.delete("http://localhost:3001/student/" + id)
      const res = await axios.get("http://localhost:3001/student");
      setpersonaldetails(res.data);
      // window.location.reload()
      // navigate("/");
    } catch (err) {
      console.log(err);
    }

  }
  console.log(personaldetails);

  return (
    <Card sx={{ minWidth: 275 }}>
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
            title={<h1 style={{ fontSize: "30px", fontWeight: "bold",marginLeft: "-15px"}}>Student Information</h1>}
          />


    <div>
      {/* <br></br> */}
      <h1>
      <CardHeader
            style={{ backgroundColor: "lightblue",padding: "1px"  }}
            title={<h1 style={{ fontSize: "20px" }}>Personal Details</h1>}
          />
        
           {image && <img src={image} alt="uploaded image" />}
      </h1>
      <div className="personaldetails">
        {personaldetails.map((personaldetails) => (
          <div key={personaldetails.Reg_Id} className="personaldetails">
            {/* <h2>{personaldetails.Reg_Id}</h2> */}
            {/* <TextField required type="number" label="Registration ID" name="Reg_Id" onChange={handleChange} /> */}
            <TextField required type="text"name="roll_no" label="Roll No" value={personaldetails.roll_no} onChange={handleChange}/>
            <TextField required type="text" label="Branch" name="Branch" value={personaldetails.Branch}onChange={handleChange} />
            <TextField required type="text" label="First Name" name="First_Name" value={personaldetails.First_Name} onChange={handleChange} />
            <TextField required type="text" label="Middle Name" name="Middle_Name" value={personaldetails.Middle_Name}onChange={handleChange} />
            <TextField required type="text" label="Last Name" name="Last_Name" value={personaldetails.Last_Name} onChange={handleChange} />
            <TextField required type="text" label="Email Id" name="Email_id" value={personaldetails.Email_id}onChange={handleChange} />
            <TextField required type="number" label="Mobile Number" name="Mobile_No" value={personaldetails.Mobile_No} onChange={handleChange} />
            <TextField required type="text" label="Caste" name="Caste" value={personaldetails.Caste} onChange={handleChange} />
            <TextField required type="text" label="Religion" name="Religion" value={personaldetails.Religion}onChange={handleChange} />
            <TextField required type="text" label="Nationality" name="Nationality" onChange={handleChange} />
     
            {/* <p>{personaldetails.roll_no}</p>
            <p>{personaldetails.Branch}</p>
            <p>{personaldetails.First_Name}</p>
            <p>{personaldetails.Middle_Name}</p>
            <p>{personaldetails.Last_Name}</p>
            <p>{personaldetails.Permanent_Add}</p>
            <p>{personaldetails.Current_Add}</p>
            <p>{personaldetails.Email_id}</p>
            <p>{personaldetails.Mobile_No}</p>
            <p>{personaldetails.Religion}</p>
            <p>{personaldetails.Caste}</p>
            <p>{personaldetails.Nationality}</p>
            <p>{personaldetails.Category}</p>
            <p>{personaldetails.Blood_group}</p>
            <p>{personaldetails.Gender}</p>
            <p>{personaldetails.D_O_B}</p>
            <p>{personaldetails.Birth_Place}</p>
            <p>{personaldetails.Marital_Status}</p>
            <p>{personaldetails.Seat_type}</p>
            <p>{personaldetails.Student_type}</p>
            <p>{personaldetails.Addhar_no}</p>
            <p>{personaldetails.Physically_handicapped}</p>
            <p>{personaldetails.Branch}</p> */}
            {/* <p>{personaldetails.Photo}</p> */}{/* <img src={URL.createObjectURL()} alt="signature" srcset="" /> */}
            {/* <p>{personaldetails.Signature}</p> */}

            <h1> <CardHeader
            style={{ backgroundColor: "lightblue",padding: "1px" }}
            title={<h1 style={{ fontSize: "20px" }}>Father, Mother, and Guardian Details</h1>}
          /></h1>
            <TextField required type="text" label="Fathers_Name" name="Fathers_Name" value={personaldetails.Fathers_Name} onChange={handleChange} />
           <TextField Field required type="text" label="Fathers_email" name="Fathers_email"value={personaldetails.Fathers_email} onChange={handleChange} />
            <TextField required type="number" label="Fathers_mobile" name="Fathers_mobile"value={personaldetails.Fathers_mobile} onChange={handleChange} />
            <TextField required type="text" label="Fathers_occupation" name="Fathers_occupation"value={personaldetails.Fathers_occupation} onChange={handleChange} />
            <TextField required type="number" label="Fathers_officeno" name="Fathers_officeno"value={personaldetails.Fathers_occupation} onChange={handleChange} />
            <TextField required type="text" label="Mothers_Name" name="Mothers_Name" value={personaldetails.Fathers_occupation}onChange={handleChange} />
            <TextField required type="text" label="Mothers_email" name="Mothers_email" value={personaldetails.Fathers_occupation}onChange={handleChange} />
            <TextField required type="number" label="Mothers_mobile" name="Mothers_mobile" value={personaldetails.Mothers_mobile}onChange={handleChange} />
            <TextField required type="text" label="Mothers_occupation" name="Mothers_occupation"value={personaldetails.Mothers_occupation} onChange={handleChange} />
            <TextField required type="number" label="Mothers_officeno" name="Mothers_officeno"value={personaldetails.Mothers_officeno} onChange={handleChange} />
            <TextField required type="text" label="Guardian_Name" name="Guardian_Name" value={personaldetails.Guardian_Name}onChange={handleChange} />
            <TextField required type="text" label="Guardian_email" name="Guardian_email"value={personaldetails.Guardian_email} onChange={handleChange} />
            <TextField required type="number" label="Guardian_mobile" name="Guardian_mobile" value={personaldetails.Guardian_mobile}onChange={handleChange} />
            <TextField required type="text" label="Guardian_occupation" name="Guardian_occupation"value={personaldetails.Guardian_occupation} onChange={handleChange} />
            <TextField required type="number" label="Guardian_officeno" name="Guardian_officeno"value={personaldetails.Guardian_officeno} onChange={handleChange} />

            <h1> <CardHeader
            style={{ backgroundColor: "lightblue",padding: "1px"   }}
            title={<h1 style={{ fontSize: "20px" }}>Admission Details</h1>}
          /></h1>
            <TextField required type="text" label="Date_of_admission" name="Date_of_admission" value={personaldetails.Date_of_admission}onChange={handleChange} />
            <TextField required type="text" label="Payment_type" name="Payment_type"value={personaldetails.Payment_type} onChange={handleChange} />
            <TextField required type="text" label="State_eligibility" name="State_eligibility" value={personaldetails.State_eligibility}onChange={handleChange} />
            <TextField required type="number" label="Year" name="Year" value={personaldetails.Year}onChange={handleChange} />
            <TextField required type="number" label="Admission_batch" name="Admission_batch"value={personaldetails.Admission_batch} onChange={handleChange} />
            <TextField required type="number" label="Semester" name="Semester"value={personaldetails.Semester} onChange={handleChange} />

            {/* <button className="delete" onClick={() => handleDelete(personaldetails.Reg_Id)}>Delete</button> */}
          </div>
        ))}
        {/* <button>
          <Link to="/addpersonaldetails">Add new Student Personal Details</Link>
        </button> */}
      </div>
    </div>
    </Box>
      </CardContent>
    </Card>
  )
}

export default PersonalDetails