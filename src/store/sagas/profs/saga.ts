import {AnyAction} from 'redux';
import {call, put, takeLatest} from 'redux-saga/effects';
import * as actions from '../../actions';

export function* getAllProfsSaga(action: AnyAction) {
  return null;
}

export default function* Saga() {
  yield takeLatest(actions.fetchAllProfsRequest, getAllProfsSaga)
}
