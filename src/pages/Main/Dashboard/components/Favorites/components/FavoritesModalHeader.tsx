import React from 'react';
import styled from 'styled-components';
import { Meta } from 'types';
interface FavoritesModalHeaderProps {
  title: string;
  meta: Meta;
}

const FavoritesModalHeader: React.FC<FavoritesModalHeaderProps> = ({
  title,
  meta,
}: FavoritesModalHeaderProps) => {
  const currentRange = () => {
    const start = (Number(meta.currentPage) - 1) * Number(meta.itemsPerPage) + 1;
    const end = Math.min(start + Number(meta.itemsPerPage) - 1, meta.totalItems);
    return `${start} - ${end}`;
  };
  return (
    <Container>
      <Title>{title}</Title>
      <Counter>{`${currentRange()} of ${meta.totalItems}`}</Counter>
    </Container>
  );
};

export default FavoritesModalHeader;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const Title = styled.h2`
  color: #122434;
  font-size: 24px;
  font-weight: 500;
`;

const Counter = styled.p`
  color: #122434;
  font-size: 12px;
`;
