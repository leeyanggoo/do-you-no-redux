import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
// import asyncFunctionMiddleware from './middlewares/asyncFunctionMiddleware';
import { thunk } from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import session from 'redux-persist/lib/storage/session';
import { configureStore } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage: session,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * 브라우저 확장 프로그램에 REDUX_DEVTOOLS가 설치되어 있으면 DEVTOOLS의 compose 실행
 * 아니라면 Redux의 compose 수행
 */
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleWare = createSagaMiddleware();

// const store = createStore(
//   // rootReducer,
//   persistedReducer,
//   composeEnhancers(applyMiddleware(thunk, sagaMiddleWare))
// );

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const defaultMiddleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
    // return [...defaultMiddleware, sagaMiddleWare]
    // https://redux-toolkit.js.org/api/getDefaultMiddleware#intended-usage
    // middleware가 예상하는 타입은 Tuple이라서 concat을 사용하는 게 더 좋다. spread operator는 array<T>
    return defaultMiddleware.concat(sagaMiddleWare);
  },
});

sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);

// export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
