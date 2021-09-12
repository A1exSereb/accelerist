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

export const getProspectsThunk = createAsyncThunk<GetProspectsRequest, GetProspectsDto>(
  'prospects/getProspectsThunk',
  async (payload) => {
    const res = await Api.getProspects(payload);
    return res;
  }
);

export const saveProspectsThunk = createAsyncThunk<SaveProspectRequest, SaveProspectDto>(
  'prospects/saveProspectsThunk',
  async (payload) => {
    const res = await Api.saveProspects(payload);
    return res;
  }
);

export const deleteProspectsThunk = createAsyncThunk<
  { status: string; id: string },
  { id: string }
>('prospects/deleteProspectsThunk', async (payload: { id: string }) => {
  const res = await Api.deleteProspects(payload);
  return { ...res, ...payload };
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
