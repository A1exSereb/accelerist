import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Tabs from 'ui/Tabs';
import { v4 as uuidv4 } from 'uuid';

interface AuthorizationTabsProps {
  activeTab: string;
}

const AuthorizationTabs: React.FC<AuthorizationTabsProps> = ({
  activeTab,
}: AuthorizationTabsProps) => {
  const tabNavigation = [
    <Link key={uuidv4()} to="/signup">
      <div className={activeTab === 'signup' ? 'active' : 'unactive'}>
        <p>Register</p>
      </div>
    </Link>,
    <Link key={uuidv4()} to="/login">
      <div className={activeTab === 'login' ? 'active' : 'unactive'}>
        <p>Login</p>
      </div>
    </Link>,
  ];
  return (
    <Container>
      <Title>Welcome to Accelerist</Title>
      <Tabs childs={tabNavigation} />
    </Container>
  );
};

export default AuthorizationTabs;
const Container = styled.div`
  text-align: 'center';
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 25px;
  align-self: center;
`;
