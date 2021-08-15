import { createSlice } from '@reduxjs/toolkit';
import { Loading, LoadingStatus, StoreSlice } from 'store/types/StoreSlice';
import { Company, Meta } from 'types';
import { getFavoriteCompaniesThunk } from './thunk';

interface Companies {
  companies: {
    items: Array<Company & null>;
    meta: Meta;
  };
  favoritesCompanies: {
    items: Array<Company | null>;
    meta: Meta;
  };
  companiesSearch: Array<Company | null>;
  loading: LoadingStatus;
  error: boolean;
}

const initialState: Companies = {
  companies: {
    items: [],
    meta: {
      totalItems: 0,
      itemCount: 0,
      itemsPerPage: '0',
      totalPages: 0,
      currentPage: '0',
    },
  },
  favoritesCompanies: {
    items: [],
    meta: {
      totalItems: 0,
      itemCount: 0,
      itemsPerPage: '0',
      totalPages: 0,
      currentPage: '0',
    },
  },
  companiesSearch: [],
  loading: Loading.idle,
  error: false,
};

const companiesSlice = createSlice({
  name: StoreSlice.Companies,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavoriteCompaniesThunk.pending, (state, action) => {
        state.loading = Loading.pending;
      })
      .addCase(getFavoriteCompaniesThunk.fulfilled, (state, action) => {
        state.favoritesCompanies.items = action.payload.items;
        state.favoritesCompanies.meta = action.payload.meta;
        state.loading = Loading.fulfilled;
      })
      .addCase(getFavoriteCompaniesThunk.rejected, (state, action) => {
        state.error = false;
      });
  },
});

export default companiesSlice.reducer;
