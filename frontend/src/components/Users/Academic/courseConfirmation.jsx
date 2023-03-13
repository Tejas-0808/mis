import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function CourseConfirmation(){

const [semester, setSemester] = useState([]);
const [branch, setBranch] = useState([]);
const [session, setSession] = useState([]);
const [stud, setStud] = useState({Branch: "", Semester: "", Session: ""});

useEffect(()=>{
    axios
    .get("http://localhost:3001/branch")
    .then((response) => {
      setBranch(response.data);

    })
    .catch((error) => {
      console.error(error);
    });

  axios
    .get("http://localhost:3001/semester")
    .then((response) => {
      setSemester(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

    axios
    .get("http://localhost:3001/session")
    .then((response) => {
      setSession(response.data);

    })
    .catch((error) => {
      console.error(error);
    });

}, [])

const handleChange = (e) => {
    setStud((prev) => ({ ...prev, [e.target.name]: e.target.value }))
}


return (<div>
    <select
        name="Branch"
        placeholder="Select Branch"
        className="form-select-branch"
        onChange={handleChange}
        required
      >
        <option value="">-- Select Branch --</option>
        {branch.map((item) => (
          <option key={item.Branch_id} value={[item.Branch_id, item.Branch_name]}>
            {item.Branch_id}. {item.Branch_name}
          </option>
        ))}
      </select>
      <select
        name="Semester"
        placeholder="Select Semester"
        className="form-select-semester"
        onChange={handleChange}
        required
      >
        <option value="">-- Select Semester --</option>
        {semester.map((item) => (
          <option key={item.sem_id} value={item.sem}>
            {item.sem}
          </option>
        ))}
      </select>
      <select
        name="Session"
        placeholder="Select Session"
        className="form-select-session"
        onChange={handleChange}
        required
      >
        <option value="">-- Select Session --</option>
        {session.map((item) => (
          <option key={item.session_id} value={item.session_name}>
            {item.sem}
          </option>
        ))}
      </select>
</div>)

}


export default CourseConfirmation