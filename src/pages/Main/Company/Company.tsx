import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCompany } from 'store/ducks/companies/selectors';
import {
  getCompanyContactsThunk,
  getCompanyNewsThunk,
  getCompanyScoopsThunk,
  getCompanyThunk,
} from 'store/ducks/companies/thunk';
import MainSubheader from '../components/Subheader';
import ArrowIcon from 'assets/images/icons/arrow-down.svg';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import CompanyHeader from './CompanyHeader';

const Company = () => {
  const dispatch = useDispatch();
  const params: { companyId: string } = useParams();
  const company = useSelector(getCompany);
  const { companyId: id } = params;
  useEffect(() => {
    dispatch(getCompanyThunk({ id }));
    dispatch(getCompanyContactsThunk({ id }));
    dispatch(getCompanyNewsThunk({ id }));
    dispatch(getCompanyScoopsThunk({ id }));
  }, [dispatch, id]);
  console.log(id);
  return (
    <>
      <MainSubheader
        leftChildren={<BackArrow src={ArrowIcon} onClick={() => history.back()} />}
        label={company ? company?.name : 'No Name'}
      />
      <Wrapper>
        <CompanyHeader />
      </Wrapper>
    </>
  );
};

export default Company;

const BackArrow = styled(ReactSVG)`
  transform: rotate(90deg);
  margin-right: 8px;
`;

const Wrapper = styled.div`
  padding: 30px 284px 53px 60px;
`;
