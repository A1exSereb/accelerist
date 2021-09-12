import { RootState } from 'store/rootReducer';

export const getProspects = (state: RootState) => state.prospects.prospects.items;

export const getProspectsMeta = (state: RootState) => state.prospects.prospects.meta;

export const getSingleProspect = (state: RootState) => state.prospects.singleProspect;
