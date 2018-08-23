import {createStore} from "redux";
import postReducer from "./Reducer"


const store = createStore(postReducer)
window.store = store;

export default store;