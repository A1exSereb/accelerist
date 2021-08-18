import React, { ReactNode } from 'react';
import styled from 'styled-components';
import headerImage from 'assets/images/icons/acceleristIconBlack.svg';

const MainHeader: React.FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  return (
    <Header>
      <HeaderIcon src={headerImage} />
      {children}
    </Header>
  );
};

export default MainHeader;

const Header = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  padding: 22px 19px;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  background-color: #d5f3ff;
  margin: 0;
`;

const HeaderIcon = styled.img`
  height: 36px;
  width: 201px;
`;
