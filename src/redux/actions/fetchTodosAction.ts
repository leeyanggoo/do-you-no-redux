import { createActions, handleActions } from 'redux-actions';
import { TODO_ACTION_VALUE } from '../types/todoType';

// 초기 상태 정의
const initialState = {
  pending: false,
  data: [] as TODO_ACTION_VALUE[],
  error: null as Error | null,
};

export type FetchTodosState = typeof initialState;
export type FetchTodosPayload = { data?: TODO_ACTION_VALUE[]; error?: Error };

// 액션 생성자 정의
export const { fetchTodosRequested, fetchTodosSucceeded, fetchTodosFailed } =
  createActions<FetchTodosPayload>({
    FETCH_TODOS_REQUESTED: () => ({}),
    FETCH_TODOS_SUCCEEDED: (data: TODO_ACTION_VALUE[]) => ({ data }),
    FETCH_TODOS_FAILED: (error: Error) => ({ error }),
  });

// 리듀서 정의
const fetchTodosReducer = handleActions<FetchTodosState, FetchTodosPayload>(
  {
    [fetchTodosRequested.toString()]: (state = initialState) => {
      return {
        ...state,
        pending: true,
        data: [],
        error: null,
      };
    },
    [fetchTodosSucceeded.toString()]: (state = initialState, action) => {
      return {
        ...state,
        pending: false,
        data: action.payload?.data || [],
      };
    },
    [fetchTodosFailed.toString()]: (state = initialState, action) => {
      return {
        ...state,
        pending: false,
        error: action.payload?.error || new Error('Failed to fetch todos'),
      };
    },
  },
  initialState
);

export default fetchTodosReducer;
