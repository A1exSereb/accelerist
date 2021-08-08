import React from 'react';
import { useSelector } from 'react-redux';
import MainRouter from 'routes/MainRouter';
import UnauthorizedRouter from 'routes/UnauthorizedRouter';
import { isAuthorized } from 'store/ducks/authorization/selectors';
const App: React.FC = () => {
  const checkAuthorized = useSelector(isAuthorized);
  return checkAuthorized ? <MainRouter /> : <UnauthorizedRouter />;
};

export default App;
