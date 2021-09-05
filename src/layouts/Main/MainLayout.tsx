<<<<<<< HEAD
import SearchInput from 'components/SearchInput';
=======
import SearchInput from 'ui/SearchInput';
>>>>>>> feature/company
import MainNavbar from 'pages/Main/components/Navbar';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';
<<<<<<< HEAD
=======
import UserProfile from 'components/UserProfile';
import { Link } from 'react-router-dom';
>>>>>>> feature/company

const MainLayout: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Container>
      <Header>
        <MainNavbar />
<<<<<<< HEAD
        <SearchInput />
=======
        <SearchContainer>
          <Link to="/search">
            <SearchInput />
          </Link>
        </SearchContainer>
        <UserProfile />
>>>>>>> feature/company
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
<<<<<<< HEAD
=======

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
>>>>>>> feature/company
