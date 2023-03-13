import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


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


    const [courseTaken, setCourseTaken] = useState({
        sr_no: "",
        roll_no: "",
        semester: "",
        session: "",
        courses: {
            BS: [],
            ES: [],
            HS: [],
            PC: [],
            PE: [],
            OE: [],
            MC: [],
            PR: [],
            AB: []
        }
    });


    useEffect(() => {
        axios
            .get("http://localhost:3001/branch")
            .then((response) => {
                setbranch(response.data);

            })
            .catch((error) => {
                console.error(error);
            });

        axios
            .get("http://localhost:3001/semester")
            .then((response) => {
                setsemester(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        axios
            .get("http://localhost:3001/session")
            .then((response) => {
                setsession(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

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
    }

    // console.log(checkedValues)

    const handleConfirm = async (fetchCourses, courselist, checkedValues) => {
        const sem = await fetchCourses.semester;
        const session = await fetchCourses.session.slice(2);
        const courses = {
            BS: [],
            ES: [],
            HS: [],
            PC: [],
            PE: [],
            OE: [],
            MC: [],
            PR: [],
            AB: []
        }

        for (let i = 0; i < checkedValues.length; i++) {
            let temp_course = await checkedValues[i];
            console.log(temp_course);
            let c_cat = ""
            for (let j = 0; j < courselist.length; j++) {
                if (temp_course === courselist[j].coursecode) {
                    c_cat = await courselist[j].course_category
                    break;
                }
            }

            if (c_cat === 1) {
                courses.BS.push(temp_course)
            } else if (c_cat === 2) {
                courses.ES.push(temp_course)
            } else if (c_cat === 3) {
                courses.HS.push(temp_course)
            } else if (c_cat === 4) {
                courses.PC.push(temp_course)
            } else if (c_cat === 4) {
                courses.PC.push(temp_course)
            } else if (c_cat === 5) {
                courses.PE.push(temp_course)
            } else if (c_cat === 6) {
                courses.OE.push(temp_course)
            } else if (c_cat === 7) {
                courses.MC.push(temp_course)
            } else if (c_cat === 8) {
                courses.PR.push(temp_course)
            } else if (c_cat === 9) {
                courses.AB.push(temp_course)
            }
        }


        console.log(checkedValues);
        // setCourseTaken()
        setCourseTaken(prev => ({ ...prev, sr_no: 1, roll_no: "BE19F01F018", semester: sem, session: session, courses: courses }))
        try {
            await axios.post("http://localhost:3001/confirmcourse", courseTaken);
        } catch (err) {
            console.log(err);
        }
    }
    
    // console.log(courseTaken);



    // console.log(courselist)
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
        </div>
    )
}

export default CourseRegActivity;