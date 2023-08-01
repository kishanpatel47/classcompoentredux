import Increment from "./Increment";
import Decrement from "./Decrement";
import { combineReducers } from "redux";
const rootReducers =combineReducers({
    increment:Increment,
    decrment:Decrement
})
export default rootReducers;