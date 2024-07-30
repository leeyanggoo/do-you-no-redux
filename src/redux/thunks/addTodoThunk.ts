import { ThunkAction } from 'redux-thunk';
import {
  addTodo as addTodoActionCreator,
  removeTodo as removeTodoActionCreator,
} from '../actions/todoAction';
import { TODO_ACTION_VALUE } from '../types/todoType';
import { Action } from 'redux';
import { RootState } from '../store';

const TODO_MAX_COUNT = 3;

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const addTodoThunkActionCreator =
  (text: TODO_ACTION_VALUE): AppThunk =>
  (dispatch, getState) => {
    const state = getState();

    if (state.todo.length < TODO_MAX_COUNT) {
      dispatch(addTodoActionCreator('아이템 추가 중...'));
      setTimeout(() => {
        dispatch(removeTodoActionCreator());
        dispatch(addTodoActionCreator(text));
      }, 1000);
      return;
    } else {
      dispatch(addTodoActionCreator('최대 개수 초과!'));
      setTimeout(() => {
        dispatch(removeTodoActionCreator());
      }, 1000);
    }
  };

export default addTodoThunkActionCreator;
