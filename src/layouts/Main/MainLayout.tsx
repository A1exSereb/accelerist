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
  background-color: #e8e8e8;
  margin: 0;
`;
