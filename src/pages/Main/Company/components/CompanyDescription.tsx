import React from 'react';
import styled from 'styled-components';
import { Company } from 'types';
import CompanyContacts from './CompanyContacts';
import CompanyTabs from './CompanyTabs';

interface CompanyDescriptionProps {
  description?: string;
  brandDescription?: string;
  structure?: string;
  company: Company;
}

const CompanyDescription: React.FC<CompanyDescriptionProps> = ({
  description,
  brandDescription,
  structure,
  company,
}: CompanyDescriptionProps) => {
  return (
    <>
      <Title>Business Description Products</Title> <Subtitle>Description</Subtitle>{' '}
      <Text>{description ? description : 'No description'}</Text>
      <Subtitle>Products & Brand Descriptions</Subtitle>
      <Text>{brandDescription ? brandDescription : 'No brand description information'}</Text>
      <Subtitle>Structure</Subtitle>
      <Text>{structure ? structure : 'No structure information'}</Text>
      <CompanyTabs company={company} />
      <Subtitle>Reported</Subtitle>
      <div style={{ display: 'flex' }}>
        <ReportedContainer>
          <ReportedGrayText>Revenue Reported</ReportedGrayText>
          <ReportedBlackText>$ {company.revenue}</ReportedBlackText>
        </ReportedContainer>
        <ReportedContainer>
          <ReportedGrayText>Employees Reported</ReportedGrayText>
          <ReportedBlackText>{company.employeeCount}</ReportedBlackText>
        </ReportedContainer>
      </div>
      <Subtitle>Company Ticker</Subtitle>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
        {company.ticker ? (
          company.ticker.slice(2).map((ticker) => (
            <TickerContainer key={ticker.type}>
              <TickerType>{ticker.type}</TickerType>
              <TickerExchange>{ticker.exchange}</TickerExchange>
            </TickerContainer>
          ))
        ) : (
          <p>No tickers</p>
        )}
      </div>
      <CompanyContacts company={company} />
    </>
  );
};

export default CompanyDescription;

const TickerContainer = styled.div`
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 32%;
  height: 110px;
`;

const TickerExchange = styled.p`
  color: #737373;
  font-size: 12px;
`;

const TickerType = styled.p`
  color: #122434;
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`;

const ReportedGrayText = styled.p`
  color: #737373;
  font-size: 12px;
  margin: 0;
  margin-bottom: 6px;
`;

const ReportedBlackText = styled.p`
  color: #122434;
  font-weight: 500;
  font-size: 16px;
  margin: 0;
`;

const ReportedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 71px;
  border: 1px solid #e8e8e8;
  margin-bottom: 32px;
`;

const Title = styled.h3`
  color: #122434;
  font-weight: 500;
  font-size: 24px;
  margin: 0;
  margin-bottom: 24px;
`;

const Subtitle = styled(Title)`
  font-size: 16px;
  margin-bottom: 16px;
`;

const Text = styled.p`
  color: #122434;
  font-size: 16px;
  margin-bottom: 24px;
`;

const CompaniesTitleContainer = styled.div`
  display: flex;
`;

const CompaniesSubtitle = styled(Subtitle)`
  margin-right: 32px;
  cursor: pointer;
  &.active {
    color: #2baee0;
  }
`;
