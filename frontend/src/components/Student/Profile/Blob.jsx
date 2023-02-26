import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


function Blob() {
  const [personaldetails, setpersonaldetails] = useState([]);

  const fetchAllPersonalDetails = async () => {
    try {
      const outputfile = "output.png";
      const res = await axios.get("http://localhost:3001/student");
      // setpersonaldetails(res.data);
      // console.log(res.data);
      const imgr = res.data[0].Photo.data.toString('base64');
     console.log(imgr)
    //  const imgsrc = URL.createObjectURL(imgr);
    //  console.log(imgsrc)
     
     setpersonaldetails(imgr)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllPersonalDetails();
    // eslint-disable-next-line
  }, []);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete("http://localhost:3001/student/" + id);
      const res = await axios.get("http://localhost:3001/student");
      setpersonaldetails(res.data);
      // window.location.reload()
      // navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(personaldetails);

  return (
    <div>
      <h1>Blob</h1>
      <div className="personaldetails">
        {/* {personaldetails.map((personaldetails) => (
          <div key={personaldetails.Reg_Id} className="personaldetails">
            <h2>{personaldetails.Reg_Id}</h2>
            <p>{personaldetails.roll_no}</p>
           
            <button
              className="delete"
              onClick={() => handleDelete(personaldetails.Reg_Id)}
            >
              Delete
            </button>
          </div>
        ))} */}
        {/* <img
              src={URL.createObjectURL(personaldetails)}
              alt=""
              srcset=""
            /> */}
  {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwBAMAAACh2TSJAAAALVBMVEUAAADtNTX////3n5/+9fX719f7zMz5tLTzfHzuQED//f31jY3ybGzxXV3wVFRaxp+rAAAAAXRSTlMAQObYZgAAALVJREFUOMut0rENAjEQRNHdC4kY0QBaAQUQX0QAFSAKIKQEKiAA6VqgIkriApuV1x7pQPz0aWwHljLMpZ0CRDBGoXmeghGYKFJsUo90giAImCgV5OJF+oOgKE48MlGgs2VLBIunWesw0a1ZHqF82c7GmmIfUSpgotOly29DFPFJFDEhkgIT/V5mZuvj6XofKrHU6vyI4u37IYi36aN4h5tL7PJyif1dvCgEpapzISbCTEj5R78BZq5A5Ldh2XYAAAAASUVORK5CYII"></img> */}
            {/* {personaldetails} */}
      </div>
    </div>
  );
}
export default Blob;
