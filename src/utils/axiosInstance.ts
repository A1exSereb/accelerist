import axios from 'axios';
import { RootState } from 'store/rootReducer';
import store from 'store/store';
import { apiUrls } from './apiUrls';

const httpClient = axios.create({
  baseURL: apiUrls.BASE_URL,
  headers: { 'Content-type': 'application/json' },
});
httpClient.interceptors.request.use((config) => {
  const state: RootState = store.getState();
  if (!state.authorization.accessToken) {
    return config;
  }
  const headers = {
    ...config.headers,
    Authorization: `Bearer ${state.authorization.accessToken}`,
  };
  return { ...config, headers };
});
httpClient.interceptors.response.use((response) => {
  return response;
});

export default httpClient;
