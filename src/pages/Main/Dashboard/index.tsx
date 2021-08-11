import React from 'react';
import styled from 'styled-components';
import MainSubheader from '../components/Subheader';
import Favorites from './components/Favorites';
import ProspectingSessions from './components/ProspectingSessions';

const Dashboard: React.FC = () => {
  return (
    <>
      <MainSubheader label="Dashboard" />
      <DashboardContainer>
        <ProspectingSessions />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Favorites />
        </div>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  padding: 32px 280px 25px 60px;
`;
