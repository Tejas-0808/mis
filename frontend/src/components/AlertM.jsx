import React from 'react';
import {  Alert,Box } from '@mui/material';


const AlertM = ({ type, message }) => {

  return (
    <div>
 
        <Alert severity={type}>{message}</Alert>

    </div>
  );
};

export default AlertM;
