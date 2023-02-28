import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


const PersonalDetails = () => {

  const [personaldetails, setpersonaldetails] = useState([]);
  const [image, setImage] = useState(null);


  const fetchAllPersonalDetails = async () => {
    try {
      const res = await axios.get("http://localhost:3001/student");
      setpersonaldetails(res.data);
      console.log(res.data.Signature);
    } catch (err) {
      console.log(err);
        const res = await axios.get("http://localhost:3001/student");
        // const imgres = await axios.get("http://localhost:3001/images/"+"1");
        // const blob =  await imgres.blob();
        
        console.log(res.data[0].Signature.data);
        const tryb = res.data[0].Signature.data;
        let blob = new Blob([JSON.stringify(tryb,null,2)],{type:''});
        console.log(blob);
        // var image1 = new Image();
        // image1.src = URL.createObjectURL(blob);
        // document.body.appendChild(image1);
        setImage(URL.createObjectURL(blob));
        setpersonaldetails(res.data);
        console.log(URL.createObjectURL(blob));
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
    <div>
      <h1>
        Student Personal Details
           {image && <img src={image} alt="uploaded image" />}
      </h1>
      <div className="personaldetails">
        {personaldetails.map((personaldetails) => (
          <div key={personaldetails.Reg_Id} className="personaldetails">
            <h2>{personaldetails.Reg_Id}</h2>
            <p>{personaldetails.roll_no}</p>
            <p>{personaldetails.First_Name}</p>
            <p>{personaldetails.Middle_Name}</p>
            <p>{personaldetails.Last_Name}</p>
            <p>{personaldetails.Email_id}</p>
            <p>{personaldetails.Mobile_No}</p>
            <p>{personaldetails.Caste}</p>
            <p>{personaldetails.Religion}</p>
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
            <p>{personaldetails.Permanent_Add}</p>
            <p>{personaldetails.Current_Add}</p>
            <p>{personaldetails.Physically_handicapped}</p>
            <p>{personaldetails.Branch}</p>
            {/* <p>{personaldetails.Photo}</p> */}{/* <img src={URL.createObjectURL()} alt="signature" srcset="" /> */}
            {/* <p>{personaldetails.Signature}</p> */}
            <p>{personaldetails.Fathers_Name}</p>
            <p>{personaldetails.Fathers_email}</p>
            <p>{personaldetails.Fathers_mobile}</p>
            <p>{personaldetails.Fathers_occupation}</p>
            <p>{personaldetails.Fathers_officeno}</p>
            <p>{personaldetails.Mothers_Name}</p>
            <p>{personaldetails.Mothers_email}</p>
            <p>{personaldetails.Mothers_mobile}</p>
            <p>{personaldetails.Mothers_occupation}</p>
            <p>{personaldetails.Mothers_officeno}</p>
            <p>{personaldetails.Guardian_Name}</p>
            <p>{personaldetails.Guardian_email}</p>
            <p>{personaldetails.Guardian_mobile}</p>
            <p>{personaldetails.Guardian_occupation}</p>
            <p>{personaldetails.Guardian_officeno}</p>
            <p>{personaldetails.Date_of_admission}</p>
            <p>{personaldetails.Payment_type}</p>
            <p>{personaldetails.State_eligibility}</p>
            <p>{personaldetails.Year}</p>
            <p>{personaldetails.Admission_batch}</p>
            <p>{personaldetails.Semester}</p>
            <button className="delete" onClick={() => handleDelete(personaldetails.Reg_Id)}>Delete</button>
          </div>
        ))}
        <button>
          <Link to="/addpersonaldetails">Add new Student Personal Details</Link>
        </button>
      </div>
    </div>
  )
}

export default PersonalDetails