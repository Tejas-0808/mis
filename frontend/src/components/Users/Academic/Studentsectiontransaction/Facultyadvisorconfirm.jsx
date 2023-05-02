import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Facultyadvisorconfirm ()  {

    const [batch, setBatch] = useState([]);
    const [Degree, setDegree] = useState([]);
    const [sem, setSem] = useState([]);
    const [session, setsession] = useState([]);
    const [faculty_id, setfaculty_id] = useState("");
    const [studentslist, setstudentlist] = useState([]);

    const [fetchstudents, setfetchstudents] = useState({
        Degree : "",
        session: "",
        semester: "",
        batch: ""
    })
    
 
    var uname = localStorage.getItem('username');
    console.log(uname);

    useEffect(() => {

        axios
            .get("http://localhost:3001/batch")
            .then((response) => {
                setBatch(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        axios
            .get("http://localhost:3001/degree")
            .then((response) => {
                setDegree(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        axios
            .get(`http://localhost:3001/getfacid?uname=${uname}`)
            .then((response) => {
                setfaculty_id(response.data[0])
            })
            .catch((error) => {
                console.log(error);
            })

        axios
            .get("http://localhost:3001/semester")
            .then((response) => {
                setSem(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        

        axios
            .get("http://localhost:3001/session" ,{
                headers: { authorization: localStorage.getItem('token') }
              })
            .then((response) => {
                setsession(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    },[])

    console.log(faculty_id.Faculty_adv);

    const handleChange = (e) => {
        setfetchstudents((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const fetchStudents = async () => {
        // e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3001/studentswithcourses", [fetchstudents, faculty_id])
            setstudentlist(res.data);
        } catch (error) {
            console.log(error);
        }
    }


    console.log(fetchstudents);
    console.log(studentslist);

  return (
    <div>
        <select
            name="Degree"
            placeholder="Select degree"
            className="form-select-degree"
            onChange={handleChange}
            required
        >
            <option value="">-- Select Degree --</option>
            {Degree.map((item) => (
                <option key={item.degree_id} value={[item.degree_id, item.degree_name]}>
                    {item.degree_id}. {item.degree_name}
                </option>
            ))}
        </select>

        <select
            name="batch"
            placeholder="Select batch"
            className="form-select-batch"
            onChange={handleChange}
            required
        >
            <option value="">-- Select Batch --</option>
            {batch.map((item) => (
                <option key={item.batch_id} value={[item.batch_id, item.batch_name]}>
                    {item.batch_id}. {item.year}
                </option>
            ))}
        </select>

        <select
            name="session"
            placeholder="Select Session"
            className="form-select-session"
            onChange={handleChange}
            required
        >
            <option value="">-- Select Session --</option>
            {session.map((item) => (
                <option key={item.session_id} value={[item.session_id, item.session_name]}>
                    {item.session_id}. {item.session_name}
                </option>
            ))}
        </select>

        <select
            name="semester"
            placeholder="Select Semester"
            className="form-select-semester"
            onChange={handleChange}
            required
        >
            <option value="">-- Select Semester --</option>
            {sem.map((item) => (
                <option key={item.sem_id} value={item.sem}>
                    {item.sem}
                </option>
            ))}
        </select>
        <button onClick={fetchStudents}>fetch</button>
        <div>
            <table>
            <thead>
            <tr>
                <th>Roll No</th>
                <th>Courses</th>
            </tr>
            </thead>
            <tbody>
            {studentslist.map((student) => (
                <tr key={student.roll_no}>
                <td>{student.roll_no}</td>
                <td>
                    <ul>
                    {student.courses.PC.map((course) => (
                        <li key={course}>PC: {course}</li>
                    ))}
                    </ul>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
        
    </div>
  )
}


export default Facultyadvisorconfirm;