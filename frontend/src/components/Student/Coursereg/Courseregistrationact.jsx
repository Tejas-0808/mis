import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, Navigate } from "react-router-dom";
import { Alert } from '@mui/material';


const CourseRegActivity = () => {

    const [fetchcourses, setfetchcourses] = useState({
        Branch: "",
        session: "",
        semester: "",
    })

    const [branch, setbranch] = useState([]);
    const [session, setsession] = useState([]);
    const [semester, setsemester] = useState([]);
    const [courselist, setCourseList] = useState([]);
    const [checkedValues, setCheckedValues] = useState([]);

    var username = localStorage.getItem('username');
    console.log(username);

    const [courseTaken, setCourseTaken] = useState({
        roll_no: "",
        semester: "",
        session: "",
        courses: []
    });

    const sem =  fetchcourses.semester;
    const Session =  fetchcourses.session.slice(2);
    const courses = [];

    const [error, setError] = useState("");

    console.log(sem);
    console.log(Session);
    console.log(courses);
   
    useEffect(() => {
        console.log(sem);
        axios
            .get("http://localhost:3001/branch"  ,{
                headers: { authorization: localStorage.getItem('token') }
              })
            .then((response) => {
                setbranch(response.data);

            })
            .catch((error) => {
                console.error(error);
            });


        // axios
        //     .get(`http://localhost:3001/getfacultyid?username=${username}`)
        //     .then((response) => {
        //         console.log(response.data);
        //         setfaculty_id(response.data[0])
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })

        axios
            .get("http://localhost:3001/semester")
            .then((response) => {
                setsemester(response.data);
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

            setCourseTaken(prev => ({ ...prev, roll_no: username, semester: sem, session: Session, courses: courses}))
            for (let i = 0; i < checkedValues.length; i++) {
                let temp_course = checkedValues[i];
                console.log(temp_course);
                courses.push(temp_course);
              
            }
            

            console.log(courses);
        
    },[checkedValues,])


    const handleChange = (e) => {
        setfetchcourses((prev) => ({ ...prev, [e.target.name]: e.target.value }))

    }

    const fetchCourses = async () => {
        // e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3001/courseactivity", fetchcourses)
            setCourseList(res.data);
            // console.log(courselist);
        } catch (error) {
            console.log(error);
        }
    }



    function handleCheckboxChange(event) {
        const { value, checked } = event.target;



        if (checked) {
            setCheckedValues([...checkedValues, value]);

        } else {
            setCheckedValues(checkedValues.filter((val) => val !== value));
        }
        console.log(checkedValues);
        

    }

    // console.log(checkedValues)


    console.log(courseTaken);

    const handleConfirm = async () => {


        
        try {
            console.log(courseTaken);
            const res = await axios.post("http://localhost:3001/confirmcourse", courseTaken);
            // console.log(res);
            setError("Roll number " + courseTaken.roll_no + " already exists");
          
        } catch (err) {
            console.log(err);
        }
    }
    
    
    return (
        <div>
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
                {semester.map((item) => (
                    <option key={item.sem_id} value={item.sem}>
                        {item.sem}
                    </option>
                ))}
            </select>
            <button onClick={fetchCourses}>fetch</button>
            <div>
                <table id="courselist">
                    {courselist.map((course) => (
                        <table>
                            <tr>
                                <td>
                                    <div key={course.coursecode}>
                                        <input
                                            type="checkbox"
                                            value={course.coursecode}
                                            checked={checkedValues.includes(course.coursecode)}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span>{course.coursecode + "-" + course.coursename}</span>
                                        {/* <input type="text" value={item.value} onChange={(event) => handleInputChange(event, item.id)} /> */}
                                    </div>
                                </td>
                            </tr>
                        </table>
                    ))}
                </table>
                <p>Selected items: {JSON.stringify(checkedValues)}</p>
            </div>
            <div><button onClick={() => handleConfirm(fetchcourses, courselist, checkedValues)}>Confirm</button></div>
            <div>
            {error ? <>
                <Alert severity='error'>{error}</Alert>

            </>: <>
                <Alert severity='success'>{error}</Alert>
            </>
            }
                    
            </div>

        </div>
    )
}

export default CourseRegActivity;