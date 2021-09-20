import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from 'service/api';
import {
  GetProspectsDto,
  GetProspectsRequest,
  Prospect,
  SaveProspectDto,
  SaveProspectRequest,
  UpdateProspectDto,
} from 'types';
import { toast } from 'react-toastify';

export const getProspectsThunk = createAsyncThunk<GetProspectsRequest, GetProspectsDto>(
  'prospects/getProspectsThunk',
  async (payload) => {
    const res = await Api.getProspects(payload);
    return res;
  }
);

export const saveProspectsThunk = createAsyncThunk<SaveProspectRequest, SaveProspectDto>(
  'prospects/saveProspectsThunk',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await Api.saveProspects(payload);
      toast.success('Prospect successfully created!');
      return res.data;
    } catch (error) {
      toast.error(`Error ${error}`);
      return rejectWithValue(error);
    }
  }
);

export const deleteProspectsThunk = createAsyncThunk<
  { status: string; id: string },
  { id: string }
>('prospects/deleteProspectsThunk', async (payload, { rejectWithValue }) => {
  try {
    const res = await Api.deleteProspects(payload);
    toast.success('Successfully deleted!');
    return { ...res.data, ...payload };
  } catch (error) {
    toast.error(`Error ${error}`);
    return rejectWithValue(error);
  }
});

export const getSingleProspectThunk = createAsyncThunk<Prospect, { id: string }>(
  'prospects/getSingleProspect',
  async (payload: { id: string }) => {
    const res = await Api.getSingleProspect(payload);
    return res;
  }
);

export const updateSingleProspectThunk = createAsyncThunk<Prospect, UpdateProspectDto>(
  'prospects/updateSingleProspect',
  async (payload) => {
    const res = await Api.updateSingleProspect(payload);
    return res;
  }
);
