import { AxiosResponse } from 'axios';
import { Company, Meta, SignInDto, User } from 'types';
import { apiUrls } from 'utils/apiUrls';
import httpClient from 'utils/axiosInstance';

export const Api = {
  async signIn(payload: SignInDto): Promise<{ accessToken: string; user: User }> {
    const request = await httpClient.post<
      SignInDto,
      AxiosResponse<{ accessToken: string; user: User }>
    >(apiUrls.SignInUrl, payload);
    console.log('signIn request', request);

    return request.data;
  },
  async signUp(payload: SignInDto): Promise<{ accessToken: string; user: User }> {
    const request = await httpClient.post<
      SignInDto,
      AxiosResponse<{ accessToken: string; user: User }>
    >(apiUrls.SignUpUrl, payload);
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
  async getFavoriteCompanies(payload: { page: number; limit: number }): Promise<{
    items: Array<Company>;
    meta: Meta;
  }> {
    const { page, limit } = payload;
    const request = await httpClient.get(
      apiUrls.favoriteCompanies + `?page=${page}&limit=${limit}`
    );
    console.log(request);
    console.log(request.data);
    return request.data;
  },
};
