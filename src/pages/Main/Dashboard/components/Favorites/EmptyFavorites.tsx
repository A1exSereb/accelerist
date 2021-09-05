import React from 'react';
import styled, { css } from 'styled-components';
import DashboardHeader from '../DashboardHeader';
import HeartImg from 'assets/images/icons/heart.svg';
import ButtonUI from 'ui/Button';
import { ThirdButton } from 'styled/styled';

const EmptyFavorites: React.FC = () => {
  return (
    <EmptyWrapper>
      <DashboardHeader label="Favorites" seeMore={false} />
      <EmptyContainer>
        <EmptyImage src={HeartImg} />
        <EmptyTitle>No favorite company</EmptyTitle>
        <EmptyText>Go to the search page and add to favorites</EmptyText>
        <ButtonUI
          disabled={false}
          buttonCSS={ThirdButton}
          content="Search"
          wrapperCSS={WrapperCss}
        />
      </EmptyContainer>
    </EmptyWrapper>
  );
};

export default EmptyFavorites;

const WrapperCss = css`
  box-sizing: border-box;
  width: 100%;
  height: 36px;
`;

const EmptyContainer = styled.div`
  height: 498px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 6px;
  padding: 119px 146px;
  box-sizing: border-box;
`;

const EmptyWrapper = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
`;

const EmptyImage = styled.img``;

const EmptyTitle = styled.h3`
  color: #122434;
  font-size: 16px;
  font-weight: 500;
`;

const EmptyText = styled.p`
  color: #bfbfbfbf;
  font-size: 12px;
`;
