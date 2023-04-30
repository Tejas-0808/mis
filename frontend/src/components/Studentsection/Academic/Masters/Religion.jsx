import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const Religion = () => {

    const [Religion, setReligion] = useState([]);

    const fetchReligion = async () => {
        try {
            const res = await axios.get("http://localhost:3001/religion");
            setReligion(res.data);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchReligion();
    }, []);

    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            console.log(id)
            await axios.delete("http://localhost:3001/religion/" + id)
            const res = await axios.get("http://localhost:3001/religion");
            setReligion(res.data);
            // window.location.reload()
            // navigate("/"); 
        } catch (err) {
            console.log(err);
        }
    };

    return (

        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <CardHeader
                    style={{ backgroundColor: "lightblue", textAlign: 'center' }}
                    title="Religion Management"
                />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Religion Id</TableCell>
                                <TableCell align="center">Religion Name</TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>

                        </TableHead>
                        <TableBody>
                            {Religion.map((Religion) => (
                                <TableRow
                                    key={Religion.religion_id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{Religion.religion_id}</TableCell>
                                    <TableCell align="center">{Religion.Religion_name}</TableCell>
                                    <TableCell align="center">
                                        <Link to={`/updatereligion/${Religion.religion_id}`}><Button variant='contained' color='success'>Update</Button></Link>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <Button variant='contained' color='error' onClick={() => handleDelete(Religion.religion_id)}>Delete</Button>
                                    </TableCell>
                                </TableRow>

                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
                <br></br>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                    <Link to="/addreligion"><Button variant='contained'>Add new Religion</Button></Link>

                </Box>
            </CardContent>
        </Card>



        //   <div>
        //         <h1>Religion Management</h1>
        //         <div className='Religion'>
        //         {Religion.map((Religion) => (
        //             <div key={Religion.religion_id} className="religion">
        //                 <p>{Religion.religion_id}</p>
        //                 <p>{Religion.Religion_name}</p>
        //                 <button className='update'><Link to={`/updatereligion/${Religion.religion_id}`}>Update</Link></button>
        //                 <button className="delete" onClick={()=>handleDelete(Religion.religion_id)}>Delete</button>
        //             </div>
        //         ))}
        //         </div>
        //         <button className='AddReligion'><Link to='/addreligion'>ADD Religion</Link></button>
        //     </div>
    )
}

export default Religion;