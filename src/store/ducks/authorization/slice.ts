import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreSlice } from 'store/types/StoreSlice';
import { User } from 'types';

interface Authorization {
  accessToken: string | null;
  user: User | null;
  authorized: boolean;
  loading: boolean;
}

const initialState: Authorization = {
  accessToken: null,
  user: null,
  authorized: false,
  loading: false,
};

const authorizationSlice = createSlice({
  name: StoreSlice.Authorization,
  initialState,
  reducers: {
    signInSuccess: (state, action: PayloadAction<{ accessToken: string; user: User }>) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
  },
});

export default authorizationSlice.reducer;

export const { signInSuccess } = authorizationSlice.actions;
