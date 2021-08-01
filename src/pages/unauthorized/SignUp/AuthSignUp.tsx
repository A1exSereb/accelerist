import React from 'react';
import AuthorizationTabs from '../../../components/authorization/AuthorizationTabs';
import { signUp } from 'store/ducks/authorization/actions';
import AuthorizationInputForm from '../../../components/authorization/AuthorizationInputForm';

const AuthorizationSignUp: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <AuthorizationTabs activeTab="signup" />
      <AuthorizationInputForm
        buttonPlaceholder={'Registration'}
        signup={true}
        request={signUp.request}
      />
    </div>
  );
};

export default AuthorizationSignUp;
