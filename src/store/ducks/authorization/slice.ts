import { User } from 'types';

interface Authorization {
  accessToken: string | null;
  user: User | null;
  authorized: boolean;
}

const initialState: Authorization = {
  accessToken: null,
  user: null,
  authorized: false,
};

export default initialState;
