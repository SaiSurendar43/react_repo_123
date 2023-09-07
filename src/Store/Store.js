import { legacy_createStore as createStore } from '@reduxjs/toolkit';
import rootReducer from '../Redux/Rootreducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer,composeWithDevTools())
export default store;
