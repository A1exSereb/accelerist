import React from 'react';
import styled from 'styled-components';
import ArrowSVG from 'assets/images/icons/pagArrow.svg';
import { Meta } from 'types';
import { useDispatch } from 'react-redux';

const SearchPaginationSwitcher: React.FC<{ limit: number; meta: Meta; asyncAction: any }> = ({
  limit,
  meta,
  asyncAction,
}: {
  limit: number;
  meta: Meta;
  asyncAction: any;
}) => {
  const dispatch = useDispatch();
  const currentRange = () => {
    const start = (Number(meta.currentPage) - 1) * Number(meta.itemsPerPage) + 1;
    const end = Math.min(start + Number(meta.itemsPerPage) - 1, meta.totalItems);
    return `${start} - ${end}`;
  };

  const togglePage = ({ action }: { action: string }) => {
    switch (action) {
      case 'nextPage':
        Number(meta.currentPage) !== meta.totalPages &&
          dispatch(
            asyncAction({
              page: Number(meta.currentPage) + 1,
              limit: limit,
            })
          );
        break;
      case 'prevPage':
        Number(meta.currentPage) !== 1 &&
          dispatch(
            asyncAction({
              page: Number(meta.currentPage) - 1,
              limit: limit,
            })
          );
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <PrevPage src={ArrowSVG} onClick={() => togglePage({ action: 'prevPage' })} />
      <Range>{`${currentRange()} of ${meta.totalItems}`}</Range>
      <NextPage src={ArrowSVG} onClick={() => togglePage({ action: 'nextPage' })} />
    </Container>
  );
};

export default SearchPaginationSwitcher;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
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
