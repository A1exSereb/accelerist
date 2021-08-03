import React from 'react';
import styled from 'styled-components';
import bgImage from 'assets/images/icons/authorization/bg.png';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthorizationReset from 'pages/unauthorized/Reset/AuthReset';
import AuthorizationLogin from 'pages/unauthorized/Login/AuthLogin';
import AuthorizationSignUp from 'pages/unauthorized/SignUp/AuthSignUp';
import AuthorizationHeader from 'components/authorization/AuthorizationHeader';

const Authorization: React.FC = () => {
  return (
    <Container>
      <AuthorizationHeader />
      <ModalContainer>
        <Switch>
          <Route path="/login" component={AuthorizationLogin} />
          <Route path="/signup" component={AuthorizationSignUp} />
          <Route path="/reset" component={AuthorizationReset} />
          <Redirect to="/signup" />
        </Switch>
      </ModalContainer>
    </Container>
  );
};

export default Authorization;

const Container = styled.div`
  height: 100vh;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
`;

const ModalContainer = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  margin-top: 75px;
  max-height: 565px;
  width: 454px;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  box-sizing: border-box;
  @media (max-width: 375px) {
    height: 547px;
    margin-top: 20px;
    padding: 24px 14px 30px 14px;
    width: 343px;
  }
`;
