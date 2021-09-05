import { goalAlignmentOptions } from 'constants/goalsAllignment';
import React from 'react';
import styled from 'styled-components';
import { Company } from 'types';

interface CompanySocialImpact {
  company: Company;
}

const CompanySocialImpact: React.FC<CompanySocialImpact> = ({ company }: CompanySocialImpact) => {
  return (
    <>
      <Title>Social Impact</Title>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {company.typesOfInvestment && (
          <Container>
            <Subtitle>Type of Investment</Subtitle>
            <ImpactContainer>
              <ul style={{ listStyle: 'none', paddingLeft: 14 }}>
                {company.typesOfInvestment.map((type, i) => (
                  <Li key={i}>{type}</Li>
                ))}
              </ul>
            </ImpactContainer>
          </Container>
        )}
        {company.crsFocus && company.crsFocus.length > 0 && (
          <Container>
            <Subtitle>CRS Focus</Subtitle>
            <ImpactContainer>
              <ul style={{ listStyle: 'none', paddingLeft: 14 }}>
                {company.crsFocus.map((crs, i) => (
                  <Li key={i}>{crs}</Li>
                ))}
              </ul>
            </ImpactContainer>
          </Container>
        )}
      </div>
      <Subtitle>SDG Goal Aligment</Subtitle>
      {company.sdgGoals && company.sdgGoals.length > 0 ? (
        <SdgContainer>
          {company.sdgGoals
            .sort((a, b) => goalAlignmentOptions[a].id - goalAlignmentOptions[b].id)
            .map((sdg) => (
              <SdgItem key={sdg} src={goalAlignmentOptions[sdg].img} />
            ))}
        </SdgContainer>
      ) : (
        <Text>No SDG Goals</Text>
      )}
      <Subtitle>Contributions</Subtitle>
      <ContributionsContainer>
        <ContributionsItem>
          <ContributionsText>Cash Contributions</ContributionsText>
          <ContributionsTotalText>
            {company.cashContributions ? `$ ${company.cashContributions}` : 'No information'}
          </ContributionsTotalText>
        </ContributionsItem>
        <ContributionsItem>
          <ContributionsText>Employee Contributions</ContributionsText>
          <ContributionsTotalText>
            {company.employeeContributions
              ? `$ ${company.employeeContributions}`
              : 'No information'}
          </ContributionsTotalText>
        </ContributionsItem>
        <ContributionsItem>
          <ContributionsText>Total Social Contributions</ContributionsText>
          <ContributionsTotalText>
            {company.annualContributions ? `$ ${company.annualContributions}` : 'No information'}
          </ContributionsTotalText>
        </ContributionsItem>
        <ContributionsItem>
          <ContributionsText>In-Kind Contributions</ContributionsText>
          <ContributionsTotalText>
            {company.inKindContributions ? `$ ${company.inKindContributions}` : 'No information'}
          </ContributionsTotalText>
        </ContributionsItem>
      </ContributionsContainer>
      <Subtitle>Charitable partners</Subtitle>
      {company.charitablePartners && company.charitablePartners.length > 0 ? (
        <CharitableContainer>
          <ul>
            {company.charitablePartners.map((partner, i) => (
              <Li key={i}>{partner}</Li>
            ))}
          </ul>
        </CharitableContainer>
      ) : (
        <Text>No charitable partners</Text>
      )}
      <Subtitle>Partnership and Program Details</Subtitle>
    </>
  );
};

export default CompanySocialImpact;

const CharitableContainer = styled.div`
  width: 100%;
  max-height: 649px;
  overflow: hidden;
  border: 1px solid #e8e8e8;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 6px;
`;

const ContributionsText = styled.p`
  color: #737373;
  font-size: 12px;
  margin: 0;
`;

const ContributionsTotalText = styled.p`
  color: #122434;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

const ContributionsContainer = styled.div`
  width: 100%;
  height: 153px;
  display: flex;
  margin-top: 16px;
  flex-wrap: wrap;
`;

const ContributionsItem = styled.div`
  border: 1px solid #e8e8e8;
  height: 49%;
  width: 49%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SdgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Text = styled.p`
  color: #122434;
  font-size: 16px;
  margin: 0;
`;

const SdgItem = styled.img`
  margin-right: 16px;
`;

const ImpactContainer = styled.div`
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  padding: 24px;
  width: 100%;
  border-radius: 6px;
`;

const Container = styled.div`
  width: 48%;
`;

const Title = styled.h3`
  margin: 0;
  color: #122434;
  font-weight: 500;
  font-size: 24px;
  margin-top: 40px;
`;

const Li = styled.li`
  ::before {
    content: '';
    color: #2baee0;
    background-color: #2baee0;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
  &:before {
    content: '';
    color: #2baee0;
    background-color: #2baee0;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const Subtitle = styled(Title)`
  color: #122434;
  font-weight: 500;
  font-size: 16px;
  margin-top: 24px;
  margin-bottom: 16px;
`;
