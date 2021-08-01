import React from 'react';
import AuthorizationInputForm from '../../../components/authorization/AuthorizationInputForm/AuthorizationInputForm';
import AuthorizationTabs from '../../../components/authorization/AuthorizationTabs';
import { signIn } from 'store/ducks/authorization/actions';

const AuthorizationLogin: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <AuthorizationTabs activeTab="login" />
      <AuthorizationInputForm buttonPlaceholder={'Login'} login={true} request={signIn.request} />
    </div>
  );
};

export default AuthorizationLogin;
