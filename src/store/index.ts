import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import { profsReducer, IProfState } from "./reducers/profs-reducer";

export interface IRootState {
  profs: IProfState
}

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  profs: profsReducer
});

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

export const { dispatch } = store;

sagaMiddleware.run(rootSaga);
export default store;
