import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


const Student_info = () => {

  const [student_info, setStudent_info] = useState([]);

  const fetchAllStudent_info = async () => {
    try {
        const res = await axios.get("http://localhost:3001/student");
        setStudent_info(res.data);
        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}

  useEffect(() => {

    fetchAllStudent_info();
    // eslint-disable-next-line
  }, []);
  const navigate = useNavigate();

  
  const handleDelete= async (id) =>{
    try{
      console.log(id)
      await axios.delete("http://localhost:3001/student/"+id)
      const res = await axios.get("http://localhost:3001/student");
        setStudent_info(res.data);
      // window.location.reload()
      // navigate("/");
    }catch(err){
      console.log(err);
    }

  }
  console.log(student_info);

  return (
    <div>
        <h1>
            Student info
        </h1>
        <div className="student_info">
        {student_info.map((student) => (
          <div key={student.Email_id} className="student">
            <h2>{student.Email_id}</h2>
            <p>{student. Phone_No}</p>
            <p>{student.Permanent_Add}</p>
            <p>{student.Current_Add}</p>
            <p>{student.Fathers_email}</p>
            <p>{student.Father_mobile}</p>
            <button className="delete" onClick={()=>handleDelete(student.Email_id)}>Delete</button>
            </div>
        ))}
        <button>
            <Link to="/contact_details">Add new Student</Link>
        </button>
    </div>
    </div>
  )
}

export default Student_info
