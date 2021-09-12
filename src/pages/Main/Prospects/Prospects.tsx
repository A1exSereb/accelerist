import HeaderBackArrow from 'components/HeaderBackArrow/HeaderBackArrow';
import ProspectsItem from 'components/ProstectsItem';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProspects, getProspectsMeta } from 'store/ducks/prospects/selectors';
import { getProspectsThunk } from 'store/ducks/prospects/thunk';
import styled from 'styled-components';
import { Sort } from 'types';
import MainSubheader from '../components/Subheader';
import SearchPaginationSwitcher from '../Search/components/SearchPaginationSwitcher';
import ProspectsFilters from './components/ProspectsFilters';

const Prospects: React.FC = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState(Sort.alphabet);
  useEffect(() => {
    dispatch(getProspectsThunk({ page: 1, limit: 12, sort }));
  }, [dispatch, sort]);
  const meta = useSelector(getProspectsMeta);
  const prospects = useSelector(getProspects);
  return (
    <>
      <MainSubheader label="Prospects" leftChildren={<HeaderBackArrow />} />
      <Wrapper>
        <Container>
          <ProspectsFilters sort={sort} setSort={setSort} />
          <SearchPaginationSwitcher limit={12} asyncAction={getProspectsThunk} meta={meta} />
        </Container>
        <ItemsContainer>
          {prospects.map((prospect) => (
            <ProspectsItem key={prospect.id} prospect={prospect} />
          ))}
        </ItemsContainer>
      </Wrapper>
    </>
  );
};

export default Prospects;

const Wrapper = styled.div`
  padding: 32px 280px 25px 60px;
`;

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
