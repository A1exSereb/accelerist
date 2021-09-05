import { AxiosResponse } from 'axios';
import {
  AuthorizationRequest,
  Company,
  Contacts,
  Filters,
  GetCompaniesRequest,
  GetFavoritesCompaniesDto,
  News,
  Scoop,
  SearchCompaniesDto,
  SignInDto,
} from 'types';
import { components } from 'types/global-types';
import { apiUrls } from 'utils/apiUrls';
import httpClient from 'utils/axiosInstance';
import queryString from 'query-string';

const paramsToQueryString = (hash: any) => {
  const params = queryString.stringify(hash, {
    arrayFormat: 'bracket',
  });

  return params ? `?${params}` : '';
};

/* const myUrlSearchParams = (init: Record<string, string | number | boolean | string[]>) =>
  new URLSearchParams(init as Record<string, string>); */

export const Api = {
  async signIn(payload: SignInDto): Promise<AuthorizationRequest> {
    const request = await httpClient.post<SignInDto, AxiosResponse<AuthorizationRequest>>(
      apiUrls.SignInUrl,
      payload
    );
    console.log('signIn request', request);

    return request.data;
  },
  async signUp(payload: components['schemas']['SignUpDto']): Promise<AuthorizationRequest> {
    const request = await httpClient.post<SignInDto, AxiosResponse<AuthorizationRequest>>(
      apiUrls.SignUpUrl,
      payload
    );
    console.log('signUp request', request);

    return request.data;
  },

  async passwordChangeRequest(payload: { email: string }): Promise<AxiosResponse> {
    const request = await httpClient.post<{ email: string }, AxiosResponse>(
      apiUrls.ChangePasswordEmail,
      payload
    );
    console.log('change pass request', request);

    return request;
  },
  async getFavoriteCompanies(payload: GetFavoritesCompaniesDto): Promise<GetCompaniesRequest> {
    const params = paramsToQueryString(payload);
    console.log(params);
    const request = await httpClient.get(apiUrls.favoriteCompanies + `${params}`);
    console.log('get favorite companies request', request);
    console.log('get favorite companies request data', request.data);
    return request.data;
  },
  async getSearchedCompanies(payload: SearchCompaniesDto & Filters): Promise<GetCompaniesRequest> {
    const {
      page,
      limit,
      q,
      industry,
      location,
      scope,
      sdgGoals,
      totalAnnualContributors,
      revenueMin,
      revenueMax,
      affinities,
      gender,
      ageRanges,
      csrFocusIds,
      income,
      ethnicities,
      deletedIds,
    } = payload;
    const params = paramsToQueryString({
      page,
      limit,
      q,
      industry,
      location,
      scope,
      sdgGoals,
      totalAnnualContributors,
      revenueMin,
      revenueMax,
      affinities,
      gender,
      ageRanges,
      csrFocusIds,
      income,
      ethnicities,
      deletedIds,
    });
    console.log(params);
    const request = await httpClient.get<SearchCompaniesDto, AxiosResponse<GetCompaniesRequest>>(
      apiUrls.companies + `${params}`
    );
    console.log('search request', request);
    console.log('search request data', request.data);
    return request.data;
  },
  async toggleCompanyLike(payload: { id: string; like: boolean }): Promise<boolean> {
    const url = payload.like ? apiUrls.dislike : apiUrls.like;
    const request = await httpClient.get<{ id: string }, AxiosResponse<boolean>>(
      apiUrls.companies + `/${payload.id}` + url
    );

    return request.data;
  },
  async getCompany(payload: { id: string }): Promise<Company> {
    const { id } = payload;
    const request = await httpClient.get<{ id: string }, AxiosResponse<Company>>(
      apiUrls.companies + `/${id}`
    );

    return request.data;
  },
  async getCompanyContacts(payload: { id: string }): Promise<Contacts[]> {
    const { id } = payload;
    const request = await httpClient.get<{ id: string }, AxiosResponse<Contacts[]>>(
      apiUrls.companies + `/${id}` + apiUrls.contacts
    );

    return request.data;
  },
  async getCompanyScoops(payload: { id: string }): Promise<Scoop[]> {
    const { id } = payload;
    const request = await httpClient.get<{ id: string }, AxiosResponse<Scoop[]>>(
      apiUrls.companies + `/${id}` + apiUrls.scoops
    );

    return request.data;
  },
  async getCompanyNews(payload: { id: string }): Promise<News[]> {
    const { id } = payload;
    const request = await httpClient.get<{ id: string }, AxiosResponse<News[]>>(
      apiUrls.companies + `/${id}` + apiUrls.news
    );

    return request.data;
  },
};
