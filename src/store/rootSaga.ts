import { all } from 'redux-saga/effects';
import { watchAuthorizationSaga } from './ducks/authorization/saga';

export default function* rootSaga() {
  yield all([watchAuthorizationSaga()]);
}
