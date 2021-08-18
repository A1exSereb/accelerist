import { RootState } from 'store/rootReducer';

export const authorizationLoading = (state: RootState) => state.authorization.loading;

export const isAuthorized = (state: RootState) => state.authorization.authorized;

export const getUser = (state: RootState) => state.authorization.user;
