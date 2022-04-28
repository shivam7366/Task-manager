import { combineReducers } from "redux";
import user from "./UserReducer";
import tasks from "./TaskReducer";
export default combineReducers({ user, tasks });
