import React, { useState } from 'react';
import styled from 'styled-components';
import { Company } from 'types';

interface CompanyTabsProps {
  company: Company;
}

const CompanyTabs: React.FC<CompanyTabsProps> = ({ company }: CompanyTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
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
        <CompaniesSubtitle
          onClick={() => setActiveTab(0)}
          className={activeTab === 0 ? 'active' : 'unactive'}
        >
          Similar Companies
        </CompaniesSubtitle>
        <CompaniesSubtitle
          onClick={() => setActiveTab(1)}
          className={activeTab === 1 ? 'active' : 'unactive'}
        >
          Parent Company
        </CompaniesSubtitle>
        <CompaniesSubtitle
          onClick={() => setActiveTab(2)}
          className={activeTab === 2 ? 'active' : 'unactive'}
        >
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

const CompaniesSubtitle = styled(Subtitle)`
  margin-right: 32px;
  cursor: pointer;
  &.active {
    color: #2baee0;
  }
`;
