import { createAsyncThunk } from '@reduxjs/toolkit';
import { RejectedWithValueActionFromAsyncThunk } from '@reduxjs/toolkit/dist/matchers';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { Api } from 'service/api';
import { AuthorizationRequest } from 'types';
import { components } from 'types/global-types';

export const signInThunk = createAsyncThunk<
  AuthorizationRequest,
  { email: string; password: string; remember: boolean }
>('authorization/SignIn', async (payload, { rejectWithValue }) => {
  const { email, password } = payload;
  try {
    const res = await Api.signIn({ email, password });
    localStorage.removeItem('persist:auth');
    toast.success('Welcome!');
    return res.data;
  } catch (error) {
    toast.error(`Error ${error}`);
    return rejectWithValue(error);
  }
});

export const signUpThunk = createAsyncThunk<
  AuthorizationRequest,
  components['schemas']['SignUpDto']
>('authorization/SignUp', async (payload, { rejectWithValue }) => {
  try {
    const { email, password } = payload;
    const res = await Api.signUp({ email, password });
    toast.success('Successfully registered');
    return res.data;
  } catch (error) {
    toast.error(`Error ${error}`);
    return rejectWithValue(error);
  }
});

export const passwordChangeRequestThunk = createAsyncThunk<AxiosResponse, { email: string }>(
  'authorization/passwordChange',
  async (payload) => {
    const res = await Api.passwordChangeRequest(payload);
    return res;
  }
);
