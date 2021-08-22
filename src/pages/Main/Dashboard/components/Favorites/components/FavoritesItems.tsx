import React from 'react';
import styled from 'styled-components';
import { Company } from 'types';

const FavoritesItem: React.FC<{ company: Company }> = ({ company }: { company: Company }) => {
  return (
    <ItemContainer key={company?.id}>
      <ItemImg src={company?.logo} />
      <ItemTextContainer>
        <ColumnContainer>
          <ItemTitle>{company?.name}</ItemTitle>
          <ItemSubtitle>{company?.type}</ItemSubtitle>
        </ColumnContainer>
        <ColumnContainer>
          <ItemName>{company?.parentName}</ItemName>
          <ItemDate>{company?.loadZoomInfoDate}</ItemDate>
        </ColumnContainer>
      </ItemTextContainer>
    </ItemContainer>
  );
};

export default FavoritesItem;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 433px;
  height: 58px;
  align-items: center;
  margin-bottom: 13px;
`;

const ItemImg = styled.img`
  width: 46px;
  height: 46px;
  margin-right: 5px;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  margin-bottom: 13px;
`;

const ItemTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 13px;
  box-sizing: border-box;
  overflow: hidden;
`;

const ItemTitle = styled.h3`
  margin: 0;
  color: #122434;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 500;
`;

const ItemSubtitle = styled.p`
  color: #737373;
  font-size: 12px;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemDate = styled(ItemSubtitle)``;

const ItemName = styled(ItemTitle)`
  font-size: 12px;
  font-weight: 400;
`;
