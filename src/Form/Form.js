import React from 'react';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';

function MyComponent() {
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
        <TextField sx={{marginTop:'10px'}} id="input-with-sx" label="Username" variant="standard" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField sx={{marginTop:'10px'}} id="input-with-sx" label="Password" variant="standard" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField sx={{marginTop:'10px'}} id="input-with-sx" label="Email" variant="standard" />
      </Box>
        
    </Box>
  );
}

export default MyComponent;
