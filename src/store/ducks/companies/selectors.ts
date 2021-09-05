import { RootState } from 'store/rootReducer';

export const getCompaniesSearch = (state: RootState) => state.companies.companiesSearch;
export const getCompaniesFavorites = (state: RootState) => state.companies.favoritesCompanies.items;
export const getCompaniesFavoritesMeta = (state: RootState) =>
  state.companies.favoritesCompanies.meta;
export const getCompaniesLoading = (state: RootState) => state.companies.loading;
export const getSearchCompanies = (state: RootState) => state.companies.companiesSearch.items;
export const getSearchCompaniesMeta = (state: RootState) => state.companies.companiesSearch.meta;
export const getSearchFilters = (state: RootState) => state.companies.filters;
export const getCompany = (state: RootState) => state.companies.company.item;
export const getCompanyScoops = (state: RootState) => state.companies.company.scoops;
export const getCompanyNews = (state: RootState) => state.companies.company.news;
export const getCompanyContacts = (state: RootState) => state.companies.company.contacts;
