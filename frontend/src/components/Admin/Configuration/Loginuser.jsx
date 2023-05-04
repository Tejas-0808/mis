import React from 'react';
import LoginForm from '../../Login/LoginForm';
import RegistrationForm from './RegistrationForm';
import Home from '../../Home';

const Loginuser = () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  console.log(token);
  const roles = undefined;
  // const roles = localStorage.getItem('role');

  console.log(roles);
  return (
    <div>
      {token && roles === 1 ? <Home /> : <>
        <h1>Login</h1>
        {roles != 1 ? alert("not admin") : true}
        <LoginForm />

        <h1>Register</h1>
        <RegistrationForm />
      </>}
    </div>
  );
};

export default Loginuser;
