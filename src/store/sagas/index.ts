import { all } from 'redux-saga/effects';
import profs from './profs/saga'

// import sagas here



export default function* rootSaga(): IterableIterator<any> {
  yield all([
    profs(),
  ]);
}
