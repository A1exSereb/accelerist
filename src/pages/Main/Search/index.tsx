import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import SearchInput from 'ui/SearchInput';
import MainSubheader from '../components/Subheader';
import FilterIcon from 'assets/images/icons/searchFilterIcon.svg';
import SearchHeader from './components/SearchHeader';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedCompaniesThunk } from 'store/ducks/companies/thunk';
import { getCompaniesLoading, getSearchCompanies } from 'store/ducks/companies/selectors';
import Spinner from 'ui/Spinner';
import { Loading } from 'store/types/StoreSlice';
import SearchItem from './components/SearchItems';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const limit = 12;
  useEffect(() => {
    dispatch(getSearchedCompaniesThunk({ page: 1, limit: limit }));
  }, [dispatch]);
  const companiesLoading = useSelector(getCompaniesLoading);
  const companiesSearch = useSelector(getSearchCompanies);
  return (
    <>
      <MainSubheader
        rightChildren={
          <SearchInput
            rightChild={
              <SearchFilterIcon src={FilterIcon} onClick={() => console.log('openFilter')} />
            }
            searchCSS={searchCSS}
          />
        }
        label="Search"
      />
      {companiesLoading === Loading.pending ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <Container>
          <SearchHeader />
          <SearchItemContainer>
            {companiesSearch.map((company) => (
              <SearchItem key={company && company.id} company={company} />
            ))}
          </SearchItemContainer>
        </Container>
      )}
    </>
  );
};

export default Search;

const SpinnerContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
`;
const searchCSS = css`
  box-sizing: border-box;
  width: 715px;
  margin-left: 100px;
  padding-right: 60px;
`;

const SearchFilterIcon = styled.img`
  position: absolute;
  top: 20%;
  right: 30px;
`;

const Container = styled.div`
  padding: 32px 280px 25px 60px;
`;
