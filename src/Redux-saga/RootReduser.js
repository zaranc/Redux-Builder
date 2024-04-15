import { combineReducers } from "redux";
import userReducer from "./User/reduser/Reduser";



let rootReducer = combineReducers({
    userReducer,
})

export default rootReducer;