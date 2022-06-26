import { MESSAGES } from "../../constants/data";

const initialState = {
	messages: MESSAGES,
	selected: null,
};

const MessageReducer = (state = initialState, action) => state;

export default MessageReducer;
