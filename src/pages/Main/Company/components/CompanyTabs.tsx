import React, { useState } from 'react';
import styled from 'styled-components';
import { Company } from 'types';

interface CompanyTabsProps {
  company: Company;
}

const CompanyTabs: React.FC<CompanyTabsProps> = ({ company }: CompanyTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const checkActive = (num: number) => {
    return num === activeTab ? true : false;
  };
  const similarCompanies = company.similarCompanies ? (
    company.similarCompanies.map((company) => <p key={company}>{company}</p>)
  ) : (
    <p>No similar companies</p>
  );
  const parentCompany = company.parentCompany ? (
    <p>{company.parentCompany}</p>
  ) : (
    <p>No parent company</p>
  );
  const subsidiares = company.subUnitIndustries ? (
    <p>{company.similarCompanies}</p>
  ) : (
    <p>No subsidiares</p>
  );
  return (
    <>
      <CompaniesTitleContainer>
        <CompaniesSubtitle onClick={() => setActiveTab(0)} active={checkActive(0)}>
          Similar Companies
        </CompaniesSubtitle>
        <CompaniesSubtitle onClick={() => setActiveTab(1)} active={checkActive(1)}>
          Parent Company
        </CompaniesSubtitle>
        <CompaniesSubtitle onClick={() => setActiveTab(2)} active={checkActive(2)}>
          Subsidiaries
        </CompaniesSubtitle>
      </CompaniesTitleContainer>
      {activeTab === 0 && similarCompanies}
      {activeTab === 1 && parentCompany}
      {activeTab === 2 && subsidiares}
    </>
  );
};

export default CompanyTabs;

const Title = styled.h3`
  color: #122434;
  font-weight: 500;
  font-size: 24px;
  margin: 0;
`;

const Subtitle = styled(Title)`
  font-size: 16px;
  margin-bottom: 16px;
`;

const CompaniesTitleContainer = styled.div`
  display: flex;
`;

const CompaniesSubtitle = styled(Subtitle)<{ active: boolean }>`
  margin-right: 32px;
  cursor: pointer;
  &.active {
    color: #2baee0;
  }
  color: ${(props) => (props.active ? '#2baee0' : '#122434')};
`;
