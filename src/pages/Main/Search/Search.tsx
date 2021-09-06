import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import SearchInput from 'ui/SearchInput';
import MainSubheader from '../components/Subheader';
import FilterIcon from 'assets/images/icons/searchFilterIcon.svg';
import SearchHeader from './components/SearchHeader';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedCompaniesThunk } from 'store/ducks/companies/thunk';
import {
  getCompaniesLoading,
  getSearchCompanies,
  getSearchFilters,
} from 'store/ducks/companies/selectors';
import Spinner from 'ui/Spinner';
import { Loading } from 'store/types/StoreSlice';
import SearchItem from '../../../components/SearchItem/SearchItems';
import { Field, Form } from 'react-final-form';
import SupportForm from 'components/Modal/SupportModal';
import { setFilters } from 'store/ducks/companies/slice';
import FiltersForm from 'components/FilterForm';
import SupportModal from 'components/Modal/SupportModal';
import queryString from 'query-string';
import { Company, Filters } from 'types';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const companiesLoading = useSelector(getCompaniesLoading);
  const companiesSearch: Company[] = useSelector(getSearchCompanies);
  const limit = 12;
  const setInitialState = () => {
    const filtersString = queryString.parse(location.search)?.filters;
    const pageString = queryString.parse(location.search)?.page;
    if (filtersString) {
      const param: Filters = JSON.parse(window.atob(filtersString?.toString()));
      dispatch(getSearchedCompaniesThunk({ page: Number(pageString), limit: limit, ...param }));
      dispatch(setFilters(param));
    } else {
      dispatch(getSearchedCompaniesThunk({ page: 1, limit: limit }));
    }
  };

  useEffect(() => {
    setInitialState();
  }, []);

  const toggleState = {
    toggleSupportModal: () => {
      setShowSupportModal(!showSupportModal);
    },
    toggleFilters: () => {
      setShowFilters(!showFilters);
    },
  };

  const onSubmit = (values: { q: string }) => {
    console.log(values);
    dispatch(setFilters({ q: values.q }));
  };
  return (
    <>
      <MainSubheader
        rightChildren={
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  rightChild={
                    <SearchFilterIcon src={FilterIcon} onClick={toggleState.toggleFilters} />
                  }
                  name="q"
                  onBlur={handleSubmit}
                  searchCSS={searchCSS}
                  component={SearchInput}
                />
              </form>
            )}
          />
        }
        label="Search"
      />
      <Container>
        {showFilters && <FiltersForm onClose={toggleState.toggleFilters} />}
        {showSupportModal && <SupportModal onClose={toggleState.toggleSupportModal} />}
        {companiesLoading === Loading.pending ? (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        ) : companiesSearch.length > 0 ? (
          <>
            <SearchHeader limit={limit} showSupportModal={toggleState.toggleSupportModal} />
            <SearchItemContainer>
              {companiesSearch.map((company) => (
                <SearchItem key={company && company.id} company={company} />
              ))}
            </SearchItemContainer>
          </>
        ) : (
          <p>No company</p>
        )}
      </Container>
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
