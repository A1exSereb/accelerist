import React from 'react';
import styled from 'styled-components';
import MainSubheader from '../components/Subheader';
import Favorites from './components/Favorites';
import ProspectingSessions from './components/ProspectingSessions';
import ProspectNavigator from './components/ProspectNavigator';
import Reports from './components/Reports';

const Dashboard: React.FC = () => {
  return (
    <>
      <MainSubheader label="Dashboard" />
      <DashboardContainer>
        <ProspectingSessions />
        <FlexContainer>
          <Favorites />
          <Reports />
        </FlexContainer>
        <ProspectNavigator />
      </DashboardContainer>
    </>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  padding: 32px 280px 25px 60px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
