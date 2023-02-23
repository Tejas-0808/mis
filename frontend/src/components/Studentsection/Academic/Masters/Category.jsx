import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Category = () => {

    const  [category, setCategory] = useState([]);

    const fetchCategory = async () => {
        try{
            const res = await axios.get("http://localhost:3001/category");
            setCategory(res.data);
            console.log(res.data);
        }   catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCategory();
    },[]);

    const navigate = useNavigate();

    const handleDelete= async (id) =>{
        try{
            console.log(id)
            await axios.delete("http://localhost:3001/category/"+id)
            const res = await axios.get("http://localhost:3001/category");
              setCategory(res.data);
            // window.location.reload()
            // navigate("/"); 
          }catch(err){
            console.log(err);
          }
    };

    return (<div>
        <h1>Category Management</h1>
        <div className='category'>
        {category.map((category) => (
            <div key={category.category_id} className="category">
                <p>{category.category_id}</p>
                <p>{category.category_name}</p>
                <button className='update'><Link to={`/updatecategory/${category.category_id}`}>Update</Link></button>
                <button className="delete" onClick={()=>handleDelete(category.category_id)}>Delete</button>
            </div>
        ))}
        </div>
        <button className='AddCaste'><Link to='/addcategory'>ADD Caste</Link></button>
    </div>)
}

export default Category;