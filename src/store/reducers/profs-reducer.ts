// @ts-ignore
import { Action, handleActions } from 'redux-actions';
import * as types from '../types';

export interface IProfState {
  profs: any[] | null,
  prof: any | undefined,
  loading: boolean,
  error: string
}

const initialState: IProfState = {
  profs: [],
  prof: undefined,
  loading: false,
  error: ''
}

export const profsReducer = handleActions<IProfState, any>(
  {
    [types.FETCH_ALL_PROFS_REQUEST]: (state: any, action: Action<any>) => ({
      ...state,
      loading: true,
    }),
    [types.FETCH_ALL_PROFS_SUCCESS]: (state: any, action: Action<any>) => ({
      ...state,
      loading: false,
      profs: action.payload,
    }),
    [types.FETCH_ALL_PROFS_FAILURE]: (state: any, action: Action<any>) => ({
      ...state,
      loading: false,
      error: action.payload
    }),
  },
  initialState
);

