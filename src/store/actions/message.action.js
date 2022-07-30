import { messageTypes } from "../types";
import { insertMessageToDB, deleteMessageFromDB, selectAllMessagesFromDB } from "../../db";

const { SELECT_MESSAGE, DELETE_MESSAGE, ADD_MESSAGE, SELECT_ALL_MESSAGES } = messageTypes;

export const selectedMessage = (message) => async (dispatch) => {
	try {
		dispatch({ type: SELECT_MESSAGE, message: message });
	} catch (error) {
		console.log(error);
	}
};

export const addMessage = (message) => async (dispatch) => {
	try {
		let insert = await insertMessageToDB(message);
		// console.log("insert: ", insert);
		dispatch({ type: ADD_MESSAGE, message: insert });
	} catch (err) {
		console.log(error);
	}
};

export const selectAllMessages = () => async (dispatch) => {
	try {
		let messages = await selectAllMessagesFromDB();
		// console.log("ARRAY MENSAJES", messages.rows._array);
		dispatch({ type: SELECT_ALL_MESSAGES, message: messages.rows._array });
	} catch (err) {
		console.log(error);
	}
};

export const deleteMessage = (id) => async (dispatch) => {
	try {
		await deleteMessageFromDB(id);
		dispatch({ type: DELETE_MESSAGE, messageId: id });
	} catch (err) {
		console.log(error);
	}
};
