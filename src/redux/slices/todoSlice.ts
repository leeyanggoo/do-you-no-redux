import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { TODO_ACTION_VALUE } from '../types/todoType';

export const initialState: TODO_ACTION_VALUE[] = []; // 정확한 초기 상태 타입 정의

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TODO_ACTION_VALUE>) => {
      console.log(state); // proxy immer.js
      console.log(current(state)); //
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.slice(0, -1);
    },
    // removeTodo: {
    //   reducer: (state, action: PayloadAction<string>) => {
    //     console.log(action.payload);
    //     return state.slice(0, -1);
    //   },
    //   prepare: () => {
    //     return { payload: 'sss' }; // reducer가 실행되기 이전에 실행되는 함수 (검증)
    //   },
    // },
    removeAll: (state, action) => {
      return initialState;
    },
  },
});

export const { addTodo, removeTodo, removeAll } = todoSlice.actions;

export default todoSlice.reducer;
