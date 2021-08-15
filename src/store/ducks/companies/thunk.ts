import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from 'service/api';
import { Company, Meta } from 'types';

export const getFavoriteCompaniesThunk = createAsyncThunk<{
  items: Array<Company>;
  meta: Meta;
}>('companies/getFavoriteCompanies', async () => {
  const res = await Api.getFavoriteCompanies();
  return res;
});
