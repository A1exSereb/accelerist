import React, { useEffect, useState } from 'react';
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
import { Field, Form } from 'react-final-form';
import SupportForm from 'components/SupportForm';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [showSupportModal, setShowSupportModal] = useState(false);
  const limit = 12;
  useEffect(() => {
    dispatch(getSearchedCompaniesThunk({ page: 1, limit: limit }));
  }, [dispatch]);
  const companiesLoading = useSelector(getCompaniesLoading);
  const companiesSearch = useSelector(getSearchCompanies);

  const toggleModal = () => {
    setShowSupportModal(!showSupportModal);
  };

  const onSubmit = (values: { search: string }) => {
    console.log(values);
    dispatch(getSearchedCompaniesThunk({ page: 1, limit: limit, q: values.search }));
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
                    <SearchFilterIcon src={FilterIcon} onClick={() => console.log('openFilter')} />
                  }
                  name="search"
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
      {showSupportModal && <SupportForm onClose={toggleModal} />}
      {companiesLoading === Loading.pending ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <Container>
          <SearchHeader limit={limit} showSupportModal={toggleModal} />
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
