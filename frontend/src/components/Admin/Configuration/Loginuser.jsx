import React from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import Profile from './Profile';
import Home from '../../Home';

const Loginuser = () => {
  const token = localStorage.getItem('token');
console.log(token);
const roles = undefined;
// const roles = localStorage.getItem('role');

// console.log(roles);
  return (
     <div>
      {token && roles===1 ? <Home /> : <>
      <h1>Login</h1>
      {roles!=1 ? alert("not admin"): true}
      <LoginForm />

      <h1>Register</h1>
      <RegistrationForm />
      </>}
    </div>
  );
};

export default Loginuser;
