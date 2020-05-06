import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import authReducer from "./reducers/authReducer";
import postReducer from "./reducers/postReducer";
import thunk from "redux-thunk";

// Setup store and devtools
const store = createStore(
  combineReducers({ auth: authReducer, posts: postReducer }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
