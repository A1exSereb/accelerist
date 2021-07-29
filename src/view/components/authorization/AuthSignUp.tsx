import React from 'react';
import AuthorizationInput from './AuthInput';
import AuthorizationHeaderTabs from './AuthHeaderTabs';

const AuthorizationSignUp: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <AuthorizationHeaderTabs activeTab="signup" />
      <AuthorizationInput buttonPlaceholder={'Registration'} signup={true} />
    </div>
  );
};

export default AuthorizationSignUp;
