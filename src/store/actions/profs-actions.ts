import * as types from '../types';
// @ts-ignore
import { createAction } from 'redux-actions';

export const fetchAllProfsRequest = createAction(types.FETCH_ALL_PROFS_REQUEST);
export const fetchAllProfsSuccess = createAction(types.FETCH_ALL_PROFS_SUCCESS);
export const fetchAllProfsFailure = createAction(types.FETCH_ALL_PROFS_FAILURE);
