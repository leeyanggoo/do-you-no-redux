import { TODO_ACTION_VALUE } from '../types/todoType';
import { createActions, handleActions, Action } from 'redux-actions';

// 초기 상태 타입 정의
export const initialState: TODO_ACTION_VALUE[] = []; // 정확한 초기 상태 타입 정의

// 리듀서 타입 정의
export type TodoState = typeof initialState;
export type TodoPayload = { text?: TODO_ACTION_VALUE };

// 액션 생성자 정의
export const { addTodo, removeTodo, removeAll } = createActions<TodoPayload>({
  ADD_TODO: (text: TODO_ACTION_VALUE) => ({ text }), // payload 객체 리턴
  REMOVE_TODO: () => ({}),
  REMOVE_ALL: () => ({}),
});

// 리듀서 정의
const todoReducer = handleActions<TodoState, TodoPayload>(
  {
    [addTodo.toString()]: (
      state = initialState,
      action: Action<TodoPayload>
    ) => {
      if (action.payload && action.payload.text) {
        return state.concat(action.payload.text);
      }
      return state;
    },
    [removeTodo.toString()]: (state = initialState) => state.slice(0, -1),
    [removeAll.toString()]: () => initialState,
  },
  initialState
);

export default todoReducer;
