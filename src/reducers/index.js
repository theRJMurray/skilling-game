import viewReducer from './view'
import landmarkReducer from './landmark'
import { combineReducers } from "redux";


const allReducers = combineReducers({
    view: viewReducer,
    landmark: landmarkReducer
})

export default allReducers