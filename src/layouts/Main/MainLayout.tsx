import SearchInput from 'components/SearchInput';
import MainNavbar from 'pages/Main/components/Navbar';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';

const MainLayout: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Container>
      <Header>
        <MainNavbar />
        <SearchInput />
      </Header>
      {children}
    </Container>
  );
};

export default MainLayout;

const Container = styled.div`
  background-color: #f9f9f9;
  margin: 0;
`;
