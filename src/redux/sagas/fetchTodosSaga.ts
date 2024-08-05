import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import fetchTodosReducer, {
  fetchTodosFailed,
  fetchTodosRequested,
  fetchTodosSucceeded,
} from '../actions/fetchTodosAction';
import { TODO_ACTION_VALUE } from '../types/todoType';

function* fetchTodos() {
  try {
    yield put(fetchTodosSucceeded(['...await']));

    const data: TODO_ACTION_VALUE[] = yield delay(2000, [
      'Todo1 from Server',
      'Todo2 from Server',
      'Todo3 from Server',
    ]);

    yield put(fetchTodosSucceeded(data));
  } catch (error) {
    yield put(fetchTodosFailed(error));
  }
}

function* fetchTodosSaga() {
  yield takeEvery(fetchTodosRequested, fetchTodos);
}

export default fetchTodosSaga;
