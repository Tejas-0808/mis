import React from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import Profile from './Profile';
import Home from '../../Home';

const Loginuser = () => {
  const token = localStorage.getItem('token');
console.log(token+"123");
  return (
     <div>
      {token ? <Home /> : <>
      <h1>Login</h1>
      <LoginForm />

      <h1>Register</h1>
      <RegistrationForm />
      </>}
    </div>
  );
};

export default Loginuser;
