import { Middleware } from 'redux';

const asyncFunctionMiddleware: Middleware = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }

  return next(action);
};

export default asyncFunctionMiddleware;
