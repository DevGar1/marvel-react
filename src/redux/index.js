import { createStore, combineReducers } from "redux";
import { characterReducer } from "./character";
import { comicsReducer } from "./comics";
import { storiesReducer } from "./stories";
import { seriesReducer } from "./series";
const reducers = combineReducers({
  characterReducer,
  comicsReducer,
  storiesReducer,
  seriesReducer,
});

export default createStore(reducers);
