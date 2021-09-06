/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompaniesFavorites, getCompaniesFavoritesMeta } from 'store/ducks/companies/selectors';
import { getFavoriteCompaniesThunk } from 'store/ducks/companies/thunk';
import EmptyFavorites from './EmptyFavorites';
import NotEmptyFavorites from './NotEmptyFavorites';

const DashboardFavorites: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavoriteCompaniesThunk({ page: 1, limit: 12 }));
  }, [dispatch]);

  const favoritesMeta = useSelector(getCompaniesFavoritesMeta);
  const favoritesData = useSelector(getCompaniesFavorites);

  return favoritesMeta.itemCount === 0 ? (
    <EmptyFavorites />
  ) : (
    <NotEmptyFavorites staticItems={favoritesData} favoritesMeta={favoritesMeta} />
  );
};

export default DashboardFavorites;
