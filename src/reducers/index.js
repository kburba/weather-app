import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";

export default combineReducers({
  auth: errorsReducer
});
