import React from 'react';
import styled from 'styled-components';

interface DashboardHeaderProps {
  label: string;
  seeMore?: boolean;
<<<<<<< HEAD
=======
  onClick?: Function;
>>>>>>> feature/company
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  label,
  seeMore = true,
<<<<<<< HEAD
=======
  onClick,
>>>>>>> feature/company
}: DashboardHeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{label}</HeaderTitle>
<<<<<<< HEAD
      {seeMore && <HeaderText>see more</HeaderText>}
=======
      {seeMore && (
        <HeaderText
          onClick={() => {
            onClick && onClick();
          }}
        >
          see more
        </HeaderText>
      )}
>>>>>>> feature/company
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
