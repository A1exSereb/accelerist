import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const AuthorizationTabs = () => {
  const [toggleTab, setToggleTab] = useState(1);
  return (
    <Router>
      <div style={{ textAlign: 'center' }}>
        <Title>Welcome to Accelerist</Title>
        <TabsContainer>
          <Link to="/signup" style={{ width: '50%' }}>
            <Tab
              onClick={() => setToggleTab(1)}
              style={toggleTab === 1 ? { backgroundColor: '#caf0ff', color: '#000' } : {}}
            >
              Register
            </Tab>
          </Link>
          <Link to="/login" style={{ width: '50%' }}>
            <Tab
              onClick={() => setToggleTab(2)}
              style={toggleTab === 2 ? { backgroundColor: '#caf0ff', color: '#000' } : {}}
            >
              Login
            </Tab>
          </Link>
        </TabsContainer>
        <Switch>
          <Route path="/signup">register content</Route>
          <Route path="/login">login content</Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AuthorizationTabs;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 25px;
  align-self: center;
`;
const TabsContainer = styled.div`
  width: 100%;
  height: 40px;
  padding: 4px;
  display: flex;
  justify-content: space-around;
  background-color: #f8f8f8;
  border-radius: 6px;
`;
const Tab = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  text-align: center;
  border-width: 0;
  color: #737373;
  font-size: 12px;
  font-weight: 400;
  background-color: inherit;
  cursor: pointer;
  &:active {
    background-color: #caf0ff;
    color: #000;
  }
`;
