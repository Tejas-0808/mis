import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";

const Editcourses = () => {

    const [courses, setCourses] = useState({});
    const [branchId, setBranchId] = useState("");
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);

    const location = useLocation();
    const roll = location.pathname.split("/")[2];
    const searchParams = new URLSearchParams(location.search);
    const sessionId = searchParams.get("sessionId");
    const semester = searchParams.get("semester");

    useEffect(() => {
        axios
            .get(`http://localhost:3001/getstdcourse?roll_no=${roll}`)
            .then((response) => {
                setCourses(response.data[0]);
            })
            .catch((error) => {
                console.log(error);
            })

        axios
            .get(`http://localhost:3001/getbranch?roll=${roll}`)
            .then((response) => {
                setBranchId(response.data[0].Branch_id)
            })
            .catch((error) => {
                console.log(error);
            })

        axios
            .get(`http://localhost:3001/fetchallcourses?branchid=${branchId}&sessionid=${sessionId}&sem=${semester}`)
            .then((response) => {
                setAllCourses(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [roll, sessionId, semester, branchId])

    const getmatchcourses = async() => {
        console.log(courses);
        // for (let index = 0; index < courses[0].courses.length; index++) {
        //     const element = courses[0].courses[index];
        //     console.log(element);
        // }
    }

    // console.log(selectedCourses);

    const courseCodes1 = allCourses.map(course => course.coursecode);
console.log(courseCodes1);

// const courseCodes = Object.values(courses[0].courses).flat();
// console.log(courseCodes);


    console.log(courses);
    console.log(allCourses);


    return (
        <div>
            Editcourses
            <button onClick={() => getmatchcourses(courses, allCourses)}>fetch</button>
        </div>
    )
}

export default Editcourses;
