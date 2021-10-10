import HeaderBackArrow from 'components/HeaderBackArrow/HeaderBackArrow';
import MainSubheader from 'pages/Main/components/Subheader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSearchCompanies, getSearchCompaniesMeta } from 'store/ducks/companies/selectors';
import { getSearchedCompaniesThunk } from 'store/ducks/companies/thunk';
import { getSingleProspect } from 'store/ducks/prospects/selectors';
import { getSingleProspectThunk } from 'store/ducks/prospects/thunk';
import styled from 'styled-components';
import queryString from 'query-string';
import ProspectSingleTitle from './ProspectSingleTitle';
import Spinner from 'ui/Spinner';
import FiltersList from 'components/FilterList';
import SearchPaginationSwitcher from 'pages/Main/Search/components/SearchPaginationSwitcher';
import UploadIcon from 'assets/images/icons/search/upload.svg';
import PenIcon from 'assets/images/icons/pen.svg';
import SearchItem from 'components/SearchItem/SearchItems';
import { clearSingleProspect } from 'store/ducks/prospects/slice';

const SingleProspect: React.FC = () => {
  const dispatch = useDispatch();
  const { prospectId }: { prospectId: string } = useParams();
  const prospect = useSelector(getSingleProspect);
  const companies = useSelector(getSearchCompanies);
  console.log('Prospect Id', prospectId);
  useEffect(() => {
    const pageString = queryString.parse(location.search)?.page;
    dispatch(getSingleProspectThunk({ id: prospectId }));
    dispatch(
      getSearchedCompaniesThunk({
        page: pageString ? Number(pageString) : 1,
        limit: 12,
        ...prospect?.filters,
      })
    );
    return () => {
      dispatch(clearSingleProspect());
    };
  }, []);
  const meta = useSelector(getSearchCompaniesMeta);
  console.log('Prospect', prospect);
  return (
    <>
      {prospect ? (
        <MainSubheader
          leftChildren={<HeaderBackArrow />}
          rightChildren={<ProspectSingleTitle prospect={prospect} />}
        />
      ) : (
        <Spinner />
      )}
      {companies && prospect ? (
        <Wrapper>
          <CompaniesTotal>{`${prospect?.prospectsAvailable} companies`}</CompaniesTotal>
          <FiltersList filters={prospect.filters} />
          <PaginationContainer>
            <div style={{ display: 'flex' }}>
              <PaginationItem>
                <PaginationIcon src={PenIcon} />
                <PaginationIconLabel>Edit</PaginationIconLabel>
              </PaginationItem>
              <PaginationItem>
                <PaginationIcon src={UploadIcon} />
                <PaginationIconLabel>Export to Excel</PaginationIconLabel>
              </PaginationItem>
            </div>
            <SearchPaginationSwitcher
              limit={12}
              meta={meta}
              asyncAction={getSearchedCompaniesThunk}
              filters={prospect.filters}
            />
          </PaginationContainer>
          <ItemsContainer>
            {companies.map((company) => (
              <SearchItem company={company} key={company.id} />
            ))}
          </ItemsContainer>
        </Wrapper>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default SingleProspect;

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const PaginationItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
`;

const PaginationIcon = styled.img`
  margin-right: 10px;
`;

const PaginationIconLabel = styled.p`
  margin: 0;
  color: #122434;
  font-size: 12px;
`;

const CompaniesTotal = styled.p`
  color: #122434;
  font-size: 16px;
  font-weight: 500;
`;

const Wrapper = styled.div`
  padding: 32px 280px 25px 60px;
`;
