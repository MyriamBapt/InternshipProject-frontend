import { AnyAction } from "redux";
import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../../actions";
import { getAllProfs } from "../../../api/services/profs";
import { fetchAllProfsFailure, fetchAllProfsSuccess } from "../../actions";

export function* fetchAllProfsSaga(action: AnyAction) {
  try {
    // @ts-ignore
    const response: any = yield call(getAllProfs);
    yield put(fetchAllProfsSuccess(response));
  } catch (error) {
    yield put(fetchAllProfsFailure(error.message));
  }
}

export default function* profSaga() {
  yield takeLatest(actions.fetchAllProfsRequest, fetchAllProfsSaga);
}
