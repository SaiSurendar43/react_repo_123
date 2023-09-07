import React from "react";
import {useSelector} from 'react-redux'
import Box from '@mui/material/Box'

const Table =()=>
{
   
    const user = useSelector((state) => 
      {
         return state.item
      })

    console.log('user', user); 


return (
    <div>
        <h1>USer info</h1>
          <h2>Username : {user.username}</h2>
          <h2>Password: {user.password}</h2>
          <h2>Email: {user.email}</h2>
    </div>
)
}

export default Table;