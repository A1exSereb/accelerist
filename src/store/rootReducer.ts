import { combineReducers } from '@reduxjs/toolkit';
import authorizationSlice from './ducks/authorization';

const rootReducer = combineReducers({
  authorization: authorizationSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
