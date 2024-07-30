import { TODO_ACTION_DUCK_TYPE, TODO_ACTION_VALUE } from '../types/todoType';

// Actions (Action Types)
export const ACTION_DUCK_TYPE_ADD_TODO = 'my-app/todo/ADD_TODO';
export const ACTION_DUCK_TYPE_REMOVE_TODO = 'my-app/todo/REMOVE_TODO';
export const ACTION_DUCK_TYPE_REMOVE_ALL = 'my-app/todo/REMOVE_ALL';

// Reducer
const initialState: TODO_ACTION_VALUE[] = [];

export default function todoReducer(
  state = initialState,
  action: { type: TODO_ACTION_DUCK_TYPE; text: TODO_ACTION_VALUE }
) {
  switch (action.type) {
    case ACTION_DUCK_TYPE_ADD_TODO:
      return state.concat(action.text);
    case ACTION_DUCK_TYPE_REMOVE_TODO:
      return state.slice(0, -1);
    case ACTION_DUCK_TYPE_REMOVE_ALL:
      return [];
    default:
      return state;
  }
}

// Action Creators
export function addTodoActionCreator(text: TODO_ACTION_VALUE) {
  return {
    type: ACTION_DUCK_TYPE_ADD_TODO,
    text: text,
  };
}

export function removeTodoActionCreator() {
  return {
    type: ACTION_DUCK_TYPE_REMOVE_TODO,
  };
}

export function removeAllActionCreator() {
  return {
    type: ACTION_DUCK_TYPE_REMOVE_ALL,
  };
}
