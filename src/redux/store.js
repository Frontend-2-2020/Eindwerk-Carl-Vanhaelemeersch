import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import postReducer from "./reducers/postReducer";

// Setup store and devtools
const store = createStore(
  combineReducers(authReducer, postReducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
