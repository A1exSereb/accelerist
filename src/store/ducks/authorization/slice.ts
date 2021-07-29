import { createSlice } from '@reduxjs/toolkit';
import { StoreSlice } from 'store/types/StoreSlice';
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
};

const authorizationSlice = createSlice({
  name: StoreSlice.Authorization,
  initialState,
  reducers: {},
});

export default authorizationSlice.reducer;
