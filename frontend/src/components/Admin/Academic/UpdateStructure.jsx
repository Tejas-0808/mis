import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";


function UpdateStructure(){
    const [Structure, setStructure] = useState({
        strid: "",
        scheme_id: "",
        category: "",
        semester: "",
        branch_id: "",
        board_of_study: "",
        coursecode: "",
        coursename: "",
        lecture: "",
        tut: "",
        pract: "",
        ise1: "",
        ise2: "",
        ise3: "",
        PR: "",
        TW: "",
        ese: "",
        total_marks: "",
        total_credits: ""
      });
    const navigate = useNavigate();
    const location = useLocation();
    
    console.log(location);
    const C_id = location.pathname.split("/")[2];

    const fetchStructure = async() => {
        try{
            const res = await axios.get("http://localhost:3001/structure/"+ C_id);
            setStructure(res.data);
            console.log(Structure);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchStructure();
    }, []);

    const handleChange = async (e) => {
        setStructure((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        try{
            await axios.put("http://localhost:3001/structure/" + C_id, Structure);
            navigate("/structure");
        }catch(err){
            console.log(err);
        }
        
    }

    return (<div className='edit_form'>
        <h2>EDIT</h2>
        <input type="number" placeholder="Structure ID" name="strid" value={Structure.strid} onChange={handleChange}/>
        <input type="number" placeholder="Scheme Id" name="scheme_id" value={Structure.scheme_id} onChange={handleChange}/>
      <input type="text" placeholder="category" name="category" value={Structure.category} onChange={handleChange}/>
      <input type="text" placeholder="Semester" name="semester" value={Structure.semester} onChange={handleChange}/>
      <input type="number" placeholder="Branch Id" name="branch_id" value={Structure.branch_id} onChange={handleChange}/>
      <input type="text" placeholder="Board of Study" name="board_of_study" value={Structure.board_of_study} onChange={handleChange}/>
      <input type="text" placeholder="Course Code" name="coursecode" value={Structure.coursecode} onChange={handleChange}/>
      <input type="text" placeholder="Course Name" name="coursename" value={Structure.coursename} onChange={handleChange}/>
      <input type="number" placeholder="Lecture" name="lecture" value={Structure.lecture} onChange={handleChange}/>
      <input type="number" placeholder="Tutorial" name="tut" value={Structure.tut} onChange={handleChange}/>
      <input type="number" placeholder="Practical" name="pract" value={Structure.pract} onChange={handleChange}/>
      <input type="number" placeholder="In Sem 1" name="ise1" value={Structure.ise1} onChange={handleChange}/>
      <input type="number" placeholder="In Sem 2" name="ise2" value={Structure.ise2} onChange={handleChange}/>
      <input type="number" placeholder="In Sem 3" name="ise3" value={Structure.ise3} onChange={handleChange}/>
      <input type="number" placeholder="PR" name="PR" value={Structure.PR} onChange={handleChange}/>
      <input type="number" placeholder="TW" name="TW" value={Structure.TW} onChange={handleChange}/>
      <input type="number" placeholder="End Sem" name="ese" value={Structure.ese} onChange={handleChange}/>
      <input type="number" placeholder="Total Marks" name="total_marks" value={Structure.total_marks} onChange={handleChange}/>
      <input type="number" placeholder="Total Credits" name="total_credits" value={Structure.total_credits} onChange={handleChange}/>
        <button onClick={handleEdit}>Submit</button>
    </div>)
}

export default UpdateStructure;