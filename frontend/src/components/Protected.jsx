import React, { useEffect, useState } from 'react'
import { checkLinksExists } from './Userservice';
import { useNavigate } from 'react-router-dom';


function Protected(props) {

   const [access,setAccess] = useState('');
   const {Component,pageid} = props
   const navigate = useNavigate();
   
    useEffect(() => {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');
        // console.log(token);
        if(!token){
            navigate('/');
        }else{
            (async () => {
                const exists = await checkLinksExists(username,pageid);
                setAccess(exists);
                })();
        }
      },[]); 
    console.log(pageid);
  return (
    <div>{
        access ? <Component />: <>Dont have access</> }
    </div>
  )
}

export default Protected
