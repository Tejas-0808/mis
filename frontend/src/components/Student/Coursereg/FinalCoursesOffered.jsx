import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, CardHeader } from "@mui/material";

const FinalCoursesOffered = () => {
    const [FinalCoursesOffered, setFinalCoursesOffered] = useState([]);

    const fetchAllFinalCourses = async () => {
        try {
            const res = await axios.get("http://localhost:3001/finalcoursesoffered");
            setFinalCoursesOffered(res.data);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchAllFinalCourses();
        // eslint-disable-next-line
    }, []);

    const navigate = useNavigate();

    //   const handleDelete = async (id) => {
    //     try {
    //       console.log(id);
    //       await axios.delete("http://localhost:3001/structure/" + id);
    //       const res = await axios.get("http://localhost:3001/structure");
    //       setStructure(res.data);
    //       // window.location.reload()
    //       // navigate("/");
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };
    //   console.log(structure);

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            navigate("/finalcoursesoffered");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        
        <Card sx={{ m:4, minWidth: 275 }}>
            
            <Box
                component="form"
                sx={{ "& .MuiTextField-root": { m: 2, width: "20ch", padding:2 }, whiteSpace: 'normal', border: 1 }}
                noValidate
                autoComplete="off"
            >
                <CardContent>
                    <CardHeader
                        style={{ backgroundColor: "lightblue" }}
                        title="Final Course List"
                    />

                    {FinalCoursesOffered.map((FinalCoursesOffered) => (
                        <table>
                            <tr styles={"border : 2px solid black"}>
                                <td styles={"border : 2px solid black"}>
                                    <div key={FinalCoursesOffered.cid} className="FinalCoursesOffered">
                                        <input
                                            type="checkbox"
                                            value={FinalCoursesOffered.cid}
                                        />
                                        &nbsp;&nbsp; &nbsp;&nbsp;
                                        <span>{FinalCoursesOffered.coursename}</span> &nbsp;&nbsp;
                                        <span>{FinalCoursesOffered.coursecode}</span> &nbsp;&nbsp;
                                        <span>{FinalCoursesOffered.final_offering}</span> &nbsp;&nbsp;
                                    </div>
                                </td>
                            </tr>
                        </table>
                    ))} <br></br>&nbsp; &nbsp;
                    <Button variant='contained' onClick={handleClick}> Submit </Button>
                    <br></br>
                </CardContent>
            </Box>
        </Card >
    );
};

export default FinalCoursesOffered;
