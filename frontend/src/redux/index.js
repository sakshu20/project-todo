import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { TaskReducer } from "./reducers/taskReducers";

const rootReducer = combineReducers({
    allTask: TaskReducer
}) 
const store = createStore(
    rootReducer,
    { },
    composeWithDevTools(applyMiddleware(thunk))
)
export default store