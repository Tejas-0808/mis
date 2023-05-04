import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const Category = () => {

    const [category, setCategory] = useState([]);

    const fetchCategory = async () => {
        try {
            const res = await axios.get("http://localhost:3001/category");
            setCategory(res.data);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCategory();
    }, []);

    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            console.log(id)
            await axios.delete("http://localhost:3001/category/" + id)
            const res = await axios.get("http://localhost:3001/category");
            setCategory(res.data);
            // window.location.reload()
            // navigate("/"); 
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Box
            component="form"
            sx={{
                width: '100%', height: '100%'
            }}
            noValidate
            autoComplete="off">
            <Card sx={{
                m: 1, minWidth: 275, backgroundColor: '#F5F5F5'
            }}>
                <CardContent>
                    <CardHeader
                        style={{ backgroundColor: "lightblue", textAlign: 'center' }}
                        title="Category Management"
                    />

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Category ID</TableCell>
                                    <TableCell align="center">Category Name</TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>

                            </TableHead>
                            <TableBody>
                                {category.map((category) => (
                                    <TableRow
                                        key={category.category_id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center">{category.category_id}</TableCell>
                                        <TableCell align="center">{category.category_name}</TableCell>
                                        <TableCell align="center">
                                            <Link to={`/updatecategory/${category.category_id}`}><Button variant='contained' color='success'>Update</Button></Link>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <Button variant='contained' color='error' onClick={() => handleDelete(category.category_id)}>Delete</Button>
                                        </TableCell>
                                    </TableRow>

                                ))}

                            </TableBody>
                        </Table>
                    </TableContainer>
                    <br></br>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                        <Link to="/addcategory"><Button variant='contained'>Add new Category</Button></Link>

                    </Box>
                </CardContent>
            </Card>
        </Box>
    )

}

export default Category;