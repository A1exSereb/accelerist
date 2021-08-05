import AuthorizationLayout from 'layouts/unauthorized';
import React from 'react';
import AuthorizationRouter from './unauthorized/router';

const Authorization: React.FC = () => {
  return <AuthorizationLayout child={<AuthorizationRouter />} />;
};

export default Authorization;
