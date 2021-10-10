import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainLayout from 'layouts/Main/MainLayout';
import Dashboard from 'pages/Main/Dashboard';
import MainLayoutNoSearch from 'layouts/Main/MainLayoutNoSearch';
import Search from 'pages/Main/Search';
import Company from 'pages/Main/Company/Company';
import Favorites from 'pages/Main/Favorites';
import Prospects from 'pages/Main/Prospects';
import SingleProspect from 'pages/Main/Prospects/components/ProspectsSingle';
import { ToastContainer } from 'react-toastify';

const MainRouter: React.FC = () => {
  return (
    <Switch>
      <Route
        path={[
          '/dashboard',
          '/company/:companyId',
          '/favorites',
          '/prospects',
          '/prospects/:prospectId',
        ]}
      >
        <MainLayout>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/company/:companyId" component={Company} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/prospects/:prospectId" component={SingleProspect} />
            <Route path="/prospects" component={Prospects} />
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
      <ToastContainer autoClose={5000} />
    </Switch>
  );
};

export default MainRouter;
