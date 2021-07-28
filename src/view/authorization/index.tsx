import React from 'react';
import styled from 'styled-components';
import bgImage from 'assets/images/authorization/bg.png';
import headerImage from 'assets/images/icons/acceleristIcon.svg';
import AuthorizationTabs from 'view/components/authorization/AuthorizationTabs';
import { Switch, Route, Redirect } from 'react-router-dom';

const Authorization = () => {
  return (
    <Container>
      <Header>
        <HeaderIcon src={headerImage} />
      </Header>
      <ModalContainer>
        <Switch>
          <Route path="/" component={AuthorizationTabs} />
          <Route path="/reset">
            <label>forgot pass</label>
          </Route>
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

const Header = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #092b3f;
  margin: 0;
`;

const HeaderIcon = styled.img`
  height: 36px;
  width: 201px;
`;

const ModalContainer = styled.div`
  margin: 0 auto;
  margin-top: 75px;
  max-height: 630px;
  width: 454px;
  background-color: #fff;
  border-radius: 10px;
  padding: 40px;
  box-sizing: border-box;
  @media (max-width: 375px) {
    margin-top: 20px;
    padding: 24px 14px 40px 14px;
    width: 343px;
  }
`;
