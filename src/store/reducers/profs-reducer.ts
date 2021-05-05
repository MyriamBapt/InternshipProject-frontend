import { Action, handleActions } from 'redux-actions';
import * as types from '../types';

export interface IProfState {
  profs: any[] | undefined,
  prof: any | undefined,
  loading: boolean,
  error: string
}

const initialState: IProfState = {
  profs: [],
  prof: {},
  loading: false,
  error: ''
}

export const profsReducer = handleActions<IProfState, any>(
  {
    [types.FETCH_ALL_PROFS_REQUEST]: (state: any = initialState, action: Action<any>) => ({
      ...state,
      loading: true,
    }),
    [types.FETCH_ALL_PROFS_SUCCESS]: (state: any = initialState, action: Action<any>) => ({
      ...state,
      loading: false,
      profs: action.payload,
    }),
    [types.FETCH_ALL_PROFS_FAILURE]: (state: any = initialState, action: Action<any>) => ({
      ...state,
      loading: false,
      error: action.payload
    }),
  },
  initialState
);

