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

const mapStateToProps = (state: any, ownProps: any) => {
  return { todoItems: state.todo };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    addTodo: (text: TODO_ACTION_VALUE) => {
      dispatch(addTodoActionCreator(text));
    },
    removeTodo: () => {
      dispatch(removeTodoActionCreator());
    },
    removeAll: () => {
      dispatch(removeAllActionCreator());
    },
    triggerAsyncFunction: (asyncFunction: Function) => dispatch(asyncFunction),
  };
};

const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoAppContainer;
