import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Religion = () => {

    const  [Religion, setReligion] = useState([]);

    const fetchReligion = async () => {
        try{
            const res = await axios.get("http://localhost:3001/religion");
            setReligion(res.data);
            console.log(res.data);
        }   catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchReligion();
    },[]);

    const navigate = useNavigate();

    const handleDelete= async (id) =>{
        try{
            console.log(id)
            await axios.delete("http://localhost:3001/religion/"+id)
            const res = await axios.get("http://localhost:3001/religion");
              setReligion(res.data);
            // window.location.reload()
            // navigate("/"); 
          }catch(err){
            console.log(err);
          }
    };

    return (<div>
        <h1>Religion Management</h1>
        <div className='Religion'>
        {Religion.map((Religion) => (
            <div key={Religion.religion_id} className="religion">
                <p>{Religion.religion_id}</p>
                <p>{Religion.Religion_name}</p>
                <button className='update'><Link to={`/updatereligion/${Religion.religion_id}`}>Update</Link></button>
                <button className="delete" onClick={()=>handleDelete(Religion.religion_id)}>Delete</button>
            </div>
        ))}
        </div>
        <button className='AddReligion'><Link to='/addreligion'>ADD Religion</Link></button>
    </div>)
}

export default Religion;