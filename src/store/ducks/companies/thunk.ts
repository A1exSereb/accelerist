import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from 'service/api';
import { Company, Meta } from 'types';

export const getFavoriteCompaniesThunk = createAsyncThunk<
  {
    items: Array<Company>;
    meta: Meta;
  },
  {
    page: number;
    limit: number;
  }
>('companies/getFavoriteCompanies', async (payload) => {
  const res = await Api.getFavoriteCompanies(payload);
  return res;
});
