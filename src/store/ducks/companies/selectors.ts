import { RootState } from 'store/rootReducer';

export const getCompaniesSearch = (state: RootState) => state.companies.companiesSearch;
export const getCompanies = (state: RootState) => state.companies.companies.items;
export const getCompaniesFavorites = (state: RootState) => state.companies.favoritesCompanies.items;
export const getCompaniesFavoritesMeta = (state: RootState) =>
  state.companies.favoritesCompanies.meta;
export const getCompaniesMeta = (state: RootState) => state.companies.companies.meta;
