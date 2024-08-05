import { combineReducers } from 'redux';
// import todoReducer from './todoReducer';
// import todoReducer from '../ducks/todoDuck';
import todoReducer from '../actions/todoAction';
import fetchTodosReducer from '../actions/fetchTodosAction';

const rootReducer = combineReducers({
  todo: todoReducer,
  fetchTodos: fetchTodosReducer,
});

export default rootReducer;
