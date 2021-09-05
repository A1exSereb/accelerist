import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Loading, LoadingStatus, StoreSlice } from 'store/types/StoreSlice';
import { Company, Contacts, Filters, Meta, News, Scoop } from 'types';
import {
  getCompanyContactsThunk,
  getCompanyNewsThunk,
  getCompanyScoopsThunk,
  getCompanyThunk,
  getFavoriteCompaniesThunk,
  getSearchedCompaniesThunk,
  toggleCompanyLikeThunk,
} from './thunk';

interface Companies {
  company: {
    item: Company | null;
    scoops: Scoop[];
    news: News[];
    contacts: Contacts[];
  };
  favoritesCompanies: {
    items: Array<Company>;
    meta: Meta;
  };
  companiesSearch: {
    items: Array<Company>;
    meta: Meta;
  };
  filters: Filters;
  loading: LoadingStatus;
  error: boolean;
}

const initialState: Companies = {
  company: {
    item: null,
    scoops: [],
    news: [],
    contacts: [],
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
  filters: {},
  loading: Loading.idle,
  error: false,
};

const companiesSlice = createSlice({
  name: StoreSlice.Companies,
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Filters>) => {
      state.filters = action.payload;
    },
  },
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
      })
      .addCase(getCompanyThunk.fulfilled, (state, action) => {
        state.company.item = action.payload;
      })
      .addCase(getCompanyScoopsThunk.fulfilled, (state, action) => {
        state.company.scoops = action.payload;
      })
      .addCase(getCompanyNewsThunk.fulfilled, (state, action) => {
        state.company.news = action.payload;
      })
      .addCase(getCompanyContactsThunk.fulfilled, (state, action) => {
        state.company.contacts = action.payload;
      });
  },
});

export const { setFilters } = companiesSlice.actions;

export default companiesSlice.reducer;
