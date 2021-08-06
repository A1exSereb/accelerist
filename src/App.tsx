import Main from 'pages/Main';
import Authorization from 'pages/unauthorized';
import React from 'react';
import { useSelector } from 'react-redux';
import { isAuthorized } from 'store/ducks/authorization/selectors';
const App: React.FC = () => {
  const checkAuthorized = useSelector(isAuthorized);
  return checkAuthorized ? <Main /> : <Authorization />;
};

export default App;
