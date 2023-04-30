import { combineReducers } from "redux";
import employee from "./employee";
import modal from "./modal";

const rootReducer = combineReducers({
    employee,
    modal
});

export default rootReducer;