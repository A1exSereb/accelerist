import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from 'service/api';
import { SignInDto } from 'types';

export const signInThunk = createAsyncThunk('authorization/SignIn', (payload: SignInDto) => {
  console.log(Api.signIn(payload));
});
