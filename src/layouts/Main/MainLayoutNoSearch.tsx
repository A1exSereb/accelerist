import UserProfile from 'components/UserProfile';
import MainNavbar from 'pages/Main/components/Navbar';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';

const MainLayoutNoSearch: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Container>
      <Header>
        <MainNavbar />
        <UserProfile />
      </Header>
      {children}
    </Container>
  );
};

export default MainLayoutNoSearch;

const Container = styled.div`
  background-color: #e8e8e8;
  margin: 0;
`;
