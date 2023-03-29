import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login_id, setlogin] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:3001/otherlogins', { login_id, username, password });

      console.log('User registered successfully');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="login_id" value={login_id} onChange={(event) => setlogin(event.target.value)} required />
      <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
