import {
  ADD_MESSAGE, DELETE_MESSAGE, EDIT_MESSAGE, SET_MESSAGES
} from "./action-types"

const ADD_MESSAGE_AC = (textMessage) => ({ type: ADD_MESSAGE, textMessage });
const DELETE_MESSAGE_AC = (id) => ({ type: DELETE_MESSAGE, id });
const EDIT_MESSAGE_AC = (id, textMessage) => ({ type: EDIT_MESSAGE, id, textMessage });
const SET_MESSAGES_AC = (messages) => ({ type: SET_MESSAGES, messages });

export {
  ADD_MESSAGE_AC,
  DELETE_MESSAGE_AC,
  EDIT_MESSAGE_AC,
  SET_MESSAGES_AC,
}