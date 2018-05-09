import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import login from './Login';

const rootReducer = combineReducers({
  router: routerReducer,
  login
});

export default rootReducer;
