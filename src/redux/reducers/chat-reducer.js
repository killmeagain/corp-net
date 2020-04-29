import {
  DELETE_MESSAGE,
  ADD_MESSAGE,
  EDIT_MESSAGE,
  SET_MESSAGES,
} from '../action-types'

// Стартовый стэйт
const initialState = {
  messages: []
}

// Редюсер
const сhatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        messages: [...action.messages]
      }
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages.length,
            name: 'Тимофей Судаков',
            time: `${new Date().getHours()} : ${(new Date().getMinutes() < 10) ? `0${new Date().getMinutes()}` : new Date().getMinutes()}`,
            textMessage: action.textMessage,
            isMy: true
          }
        ]
      }
      case DELETE_MESSAGE:
        return {
          ...state,
          messages: state.messages.filter(message => message.id !== action.id)
        }
      case EDIT_MESSAGE:
        return {
          ...state,
          messages: state.messages.map(message => {
            if (message.id === action.id) return {
              ...message,
              textMessage: action.textMessage
            }
            return message;
          })
        }
      default:
        return state;
  }
}

export default сhatReducer;
