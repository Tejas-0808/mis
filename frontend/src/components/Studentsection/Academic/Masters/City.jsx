import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


const City = () => {

  const [city, setCity] = useState([]);

  const fetchAllBranch = async () => {
    try {
        const res = await axios.get("http://localhost:3001/city");
        setCity(res.data);
        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}

  useEffect(() => {

    fetchAllBranch();
    // eslint-disable-next-line
  }, []);
  const navigate = useNavigate();

  
  const handleDelete= async (id) =>{
    try{
      console.log(id)
      await axios.delete("http://localhost:3001/city/"+id)
      const res = await axios.get("http://localhost:3001/city");
        setCity(res.data);
      // window.location.reload()
      // navigate("/"); 
    }catch(err){
      console.log(err);
    }

  }
//   console.log(branch);

  return (
    <div>
        <h1>
            city info
        </h1>
        <div className="city">
        {city.map((city) => (
          <div key={city.city_id} className="city">
            <h2>{city.city_id}</h2>
            <p>{city.city_name}</p>
            <p>{city.isDistrict}</p>
            <p>{city.state_id}</p>
            <button className="delete" onClick={()=>handleDelete(city.city_id)}>Delete</button>
            </div>
        ))}
        <button>
            <Link to="/Addcity">Add new City</Link>
        </button>
    </div>
    </div>
  )
}

export default City;
