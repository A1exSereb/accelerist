import { AxiosResponse } from 'axios';
import { SignInDto, User } from 'types';
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
};
