import { AxiosResponse } from 'axios';
import {
  AuthorizationRequest,
  GetCompaniesRequest,
  GetFavoritesCompaniesDto,
  SearchCompaniesDto,
  SignInDto,
} from 'types';
import { components } from 'types/global-types';
import { apiUrls } from 'utils/apiUrls';
import httpClient from 'utils/axiosInstance';

const myUrlSearchParams = (init: Record<string, string | number | boolean>) =>
  new URLSearchParams(init as Record<string, string>);

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
    const params = myUrlSearchParams(payload).toString();
    console.log(params);
    const request = await httpClient.get(apiUrls.favoriteCompanies + `?${params}`);
    console.log('get favorite companies request', request);
    console.log('get favorite companies request data', request.data);
    return request.data;
  },
  async getSearchedCompanies(payload: SearchCompaniesDto): Promise<GetCompaniesRequest> {
    const params = myUrlSearchParams(payload).toString();
    console.log(params);
    const request = await httpClient.get<SearchCompaniesDto, AxiosResponse<GetCompaniesRequest>>(
      apiUrls.companies + `?${params}`
    );
    console.log('search request', request);
    console.log('search request data', request.data);
    return request.data;
  },
};
