import SearchInput from 'ui/SearchInput';
import MainNavbar from 'pages/Main/components/Navbar';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';
import UserProfile from 'components/UserProfile';
import { Link } from 'react-router-dom';

const MainLayout: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Container>
      <Header>
        <MainNavbar />
        <SearchContainer>
          <Link to="/search">
            <SearchInput />
          </Link>
        </SearchContainer>
        <UserProfile />
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

const SearchContainer = styled.div`
  width: 40%;
  cursor: pointer;
  margin: 0 3px;
  &a {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
