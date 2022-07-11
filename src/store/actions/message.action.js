import { messageTypes } from "../types";
const { SELECT_MESSAGE, DELETE_MESSAGE, ADD_MESSAGE } = messageTypes;

export const selectedMessage = (message) => ({ type: SELECT_MESSAGE, message: message });
export const deleteMessage = (id) => ({ type: DELETE_MESSAGE, messageId: id });
export const addMessage = (message) => ({ type: ADD_MESSAGE, message: message });
