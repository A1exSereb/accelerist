import axios from 'axios';
import { Store } from 'redux';
import { RootState } from 'store/rootReducer';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_WEBSITE_NAME,
  headers: { 'Content-type': 'application/json' },
});
console.log('env proc', process.env.REACT_APP_WEBSITE_NAME);
export default httpClient;

export const setupInterceptors = (store: Store) => {
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
};
