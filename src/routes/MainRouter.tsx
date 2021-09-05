import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainLayout from 'layouts/Main/MainLayout';
import Dashboard from 'pages/Main/Dashboard';
import MainLayoutNoSearch from 'layouts/Main/MainLayoutNoSearch';
import Search from 'pages/Main/Search';
<<<<<<< HEAD
=======
import Company from 'pages/Main/Company/Company';
>>>>>>> feature/company

const MainRouter: React.FC = () => {
  return (
    <Switch>
<<<<<<< HEAD
      <Route path={['/dashboard']}>
        <MainLayout>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
=======
      <Route path={['/dashboard', '/company/:companyId']}>
        <MainLayout>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/company/:companyId" component={Company} />
>>>>>>> feature/company
          </Switch>
        </MainLayout>
      </Route>
      <Route path={['/search']}>
        <MainLayoutNoSearch>
          <Switch>
            <Route path="/search" component={Search} />
          </Switch>
        </MainLayoutNoSearch>
      </Route>
      <Redirect to="/dashboard" />
    </Switch>
  );
};

export default MainRouter;
