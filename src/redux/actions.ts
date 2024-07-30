import { TODO_ACTION_VALUE } from './types/todoType';

// Action Types
export const ACTION_TYPE_ADD_TODO = 'ADD_TODO';
export const ACTION_TYPE_REMOVE_TODO = 'REMOVE_TODO';
export const ACTION_TYPE_REMOVE_ALL = 'REMOVE_ALL';

// Action Creators
export function addTodoActionCreator(text: TODO_ACTION_VALUE) {
  return {
    type: ACTION_TYPE_ADD_TODO,
    text: text,
  };
}

export function removeTodoActionCreator() {
  return {
    type: ACTION_TYPE_REMOVE_TODO,
  };
}

export function removeAllActionCreator() {
  return {
    type: ACTION_TYPE_REMOVE_ALL,
  };
}
