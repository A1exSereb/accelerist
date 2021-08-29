import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from 'service/api';
import {
  Company,
  Contacts,
  GetCompaniesRequest,
  GetFavoritesCompaniesDto,
  News,
  Scoop,
  SearchCompaniesDto,
} from 'types';

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

export const toggleCompanyLikeThunk = createAsyncThunk<
  { res: boolean; id: string; like: boolean },
  { id: string; like: boolean }
>('companies/toggleCompanyLike', async (payload) => {
  console.log('call set like');
  const res = await Api.toggleCompanyLike(payload);
  return { res, ...payload };
});

export const getCompanyThunk = createAsyncThunk<Company, { id: string }>(
  'companies/getCompany',
  async (payload) => {
    console.log('call set like');
    const res = await Api.getCompany(payload);
    return res;
  }
);

export const getCompanyContactsThunk = createAsyncThunk<Contacts[], { id: string }>(
  'companies/getCompanyContacts',
  async (payload) => {
    console.log('call set like');
    const res = await Api.getCompanyContacts(payload);
    return res;
  }
);

export const getCompanyScoopsThunk = createAsyncThunk<Scoop[], { id: string }>(
  'companies/getCompanyScoops',
  async (payload) => {
    console.log('call set like');
    const res = await Api.getCompanyScoops(payload);
    return res;
  }
);

export const getCompanyNewsThunk = createAsyncThunk<News[], { id: string }>(
  'companies/getCompanyNews',
  async (payload) => {
    console.log('call set like');
    const res = await Api.getCompanyNews(payload);
    return res;
  }
);
