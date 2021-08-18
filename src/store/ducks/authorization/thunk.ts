import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { Api } from 'service/api';
import { AuthorizationRequest } from 'types';
import { components } from 'types/global-types';

export const signInThunk = createAsyncThunk<
  AuthorizationRequest,
  { email: string; password: string; remember: boolean }
>(
  'authorization/SignIn',
  async (payload: { email: string; password: string; remember: boolean }) => {
    const { email, password } = payload;
    const res = await Api.signIn({ email, password });
    localStorage.removeItem('persist:auth');
    return res;
  }
);

export const signUpThunk = createAsyncThunk<
  AuthorizationRequest,
  components['schemas']['SignUpDto']
>('authorization/SignUp', async (payload: components['schemas']['SignUpDto']) => {
  const { email, password } = payload;
  const res = await Api.signUp({ email, password });
  return res;
});

export const passwordChangeRequestThunk = createAsyncThunk<AxiosResponse, { email: string }>(
  'authorization/passwordChange',
  async (payload: { email: string }) => {
    const res = await Api.passwordChangeRequest(payload);
    return res;
  }
);
