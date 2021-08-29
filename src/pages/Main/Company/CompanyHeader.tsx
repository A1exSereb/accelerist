import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';
import { toggleCompanyLikeThunk } from 'store/ducks/companies/thunk';
import styled from 'styled-components';
import HeartIcon from 'assets/images/icons/heartGray.svg';
import RedHeartIcon from 'assets/images/icons/search/heart.svg';
import { getCompany } from 'store/ducks/companies/selectors';

export const CompanyHeader: React.FC = () => {
  const dispatch = useDispatch();
  const company = useSelector(getCompany);
  return (
    <Wrapper>
      <CompanyLogo src={company?.logo} />
      <Info>
        <div style={{ display: 'flex' }}>
          <Name>{company?.name}</Name>
          <LikeIcon
            onClick={() => {
              company && dispatch(toggleCompanyLikeThunk({ id: company.id, like: company.like }));
            }}
            src={company?.like ? HeartIcon : RedHeartIcon}
          />
        </div>
        {company?.crsFocus ? (
          <CsrFocus>{company.crsFocus.slice(2).join(', ')}</CsrFocus>
        ) : (
          <CsrFocus>No Information</CsrFocus>
        )}
        <CsrFocus>
          {company?.crsFocus ? company.crsFocus.slice(2).join(', ') : <Empty>No Information</Empty>}
        </CsrFocus>
        <Links>
          {company?.socialMediaUrls ? (
            company.socialMediaUrls.map((link) => (
              <a href={link.link} key={link.name}>
                <img src={link.img} />
              </a>
            ))
          ) : (
            <Empty>No Information</Empty>
          )}
        </Links>
      </Info>
    </Wrapper>
  );
};

export default CompanyHeader;

const Wrapper = styled.div`
  height: 180px;
  background: #f2f2f2;
  border-radius: 6px 6px 0px 0px;
  padding: 40px 20px 40px 40px;
  align-items: center;
  box-sizing: border-box;
  display: flex;
`;

const CompanyLogo = styled.img`
  width: 100px;
  height: 100px;
`;

const Info = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 20px;
`;

const Name = styled.h3`
  margin: 0;
  color: #122434;
  font-size: 24px;
  font-weight: 500;
`;

const LikeIcon = styled(ReactSVG)`
  margin-left: 10px;
`;

const CsrFocus = styled.p`
  margin: 0;
  color: #737373;
  font-size: 12px;
`;

const Links = styled.div`
  max-width: 100px;
  display: flex;
  justify-content: space-between;
  align-content: flex-end;
`;

const Empty = styled(CsrFocus)``;
