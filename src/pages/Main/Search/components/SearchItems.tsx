import React from 'react';
import styled, { css } from 'styled-components';
import { Company } from 'types';
import ButtonUI from 'ui/Button';
import heartIcon from 'assets/images/icons/search/heart.svg';
import heartGrayIcon from 'assets/images/icons/heartGray.svg';
import { ThirdButton } from 'styled/styled';
import { useDispatch } from 'react-redux';
import { toggleCompanyLikeThunk } from 'store/ducks/companies/thunk';

const SearchItem: React.FC<{ company: Company }> = ({ company }: { company: Company }) => {
  const dispatch = useDispatch();
  const companyAddress = `${company.city}, ${company.state} ${company.zipCode}`;
  return (
    <Container>
      <LSContainer>
        <CompanyLogo src={company.logo} />
        <PRContainer>
          <PRText>Priority Ranking</PRText>
          <PRCount>{company.score}</PRCount>
        </PRContainer>
      </LSContainer>
      <RSContainer>
        <div>
          <CompanyName>{company.name}</CompanyName>
          <CompanyAddress>{companyAddress}</CompanyAddress>
          <CompanyPhone></CompanyPhone>
        </div>
        <MiddleContainer>
          <CSRContainer>
            <CSRTitle>CSR Focus</CSRTitle>
            <div>
              {company.crsFocus.slice(2).map((csr) => (
                <CSRItem key={csr}>{csr}</CSRItem>
              ))}
            </div>
          </CSRContainer>
          <RevenueContainer>
            <Revenue>Revenue</Revenue>
            <RevenueCount>{`$ ${company.revenue}`}</RevenueCount>
          </RevenueContainer>
        </MiddleContainer>
        <BottomContainer>
          <ButtonUI
            onClick={() => dispatch(toggleCompanyLikeThunk({ id: company.id, like: company.like }))}
            content={<LikeImg src={company.like ? heartIcon : heartGrayIcon} />}
            buttonCSS={HeartButtonCss}
          />
          <ButtonUI content="Profile" buttonCSS={ThirdButton} wrapperCSS={ButtonWrapperCss} />
        </BottomContainer>
      </RSContainer>
    </Container>
  );
};

export default SearchItem;

const ButtonWrapperCss = css`
  width: 80%;
  width: 80%;
`;

const LikeImg = styled.img`
  width: 24px;
  height: 24px;
`;

const HeartButtonCss = css`
  box-sizing: border-box;
  background-color: #fff;
  font-weight: 400;
  font-size: 12px;
  border-radius: 6px;
  border-color: #e8e8e8;
  padding: 5px;
  text-align: center;
  align-items: center;
  color: #122434;
  border-width: 1px;
  cursor: pointer;
  border-style: solid;
  box-sizing: border-box;

  :hover {
    background-color: #ebf9ff;
    color: #e8e8e8;
  }
  :focus {
    background-color: #caf0ff;
  }
  :disabled {
    background-color: #ceedf9;
    color: #e8e8e8;
    cursor: not-allowed;
  }
`;

const Container = styled.div`
  width: 49%;
  height: 268px;
  background-color: #fff;
  padding: 26px 32px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  overflow: hidden;
`;

const LSContainer = styled.div`
  height: 100%;
  width: 168px;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  overflow: hidden;
`;

const CompanyLogo = styled.img`
  height: 72%;
`;

const PRContainer = styled.div`
  height: 56px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e8e8e8;
  justify-content: space-evenly;
  align-items: center;
`;

const PRText = styled.p`
  margin: 0;
  color: #737373;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const PRCount = styled.p`
  margin: 0;
  color: #122434;
  font-size: 16px;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const RSContainer = styled.div`
  display: flex;
  width: 55%;
  flex-direction: column;
  justify-content: space-between;
`;

const CompanyName = styled(PRCount)`
  margin-bottom: 16px;
`;
const CompanyAddress = styled(PRText)``;
const CompanyPhone = styled(PRText)``;

const MiddleContainer = styled.div`
  display: flex;
  height: 52px;
  border-bottom: 1px solid #e8e8e8;
  box-sizing: border-box;
`;

const CSRContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 12px;
  box-sizing: border-box;
`;

const RevenueContainer = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  border-left: 1px solid #e8e8e8;
  padding-bottom: 12px;
  box-sizing: border-box;
`;

const CSRTitle = styled(PRText)``;

const CSRItem = styled.p`
  margin: 0;
  color: #122434;
  font-size: 12px;
  font-weight: 500;
  margin-right: 5px;
  overflow: hidden;
  &:not(:first-child) {
    &::before {
      content: '';
      align-self: center;
      text-align: center;
      display: inline-block;
      margin-bottom: 2px;
      width: 4px;
      height: 4px;
      margin-right: 5px;
      -moz-border-radius: 7.5px;
      -webkit-border-radius: 7.5px;
      border-radius: 7.5px;
      background-color: #c4c4c4;
    }
  }
`;

const Revenue = styled(PRText)``;

const RevenueCount = styled(PRCount)`
  font-size: 12px;
`;

const BottomContainer = styled.div`
  height: 36px;
  display: flex;
  justify-content: space-between;
`;
