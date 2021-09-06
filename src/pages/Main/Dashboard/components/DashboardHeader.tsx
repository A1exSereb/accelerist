import React from 'react';
import styled from 'styled-components';

interface DashboardHeaderProps {
  label: string;
  seeMore?: boolean;
  onClick?: Function | void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  label,
  seeMore = true,
  onClick,
}: DashboardHeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{label}</HeaderTitle>
      {seeMore && (
        <HeaderText
          onClick={() => {
            onClick && onClick();
          }}
        >
          see more
        </HeaderText>
      )}
    </HeaderContainer>
  );
};

export default DashboardHeader;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h2`
  color: #122434;
  font-size: 24px;
  font-weight: 500;
`;

const HeaderText = styled.p`
  color: #2baee0;
  font-size: 12px;
  cursor: pointer;
`;
