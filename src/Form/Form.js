import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {handleUserName,handlePassword,handleEmail} from  '../Redux/Redux.action.js'
import { useDispatch,useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'

const Form=()=> {
   
   const dispatch = useDispatch();

   const navigate = useNavigate();

  //  const[username,setUserName] = useState('');
  //  const [password,setPassword] = useState('');
  //  const [email,setEmail] = useState('');

  const username = useSelector((state) => state.username);
  const password = useSelector((state) => state.password);
  const email = useSelector((state) => state.email);

  const handleUserChange=(e)=>
    {
       dispatch(handleUserName(e.target.value))
    }

  const handlePasswordChange =(e)=>  
       {
          dispatch(handlePassword(e.target.value))
       }

   const handleEmailChange=(e)=>
   {
        dispatch(handleEmail(e.target.value))
   }   
   
const loginHandler=()=>
{
   console.log('navigate')
  navigate('/table')
    

    
}

  return (
    <Box
      sx={{
        boxShadow: 2,
        width: '20vw',
        height: "30vh",
        margin: '100px auto', // Center horizontally
        display: 'flex',
        flexDirection: 'column', // Stack children vertically
        alignItems: 'center', // Center children horizontally
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField value={username} onChange={handleUserChange} sx={{marginTop:'10px'}} id="input-with-sx" label="Username" variant="standard" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField value={password} onChange={handlePasswordChange} sx={{marginTop:'10px'}} id="input-with-sx" label="Password" variant="standard" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField value = {email} onChange={handleEmailChange} sx={{marginTop:'10px'}} id="input-with-sx" label="Email" variant="standard" />
      </Box>
      <Button onClick={loginHandler} variant="contained">Login</Button>
    </Box>
  );
}

export default Form;
