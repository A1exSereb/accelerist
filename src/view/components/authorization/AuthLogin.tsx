import React from 'react';
import AuthorizationInput from './AuthInput';
import AuthorizationHeaderTabs from './AuthHeaderTabs';

const AuthorizationLogin: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <AuthorizationHeaderTabs activeTab="login" />
      <AuthorizationInput buttonPlaceholder={'Login'} login={true} />
    </div>
  );
};

export default AuthorizationLogin;
