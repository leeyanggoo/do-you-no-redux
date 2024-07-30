import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
// import asyncFunctionMiddleware from './middlewares/asyncFunctionMiddleware';
import { thunk } from 'redux-thunk';

/**
 * 브라우저 확장 프로그램에 REDUX_DEVTOOLS가 설치되어 있으면 DEVTOOLS의 compose 실행
 * 아니라면 Redux의 compose 수행
 */
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
