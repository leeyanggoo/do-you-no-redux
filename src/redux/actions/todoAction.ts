import { TODO_ACTION_VALUE } from '../types/todoType';
import { createActions, handleActions, Action } from 'redux-actions';

// 초기 상태 타입 정의
const initialState: TODO_ACTION_VALUE[] = [];

// 리듀서 타입 정의
type TodoState = typeof initialState;
type TodoPayload = { text?: TODO_ACTION_VALUE };

// 액션 생성자 정의
export const { addTodo, removeTodo, removeAll } = createActions<TodoPayload>({
  ADD_TODO: (text: TODO_ACTION_VALUE) => ({ text }), // payload 객체 리턴
  REMOVE_TODO: () => ({}),
  REMOVE_ALL: () => ({}),
});

// 리듀서 정의
const todoReducer = handleActions<TodoState, TodoPayload>(
  {
    [addTodo.toString()]: (state, action: Action<TodoPayload>) => {
      if (action.payload.text) {
        return state.concat(action.payload.text);
      }
      return state;
    },
    [removeTodo.toString()]: state => state.slice(0, -1),
    [removeAll.toString()]: () => [],
  },
  initialState
);

export default todoReducer;
