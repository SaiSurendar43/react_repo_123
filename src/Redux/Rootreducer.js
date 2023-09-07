import {LoginReducer} from '../Redux/Redux.reducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({item : LoginReducer })

export default rootReducer

