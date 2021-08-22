import ProspectsItem from 'components/ProstectsItem';
import React from 'react';
import DashboardHeader from './DashboardHeader';

const ProspectingSessions: React.FC = () => {
  return (
    <>
      <DashboardHeader label="Prospecting Sessions" />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ProspectsItem />
        <ProspectsItem />
      </div>
    </>
  );
};

export default ProspectingSessions;
