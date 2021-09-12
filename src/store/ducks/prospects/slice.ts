import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Loading, LoadingStatus, StoreSlice } from 'store/types/StoreSlice';
import { Meta, Prospect } from 'types';
import {
  deleteProspectsThunk,
  getProspectsThunk,
  getSingleProspectThunk,
  saveProspectsThunk,
  updateSingleProspectThunk,
} from './thunk';

interface Prospects {
  prospects: {
    items: Prospect[];
    meta: Meta;
  };
  singleProspect?: Prospect;
  loading: LoadingStatus;
  error: boolean;
}

const initialState: Prospects = {
  prospects: {
    items: [],
    meta: {
      totalItems: 0,
      itemCount: 0,
      itemsPerPage: '0',
      totalPages: 0,
      currentPage: '0',
    },
  },
  singleProspect: undefined,
  loading: Loading.idle,
  error: false,
};

const prospectsSlice = createSlice({
  name: StoreSlice.Prospects,
  initialState,
  reducers: {
    clearSingleProspect: (state) => {
      state.singleProspect = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProspectsThunk.pending, (state, action) => {
        state.loading = Loading.pending;
      })
      .addCase(getProspectsThunk.fulfilled, (state, action) => {
        state.prospects.items = action.payload.items;
        state.prospects.meta = action.payload.meta;
        state.loading = Loading.fulfilled;
      })
      .addCase(getProspectsThunk.rejected, (state, action) => {
        state.error = true;
        state.loading = Loading.rejected;
      })
      .addCase(saveProspectsThunk.pending, (state, action) => {
        state.loading = Loading.pending;
      })
      .addCase(saveProspectsThunk.fulfilled, (state, action) => {
        state.prospects.items = [...state.prospects.items, action.payload];
        state.loading = Loading.fulfilled;
      })
      .addCase(saveProspectsThunk.rejected, (state, action) => {
        state.error = true;
        state.loading = Loading.rejected;
      })
      .addCase(deleteProspectsThunk.fulfilled, (state, action) => {
        if (action.payload.status === 'success') {
          state.prospects.items ==
            state.prospects.items.map((prospect) =>
              prospect.id !== action.payload.id ? prospect : null
            );
        }
      })
      .addCase(getSingleProspectThunk.fulfilled, (state, action) => {
        state.singleProspect = action.payload;
      })
      .addCase(updateSingleProspectThunk.fulfilled, (state, action) => {
        console.log('request update', action.payload);
        state.singleProspect = { ...state.singleProspect, ...action.payload };
      });
  },
});

export const { clearSingleProspect } = prospectsSlice.actions;
export default prospectsSlice.reducer;
