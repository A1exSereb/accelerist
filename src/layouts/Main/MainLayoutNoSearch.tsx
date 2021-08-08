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
      </Header>
      {children}
    </Container>
  );
};

export default MainLayoutNoSearch;

const Container = styled.div`
  background-color: #f9f9f9;
  margin: 0;
`;
