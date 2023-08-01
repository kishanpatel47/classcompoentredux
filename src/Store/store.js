import { createStore } from "redux";
import rootReducer from "../CombineReducres";
const store =createStore(rootReducer);
export default store;