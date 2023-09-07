const SET_USERNAME = 'SET_USERNAME'
const SET_PASSWORD = 'SET_PASSWORD'
const SET_EMAIL = 'SET_EMAIL'

const handleUserName = (username)=>
{
    return {
        type: SET_USERNAME,
        payload: username,
      };
    
}

 const handlePassword = (Password)=>
{
     return {
         type : SET_PASSWORD,
         payload : Password,
     }
}

 const handleEmail = (Email)=>
{
     return {
         type: SET_EMAIL,
         payload : Email,
     }
}

export{handleUserName,handlePassword,handleEmail,SET_USERNAME,SET_PASSWORD,SET_EMAIL}