import { createActions, handleActions } from 'redux-actions';
import { TODO_ACTION_VALUE } from '../types/todoType';

const initialState = {
  pending: false,
  data: [] as TODO_ACTION_VALUE[],
  error: null as Error | null,
};

type FetchTodosState = typeof initialState;
type FetchTodosPayload = { data?: TODO_ACTION_VALUE[]; error?: Error };

export const { fetchTodosRequested, fetchTodosSucceeded, fetchTodosFailed } =
  createActions<FetchTodosPayload>({
    FETCH_TODOS_REQUESTED: () => ({}),
    FETCH_TODOS_SUCCEEDED: (data: TODO_ACTION_VALUE[]) => ({ data }),
    FETCH_TODOS_FAILED: (error: Error) => ({ error }),
  });

const fetchTodosReducer = handleActions<FetchTodosState, FetchTodosPayload>(
  {
    [fetchTodosRequested.toString()]: state => {
      return {
        ...state,
        pending: true,
        data: [],
        error: null,
      };
    },
    [fetchTodosSucceeded.toString()]: (state, action) => {
      return {
        ...state,
        pending: false,
        data: action.payload.data || [],
      };
    },
    [fetchTodosFailed.toString()]: (state, action) => {
      return {
        ...state,
        pending: false,
        error: action.payload.error || new Error('Failed to fetch todos'),
      };
    },
  },
  initialState
);

export default fetchTodosReducer;
