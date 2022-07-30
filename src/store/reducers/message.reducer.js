// import { MESSAGES } from "../../constants/data";
import { messageTypes } from "../types";

const { SELECT_MESSAGE, DELETE_MESSAGE, ADD_MESSAGE, SELECT_ALL_MESSAGES } = messageTypes;

const initialState = {
	messages: [],
	selected: null,
};

const MessageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECT_MESSAGE:
			console.log("MENSAJE SELECCIONADO", action.message);
			const selected_message = state.messages.find((message) => message.id == action.message.id);

			if (selected_message === -1) return state;
			return {
				...state,
				selected: selected_message,
			};

		case DELETE_MESSAGE:
			const updated_messages = state.messages.filter((item) => item.id !== action.messageId);
			return {
				...state,
				messages: updated_messages,
			};
		case ADD_MESSAGE:
			return {
				...state,
				messages: [...state.messages, action.message],
			};
		case SELECT_ALL_MESSAGES:
			return {
				...state,
				messages: action.message,
			};
		default:
			return state;
	}
};

export default MessageReducer;
