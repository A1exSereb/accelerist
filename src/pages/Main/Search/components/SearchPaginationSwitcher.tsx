import React from 'react';
import styled from 'styled-components';
import ArrowSVG from 'assets/images/icons/pagArrow.svg';
import { Meta } from 'types';

const SearchPaginationSwitcher: React.FC<{ meta: Meta }> = ({ meta }: { meta: Meta }) => {
  const currentRange = () => {
    const start = (Number(meta.currentPage) - 1) * Number(meta.itemsPerPage) + 1;
    const end = Math.min(start + Number(meta.itemsPerPage) - 1, meta.totalItems);
    return `${start} - ${end}`;
  };

  return (
    <Container>
      <PrevPage src={ArrowSVG} />
      <Range>{currentRange()}</Range>
      <NextPage src={ArrowSVG} />
    </Container>
  );
};

export default SearchPaginationSwitcher;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10%;
`;

const PrevPage = styled.img`
  cursor: pointer;
`;

const NextPage = styled(PrevPage)`
  transform: rotate(180deg);
`;

const Range = styled.p`
  color: #122434;
  font-size: 12px;
  margin: 0;
`;
