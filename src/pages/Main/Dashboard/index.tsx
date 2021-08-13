import React from 'react';
import styled from 'styled-components';
import Modal from 'ui/Modal';
import MainSubheader from '../components/Subheader';
import EmptyFavorites from './components/EmptyFavorites';
import Favorites from './components/Favorites';
import ProspectingSessions from './components/ProspectingSessions';
import ProspectNavigator from './components/ProspectNavigator';
import Reports from './components/Reports';

const Dashboard: React.FC = () => {
  const favArr = [];
  return (
    <>
      <MainSubheader label="Dashboard" />
      <DashboardContainer>
        <ProspectingSessions />
        <FlexContainer>
          {favArr.length > 0 ? <Favorites /> : <EmptyFavorites />}
          <Reports />
        </FlexContainer>
        <ProspectNavigator />
        <Modal />
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
