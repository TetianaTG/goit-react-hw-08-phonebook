import { combineReducers } from "redux";
import contactReducer from "./contacts/contactsReducer";
import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
  contactRoot: contactReducer,
  authRoot: authReducer,
});

export default rootReducer;