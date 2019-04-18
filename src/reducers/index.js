import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import layoutReducer from "./layoutReducer";
import locationsReducer from "./locationsReducer";

export default combineReducers({
  layout: layoutReducer,
  locations: locationsReducer,
  errors: errorsReducer
});
