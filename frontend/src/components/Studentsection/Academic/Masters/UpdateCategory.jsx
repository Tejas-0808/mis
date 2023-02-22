import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";


function UpdateCategory(){
    const [Category, setCategory] = useState({category_id: "" ,category_name: ""});
    const navigate = useNavigate();
    const location = useLocation();
    
    console.log(location);
    const C_id = location.pathname.split("/")[2];

    const fetchCategory = async() => {
        try{
            const res = await axios.get("http://localhost:3001/category/"+ C_id);
            setCategory(res.data);
            console.log(Category);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCategory();
    }, []);

    const handleChange = async (e) => {
        setCategory((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        try{
            await axios.put("http://localhost:3001/category/" + C_id, Category);
            navigate("/category");
        }catch(err){
            console.log(err);
        }
        
    }

    return (<div className='edit_form'>
        <h2>EDIT</h2>
        <input type="number" placeholder="ID" name="category_id" value={Category.category_id} onChange={handleChange}/>
        <input type="text" placeholder="Category Name" name="category_name" value={Category.category_name} onChange={handleChange}/>
        <button onClick={handleEdit}>Submit</button>
    </div>)
}

export default UpdateCategory;