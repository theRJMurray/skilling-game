import viewReducer from './view'
import { combineReducers } from "redux";


const allReducers = combineReducers({
    view: viewReducer
})

export default allReducers