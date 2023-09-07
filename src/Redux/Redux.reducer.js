import {SET_USERNAME,SET_PASSWORD,SET_EMAIL} from '../Redux/Redux.action'

const initialState = {
  username: '',
  password: '',
  email: '',
};

const LoginReducer = (state = initialState, action) => {
  console.log('action====>', action.type);
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload, // Corrected
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload, // Corrected
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload, // Corrected
      };
    default:
      return state;
  }
};

export  {LoginReducer}
