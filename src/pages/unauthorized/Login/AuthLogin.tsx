import React from 'react';
import { signInThunk } from 'store/ducks/authorization/thunk';
import AuthorizationInputForm from '../../../components/authorization/AuthorizationInputForm/AuthorizationInputForm';
import AuthorizationTabs from '../../../components/authorization/AuthorizationTabs';

const AuthorizationLogin: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <AuthorizationTabs activeTab="login" />
      <AuthorizationInputForm buttonPlaceholder={'Login'} login={true} request={signInThunk} />
    </div>
  );
};

export default AuthorizationLogin;
