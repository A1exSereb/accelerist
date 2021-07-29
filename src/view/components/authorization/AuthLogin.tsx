import React from 'react';
import AuthorizationInput from './AuthInput';
import AuthorizationHeaderTabs from './AuthHeaderTabs';
import { signIn } from 'store/ducks/authorization/actions';

const AuthorizationLogin: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <AuthorizationHeaderTabs activeTab="login" />
      <AuthorizationInput buttonPlaceholder={'Login'} login={true} request={signIn.request} />
    </div>
  );
};

export default AuthorizationLogin;
