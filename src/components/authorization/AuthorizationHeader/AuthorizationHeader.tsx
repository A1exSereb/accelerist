import React from 'react';
import styled from 'styled-components';
import headerImage from 'assets/images/icons/acceleristIcon.svg';

const AuthorizationHeader: React.FC = () => {
  return (
    <Header>
      <HeaderIcon src={headerImage} />
    </Header>
  );
};

export default AuthorizationHeader;

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
