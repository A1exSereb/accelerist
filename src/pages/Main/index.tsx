import MainLayout from 'layouts/Main';
import React from 'react';
import MainSubheader from './components/Subheader';

const Main = () => {
  return (
    <MainLayout>
      <MainSubheader label="Main Subheader" />
    </MainLayout>
  );
};

export default Main;
