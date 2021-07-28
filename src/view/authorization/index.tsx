import React from 'react';
import styled from 'styled-components';
import bgImage from 'assets/images/authorization/bg.png';
import headerImage from 'assets/images/icons/acceleristIcon.svg';
import AuthorizationTabs from 'view/components/AuthorizationTabs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Authorization = () => {
  return (
    <Router>
      <Container>
        <Header>
          <HeaderIcon src={headerImage} />
        </Header>
        <ModalContainer>
          <Switch>
            <AuthorizationTabs />
            <Route path="/reset">Forgot pass</Route>
          </Switch>
        </ModalContainer>
      </Container>
    </Router>
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
  max-height: 730px;
  width: 25%;
  background-color: #fff;
  border-radius: 10px;
  padding: 40px;
`;
