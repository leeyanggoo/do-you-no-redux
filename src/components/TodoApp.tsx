import React from 'react';
import { TODO_ACTION_VALUE } from '../redux/types/todoType';
import { Middleware, MiddlewareAPI } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import {
  addTodo as addTodoActionCreator,
  removeTodo as removeTodoActionCreator,
  removeAll as removeAllActionCreator,
} from '../redux/slices/todoSlice';
import { fetchTodosRequested as fetchTodosRequestedCreator } from '../redux/actions/fetchTodosAction';
import { CombinedAction, CombinedState } from '../redux/reducers';

interface TodoAppProps {
  // todoItems: TODO_ACTION_VALUE[];
  // addTodo: (text: TODO_ACTION_VALUE) => void;
  // removeTodo: () => void;
  // removeAll: () => void;
  // triggerAsyncFunction: (asyncFunction: Function) => any;
  // fetchTodo: () => void;
}

const TodoApp: React.FC<TodoAppProps> = props => {
  const {
    // todoItems,
    // addTodo,
    // removeTodo,
    // removeAll,
    // triggerAsyncFunction,
    // fetchTodo,
  } = props;

  const todoItems = useSelector((state: RootState) => [
    ...state.todo,
    ...state.fetchTodos.data,
  ]);
  const dispatch = useDispatch<AppDispatch>();

  const [newTodo, setNewTodo] = React.useState('');

  const handleAddTodo = () => {
    if (!newTodo) return;
    // addTodo(newTodo);
    dispatch(addTodoActionCreator(newTodo));
    setNewTodo('');
  };

  return (
    <div>
      <h2>오늘 할 일</h2>
      <ul>
        {todoItems?.map((todoItem, index) => (
          <li key={index}>{todoItem}</li>
        ))}
      </ul>

      <div>
        <input
          type='text'
          value={newTodo}
          onChange={event => setNewTodo(event.target.value)}
        />
        <button onClick={() => handleAddTodo()}>추가</button>
        {/* <button onClick={() => removeTodo()}>삭제</button> */}
        <button onClick={() => dispatch(removeTodoActionCreator(''))}>
          삭제
        </button>
        {/* <button onClick={() => removeAll()}>전부 삭제</button> */}
        <button onClick={() => dispatch(removeAllActionCreator(''))}>
          전부 삭제
        </button>
        <button
          onClick={
            () =>
              dispatch((dispatch, getState) => {
                console.log(`비동기 함수 실행`);

                new Promise((resolve, reject) => {
                  setTimeout(resolve, 1000);
                })
                  .then(() => console.log(`비동기 함수 성공`, getState()))
                  .catch(() => console.log(`비동기 함수 실패`, getState()))
                  .finally(() => console.log(`비동기 함수 종료`, getState()));
              })
            // triggerAsyncFunction(
            //   (
            //     dispatch: MiddlewareAPI['dispatch'],
            //     getState: MiddlewareAPI['getState']
            //   ) => {
            //     console.log(`비동기 함수 실행`);

            //     new Promise((resolve, reject) => {
            //       setTimeout(resolve, 1000);
            //     })
            //       .then(() => console.log(`비동기 함수 성공`, getState()))
            //       .catch(() => console.log(`비동기 함수 실패`, getState()))
            //       .finally(() => console.log(`비동기 함수 종료`, getState()));
            //   }
            // )
          }
        >
          트리거
        </button>

        <button onClick={() => dispatch(fetchTodosRequestedCreator())}>
          바다오기
        </button>
      </div>
    </div>
  );
};

export default TodoApp;
