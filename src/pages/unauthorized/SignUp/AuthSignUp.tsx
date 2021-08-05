import React from 'react';
import AuthorizationTabs from '../components/AuthorizationTabs';
import AuthorizationInputForm from '../components/AuthorizationInputForm';
import { signUpThunk } from 'store/ducks/authorization/thunk';

const AuthorizationSignUp: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <AuthorizationTabs activeTab="signup" />
      <AuthorizationInputForm
        buttonPlaceholder={'Registration'}
        signup={true}
        request={signUpThunk}
      />
    </div>
  );
};

export default AuthorizationSignUp;
