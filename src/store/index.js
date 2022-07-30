import { createStore, combineReducers, applyMiddleware } from "redux";
import { MessageReducer } from "./reducers";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const rootReducer = combineReducers({
	message: MessageReducer,
});

export default createStore(rootReducer, composedEnhancer);
