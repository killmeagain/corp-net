import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import сhatReducer from './reducers/chat-reducer';
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  сhat: сhatReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;