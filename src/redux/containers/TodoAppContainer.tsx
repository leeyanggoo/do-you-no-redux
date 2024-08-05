import { connect } from 'react-redux';
import { TODO_ACTION_VALUE } from '../types/todoType';

// import {
//   addTodoActionCreator,
// removeAllActionCreator,
// removeTodoActionCreator,
//  } from '../actions';

// import {
//   addTodoActionCreator,
//   removeAllActionCreator,
//   removeTodoActionCreator,
// } from '../ducks/todoDuck';

import {
  addTodo as addTodoActionCreator,
  removeTodo as removeTodoActionCreator,
  removeAll as removeAllActionCreator,
} from '../actions/todoAction';

import TodoApp from '../../components/TodoApp';
import addTodoThunkActionCreator from '../thunks/addTodoThunk';
import { fetchTodosRequested as fetchTodosRequestedCreator } from '../actions/fetchTodosAction';
import { RootState } from '../store';

const mapStateToProps = (state: RootState, ownProps: any) => {
  return { todoItems: [...state.todo, ...state.fetchTodos.data] };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    addTodo: (text: TODO_ACTION_VALUE) => {
      // dispatch(addTodoActionCreator(text));
      dispatch(addTodoThunkActionCreator(text));
    },
    removeTodo: () => {
      dispatch(removeTodoActionCreator());
    },
    removeAll: () => {
      dispatch(removeAllActionCreator());
    },
    triggerAsyncFunction: (asyncFunction: Function) => dispatch(asyncFunction),
    fetchTodo: () => dispatch(fetchTodosRequestedCreator()),
  };
};

const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoAppContainer;
