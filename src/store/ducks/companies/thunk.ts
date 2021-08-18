import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from 'service/api';
import { GetCompaniesRequest, GetFavoritesCompaniesDto, SearchCompaniesDto } from 'types';

export const getFavoriteCompaniesThunk = createAsyncThunk<
  GetCompaniesRequest,
  GetFavoritesCompaniesDto
>('companies/getFavoriteCompanies', async (payload) => {
  const res = await Api.getFavoriteCompanies(payload);
  return res;
});

export const getSearchedCompaniesThunk = createAsyncThunk<GetCompaniesRequest, SearchCompaniesDto>(
  'companies/getSearchedCompanies',
  async (payload) => {
    console.log('call search');
    const res = await Api.getSearchedCompanies(payload);
    console.log(res);
    return res;
  }
);
