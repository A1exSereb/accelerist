import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthorizationReset from 'pages/unauthorized/Reset';
import AuthorizationSignUp from 'pages/unauthorized/SignUp';
import AuthorizationLogin from 'pages/unauthorized/Login';
import AuthorizationLayout from 'layouts/unauthorized';

const UnauthorizedRouter: React.FC = () => {
  return (
    <AuthorizationLayout>
      <Switch>
        <Route path="/login" component={AuthorizationLogin} />
        <Route path="/signup" component={AuthorizationSignUp} />
        <Route path="/reset" component={AuthorizationReset} />
        <Redirect to="/signup" />
      </Switch>
    </AuthorizationLayout>
  );
};

export default UnauthorizedRouter;
