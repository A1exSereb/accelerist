import React, { ReactNode } from 'react';
import styled from 'styled-components';

const MainSubheader: React.FC<{
  rightChildren?: ReactNode;
  leftChildren?: ReactNode;
  label: string;
}> = ({
  rightChildren,
  leftChildren,
  label,
}: {
  rightChildren?: ReactNode;
  leftChildren?: ReactNode;
  label: string;
}) => {
  return (
    <Subheader>
      {rightChildren && <RightChildrenContainer>{rightChildren}</RightChildrenContainer>}
      <Subtitle>{label}</Subtitle>
      {leftChildren && <LeftChildrenContainer>{leftChildren}</LeftChildrenContainer>}
    </Subheader>
  );
};

export default MainSubheader;

const Subheader = styled.div`
  height: 96px;
  width: 100%;
  display: flex;
  padding: 24px 24px;
  justify-content: flex-start;
  font-weight: 500;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
  margin: 0;
`;
const Subtitle = styled.h1`
  color: #122434;
  font-size: 32px;
`;
const RightChildrenContainer = styled.div``;
const LeftChildrenContainer = styled.div``;
