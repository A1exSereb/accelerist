import { createSlice } from '@reduxjs/toolkit';
import { StoreSlice } from 'store/types/StoreSlice';
import { User } from 'types';
import { passwordChangeRequestThunk, signInThunk, signUpThunk } from './thunk';

interface Authorization {
  accessToken: string | null;
  user: User | null;
  authorized: boolean;
  loading: boolean;
  error: boolean;
}

const initialState: Authorization = {
  accessToken: null,
  user: null,
  authorized: false,
  loading: false,
  error: false,
};

const authorizationSlice = createSlice({
  name: StoreSlice.Authorization,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.authorized = true;
        state.loading = false;
      })
      .addCase(signInThunk.rejected, (state, action) => {
        state.error = false;
      })
      .addCase(signUpThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.authorized = true;
        state.loading = false;
      })
      .addCase(signUpThunk.rejected, (state, action) => {
        state.error = false;
      })
      .addCase(passwordChangeRequestThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(passwordChangeRequestThunk.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(passwordChangeRequestThunk.rejected, (state, action) => {
        state.loading = true;
      });
  },
});

export default authorizationSlice.reducer;
