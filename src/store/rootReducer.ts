import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import authorizationSlice from './ducks/authorization';
import companiesSlice from './ducks/companies';
import prospectsSlice from './ducks/prospects';

const authPersistConfig = {
  key: 'auth',
  storage,
};
const rootReducer = combineReducers({
  authorization: persistReducer(authPersistConfig, authorizationSlice),
  companies: companiesSlice,
  prospects: prospectsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
