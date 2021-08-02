import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import authorizationSlice from './ducks/authorization';

const authPersistConfig = {
  key: 'auth',
  storage,
};
const rootReducer = combineReducers({
  authorization: persistReducer(authPersistConfig, authorizationSlice),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
