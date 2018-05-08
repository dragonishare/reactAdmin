import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import counter from './Counter';

const rootReducer = combineReducers({
  router: routerReducer,
  counter
});

export default rootReducer;
