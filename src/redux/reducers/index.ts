import { combineReducers, Reducer, UnknownAction } from 'redux';
// import todoReducer from './todoReducer';
// import todoReducer from '../ducks/todoDuck';
// import todoReducer, { TodoPayload } from '../actions/todoAction';
import todoReducer from '../slices/todoSlice';
import fetchTodosReducer, {
  FetchTodosPayload,
} from '../actions/fetchTodosAction';
import { Action as ReduxAction } from 'redux';
import { Action as ReduxActionsAction } from 'redux-actions';
import { PayloadAction } from '@reduxjs/toolkit';
import { TODO_ACTION_VALUE } from '../types/todoType';

export type CombinedState = {
  todo: ReturnType<typeof todoReducer>;
  fetchTodos: ReturnType<typeof fetchTodosReducer>;
};

export type CombinedAction =
  | PayloadAction<TODO_ACTION_VALUE>
  | PayloadAction<FetchTodosPayload>;

const rootReducer: Reducer<CombinedState, CombinedAction, any> =
  combineReducers({
    todo: todoReducer,
    fetchTodos: fetchTodosReducer,
  });

export default rootReducer;
