import {
  ACTION_TYPE_ADD_TODO,
  ACTION_TYPE_REMOVE_TODO,
  ACTION_TYPE_REMOVE_ALL,
} from '../actions';
import { TODO_ACTION_TYPE, TODO_ACTION_VALUE } from '../types/todoType';

const initialState: TODO_ACTION_VALUE[] = [];

function todoReducer(
  state = initialState,
  action: { type: TODO_ACTION_TYPE; text?: TODO_ACTION_VALUE }
) {
  switch (action.type) {
    case ACTION_TYPE_ADD_TODO:
      return state.concat(action.text || '');
    case ACTION_TYPE_REMOVE_TODO:
      return state.slice(0, -1);
    case ACTION_TYPE_REMOVE_ALL:
      return [];
    default:
      return state;
  }
}

export default todoReducer;
