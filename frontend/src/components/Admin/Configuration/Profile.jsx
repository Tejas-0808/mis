import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [username, setUsername] = useState('');
//   const [token,setToken] = useState('');;

  useEffect(() => {
    const token = localStorage.getItem('token');
//    setToken(localStorage.getItem('token'))
    console.log(token);
    if (token) {
      axios.get('http://localhost:3001/me', {
        headers: { Authorization: token }
      }).then((response) => {
        setUsername(response.data.username);
      }).catch((err) => {
        localStorage.setItem('token', "");
        console.error(err);
      });
    }
  }, []);

  const Logout = () => {
    localStorage.setItem('token', "");
    window.location.reload();
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {username}!</p>
      <button onClick={Logout}>logout</button>
    </div>
  );
}

export default Profile;
