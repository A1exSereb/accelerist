import React from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
import Modal from 'ui/Modal';
import MainSubheader from '../components/Subheader';
import EmptyFavorites from './components/EmptyFavorites';
=======
import MainSubheader from '../components/Subheader';
>>>>>>> feature/company
import Favorites from './components/Favorites';
import ProspectingSessions from './components/ProspectingSessions';
import ProspectNavigator from './components/ProspectNavigator';
import Reports from './components/Reports';

const Dashboard: React.FC = () => {
<<<<<<< HEAD
  const favArr = [];
=======
>>>>>>> feature/company
  return (
    <>
      <MainSubheader label="Dashboard" />
      <DashboardContainer>
        <ProspectingSessions />
        <FlexContainer>
<<<<<<< HEAD
          {favArr.length > 0 ? <Favorites /> : <EmptyFavorites />}
          <Reports />
        </FlexContainer>
        <ProspectNavigator />
        <Modal />
=======
          <Favorites />
          <Reports />
        </FlexContainer>
        <ProspectNavigator />
>>>>>>> feature/company
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
