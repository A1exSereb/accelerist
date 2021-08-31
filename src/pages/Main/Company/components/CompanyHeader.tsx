import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCompanyLikeThunk } from 'store/ducks/companies/thunk';
import styled from 'styled-components';
import HeartIcon from 'assets/images/icons/heartGray.svg';
import RedHeartIcon from 'assets/images/icons/search/heart.svg';
import NoLogo from 'assets/images/icons/no_logo.png';
import { getCompany } from 'store/ducks/companies/selectors';
import CompanySocialMediaLinks from './CompanySocialMediaLinks';

export const CompanyHeader: React.FC = () => {
  const dispatch = useDispatch();
  const company = useSelector(getCompany);
  const [like, setLike] = useState<boolean>(company ? company.like : false);
  return (
    <Wrapper>
      <CompanyLogo src={company?.logo ? company.logo : NoLogo} />
      <Info>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Name>{company?.name}</Name>
          <LikeIcon
            onClick={() => {
              company && dispatch(toggleCompanyLikeThunk({ id: company.id, like: company.like }));
              setLike(!like);
            }}
            src={like ? HeartIcon : RedHeartIcon}
          />
        </div>
        <CsrFocus>
          {company?.industries ? company.industries.slice(2).join(', ') : 'No Information'}
        </CsrFocus>
        <Links>
          {company?.socialMediaUrls ? (
            <CompanySocialMediaLinks urls={company.socialMediaUrls} />
          ) : (
            <Empty>No Information</Empty>
          )}
        </Links>
      </Info>
      <BlockButton>Block</BlockButton>
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
  justify-content: space-between;
  margin-left: 20px;
`;

const Name = styled.h3`
  margin: 0;
  color: #122434;
  font-size: 24px;
  font-weight: 500;
`;

const LikeIcon = styled.img`
  margin-left: 10px;
`;

const CsrFocus = styled.span`
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

const BlockButton = styled.button`
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  text-aligin: center;
  color: #f05658;
  cursor: pointer;
  padding: 9px 27px;
  margin-left: auto;
`;

const Empty = styled(CsrFocus)``;
