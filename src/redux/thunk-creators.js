import { mesagesAPI } from "../api/api"
import { SET_MESSAGES_AC, ADD_MESSAGE_AC, DELETE_MESSAGE_AC, EDIT_MESSAGE_AC } from "./action-creators";

const getMessage = (params) => (dispatch) => {
  const messages = mesagesAPI.getMessages(params);
  dispatch(SET_MESSAGES_AC(messages));
}

const addMessage = (textMessage, params) => (dispatch) => {
  mesagesAPI.addMessageToLocalStorage(textMessage, params);
  dispatch(ADD_MESSAGE_AC(textMessage));
}

const deleteMessage = (id, params) => (dispatch) => {
  mesagesAPI.deleteMessageToLocalStorage(id, params);
  dispatch(DELETE_MESSAGE_AC(id));
}

const editMessage = (id, textMessage, params) => (dispatch) => {
  mesagesAPI.editMessageToLocalStorage(id, textMessage, params);
  dispatch(EDIT_MESSAGE_AC(id, textMessage));
}

export {
  getMessage,
  addMessage,
  deleteMessage,
  editMessage,
}