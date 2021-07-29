/* eslint-disable new-cap */
import { put, takeEvery } from 'redux-saga/effects';
import { Api } from 'service/api';
import { SignInDto, User } from 'types';
import { signIn } from './actions';
import { signInSuccess } from './slice';

export function* SignInWorker(action: { type: string; payload: SignInDto }): Generator {
  console.log('call signin');
  try {
    const response = yield Api.signIn(action.payload);
    const responseClone = <{ accessToken: string; user: User }>response;
    console.log('response clone', responseClone);
    yield put(signInSuccess(responseClone));
  } catch {
    yield put(signIn.failure());
  }
}
// watcher
export function* watchAuthorizationSaga(): Generator {
  yield takeEvery(signIn.REQUEST, SignInWorker);
}
