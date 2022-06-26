import { createStore, combineReducers } from "redux";
import { MessageReducer } from "./reducers";

const rootReducer = combineReducers({
	message: MessageReducer,
});

export default createStore(rootReducer);
