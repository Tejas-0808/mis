import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const District = () => {

    const  [District, setDistrict] = useState([]);

    const fetchDistrict = async () => {
        try{
            const res = await axios.get("http://localhost:3001/district");
            setDistrict(res.data);
            console.log(res.data);
        }   catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchDistrict();
    },[]);

    const navigate = useNavigate();

    const handleDelete= async (id) =>{
        try{
            console.log(id)
            await axios.delete("http://localhost:3001/district/"+id)
            const res = await axios.get("http://localhost:3001/district");
              setDistrict(res.data);
            // window.location.reload()
            // navigate("/"); 
          }catch(err){
            console.log(err);
          }
    };

    return (<div>
        <h1>District Management</h1>
        <div className='District'>
        {District.map((District) => (
            <div key={District.district_id} className="District">
                <p>{District.district_id}</p>
                <p>{District.district_name}</p>
                <button className='update'><Link to={`/updatedistrict/${District.district_id}`}>Update</Link></button>
                <button className="delete" onClick={()=>handleDelete(District.district_id)}>Delete</button>
            </div>
        ))}
        </div>
        <button className='AddDistrict'><Link to='/adddistrict'>ADD District</Link></button>
    </div>)
}

export default District;