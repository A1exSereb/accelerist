import React from 'react';
import styled from 'styled-components';
import MainSubheader from '../components/Subheader';
import ProspectingSessions from './components/ProspectingSessions';

const Dashboard: React.FC = () => {
  return (
    <>
      <MainSubheader label="Dashboard" />
      <DashboardContainer>
        <ProspectingSessions />
      </DashboardContainer>
    </>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  padding: 32px 280px 25px 60px;
`;
