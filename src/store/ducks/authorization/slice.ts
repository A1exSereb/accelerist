import { createSlice } from '@reduxjs/toolkit';
import { Loading, LoadingStatus, StoreSlice } from 'store/types/StoreSlice';
import { User } from 'types';
import { passwordChangeRequestThunk, signInThunk, signUpThunk } from './thunk';

interface Authorization {
  accessToken: string | null;
  user: User | null;
  authorized: boolean;
  loading: LoadingStatus;
  error: boolean;
}

const initialState: Authorization = {
  accessToken: null,
  user: null,
  authorized: false,
  loading: Loading.idle,
  error: false,
};

const authorizationSlice = createSlice({
  name: StoreSlice.Authorization,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInThunk.pending, (state, action) => {
        state.loading = Loading.pending;
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.authorized = true;
        state.loading = Loading.fulfilled;
      })
      .addCase(signInThunk.rejected, (state, action) => {
        state.error = false;
      })
      .addCase(signUpThunk.pending, (state, action) => {
        state.loading = Loading.pending;
      })
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.authorized = true;
        state.loading = Loading.fulfilled;
      })
      .addCase(signUpThunk.rejected, (state, action) => {
        state.error = false;
      })
      .addCase(passwordChangeRequestThunk.pending, (state, action) => {
        state.loading = Loading.pending;
      })
      .addCase(passwordChangeRequestThunk.fulfilled, (state, action) => {
        state.loading = Loading.fulfilled;
      })
      .addCase(passwordChangeRequestThunk.rejected, (state, action) => {
        state.loading = Loading.rejected;
      });
  },
});

export default authorizationSlice.reducer;
