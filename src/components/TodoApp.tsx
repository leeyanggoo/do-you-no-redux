import React from 'react';
import { TODO_ACTION_VALUE } from '../redux/types/todoType';
import { Middleware, MiddlewareAPI } from 'redux';

interface TodoAppProps {
  todoItems: TODO_ACTION_VALUE[];
  addTodo: (text: TODO_ACTION_VALUE) => void;
  removeTodo: () => void;
  removeAll: () => void;
  triggerAsyncFunction: (asyncFunction: Function) => any;
}

const TodoApp: React.FC<TodoAppProps> = props => {
  const { todoItems, addTodo, removeTodo, removeAll, triggerAsyncFunction } =
    props;

  const [newTodo, setNewTodo] = React.useState('');

  const handleAddTodo = () => {
    if (!newTodo) return;
    addTodo(newTodo);
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
        <button onClick={() => removeTodo()}>삭제</button>
        <button onClick={() => removeAll()}>전부 삭제</button>
        <button
          onClick={() =>
            triggerAsyncFunction(
              (
                dispatch: MiddlewareAPI['dispatch'],
                getState: MiddlewareAPI['getState']
              ) => {
                console.log(`비동기 함수 실행`);

                new Promise((resolve, reject) => {
                  setTimeout(resolve, 1000);
                })
                  .then(() => console.log(`비동기 함수 성공`, getState()))
                  .catch(() => console.log(`비동기 함수 실패`, getState()))
                  .finally(() => console.log(`비동기 함수 종료`, getState()));
              }
            )
          }
        >
          트리거
        </button>
      </div>
    </div>
  );
};

export default TodoApp;
