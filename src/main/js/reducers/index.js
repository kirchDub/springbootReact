import { combineReducers } from "redux";
//import { reducer as reduxForm } from "redux-form";
import dataReducer from "./dataReducer";
import authReducer from "./authReducer";

export default combineReducers({
  data: dataReducer,
  auth: authReducer
});
