import {combineReducers} from "redux";
import counterReducer from "./counter";
import todosReducer from "./todos";
const allReducers = combineReducers({
      counterReducer,
      todosReducer
})

export default allReducers;