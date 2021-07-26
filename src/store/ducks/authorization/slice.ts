import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { User } from 'types';

interface Authorization {
  accessToken: string | null;
  user: User | null;
  authorized: boolean;
}

const initialState: Authorization = {
  accessToken: null,
  user: null,
  authorized: false,
}