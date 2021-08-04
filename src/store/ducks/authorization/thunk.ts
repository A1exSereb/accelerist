import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { Api } from 'service/api';
import { persistor } from 'store/store';
import { User } from 'types';

export const signInThunk = createAsyncThunk<
  {
    accessToken: string;
    user: User;
  },
  { email: string; password: string; remember: boolean }
>(
  'authorization/SignIn',
  async (payload: { email: string; password: string; remember: boolean }) => {
    const { email, password, remember } = payload;
    const res = await Api.signIn({ email, password });
    localStorage.removeItem('persist:auth');
    remember ? persistor.persist() : persistor.pause();
    return res;
  }
);

export const signUpThunk = createAsyncThunk<
  {
    accessToken: string;
    user: User;
  },
  { email: string; password: string }
>('authorization/SignUp', async (payload: { email: string; password: string }) => {
  const { email, password } = payload;
  const res = await Api.signUp({ email, password });
  return res;
});

export const passwordChangeRequestThunk = createAsyncThunk<AxiosResponse, { email: string }>(
  'authorization/SignUp',
  async (payload: { email: string }) => {
    const res = await Api.passwordChangeRequest(payload);
    return res;
  }
);
