import ProspectsItem from 'components/ProstectsItem';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getProspects } from 'store/ducks/prospects/selectors';
import { getProspectsThunk } from 'store/ducks/prospects/thunk';
import DashboardHeader from './DashboardHeader';
import { v4 as uuidv4 } from 'uuid';
import { Sort } from 'types';

const ProspectingSessions: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProspectsThunk({ page: 1, limit: 12, sort: Sort.alphabet }));
  }, [dispatch]);
  const prospects = useSelector(getProspects);
  return (
    <>
      <DashboardHeader label="Prospecting Sessions" onClick={() => history.push('/prospects')} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {prospects.slice(0, 2).map((prospect) => (
          <ProspectsItem prospect={prospect} key={uuidv4()} />
        ))}
      </div>
    </>
  );
};

export default ProspectingSessions;
