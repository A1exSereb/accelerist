import { createSlice } from '@reduxjs/toolkit';
import { Loading, LoadingStatus, StoreSlice } from 'store/types/StoreSlice';
import { Company, Meta } from 'types';
import {
  getFavoriteCompaniesThunk,
  getSearchedCompaniesThunk,
  toggleCompanyLikeThunk,
} from './thunk';

interface Companies {
  companies: {
    items: Array<Company>;
    meta: Meta;
  };
  favoritesCompanies: {
    items: Array<Company>;
    meta: Meta;
  };
  companiesSearch: {
    items: Array<Company>;
    meta: Meta;
  };
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
  companiesSearch: {
    items: [],
    meta: {
      totalItems: 0,
      itemCount: 0,
      itemsPerPage: '0',
      totalPages: 0,
      currentPage: '0',
    },
  },
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
        state.error = true;
        state.loading = Loading.rejected;
      })
      .addCase(getSearchedCompaniesThunk.pending, (state, action) => {
        state.loading = Loading.pending;
      })
      .addCase(getSearchedCompaniesThunk.fulfilled, (state, action) => {
        state.companiesSearch.items = action.payload.items;
        state.companiesSearch.meta = action.payload.meta;
        state.loading = Loading.fulfilled;
      })
      .addCase(getSearchedCompaniesThunk.rejected, (state, action) => {
        state.error = true;
        state.loading = Loading.rejected;
      })
      .addCase(toggleCompanyLikeThunk.fulfilled, (state, action) => {
        state.companiesSearch.items = state.companiesSearch.items.map((company) => ({
          ...company,
          like: action.payload.id === company.id ? !action.payload.like : company.like,
        }));
        state.loading = Loading.fulfilled;
      })
      .addCase(toggleCompanyLikeThunk.rejected, (state, action) => {
        state.error = true;
        state.loading = Loading.rejected;
      });
  },
});

export default companiesSlice.reducer;
