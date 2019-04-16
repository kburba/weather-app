import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import layoutReducer from "./layoutReducer";

export default combineReducers({
  layout: layoutReducer,
  errors: errorsReducer
});
