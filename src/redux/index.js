import { createStore, combineReducers } from "redux";
import { characterReducer } from "./character";

const reducers = combineReducers({ characterReducer });

export default createStore(reducers);
