import React from 'react';
import styled from 'styled-components';
import MainSubheader from '../components/Subheader';
import EmptyFavorites from './components/EmptyFavorites';
import Favorites from './components/Favorites';
import ProspectingSessions from './components/ProspectingSessions';
import Reports from './components/Reports';

const Dashboard: React.FC = () => {
  const favArr = [];
  return (
    <>
      <MainSubheader label="Dashboard" />
      <DashboardContainer>
        <ProspectingSessions />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {favArr.length > 0 ? <Favorites /> : <EmptyFavorites />}
          <Reports />
        </div>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  padding: 32px 280px 25px 60px;
`;
