import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
interface AuthorizationHeaderTabsProps {
  activeTab: string;
}

const AuthorizationHeaderTabs: React.FC<AuthorizationHeaderTabsProps> = ({
  activeTab,
}: AuthorizationHeaderTabsProps) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Title>Welcome to Accelerist</Title>
      <TabsContainer>
        <Link to="/signup">
          <Tab style={activeTab === 'signup' ? { backgroundColor: '#caf0ff', color: '#000' } : {}}>
            Register
          </Tab>
        </Link>
        <Link to="/login">
          <Tab style={activeTab === 'login' ? { backgroundColor: '#caf0ff', color: '#000' } : {}}>
            Login
          </Tab>
        </Link>
      </TabsContainer>
    </div>
  );
};

export default AuthorizationHeaderTabs;
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
  a {
    width: 50%;
  }
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
