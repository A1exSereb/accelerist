import SearchInput from 'ui/SearchInput';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCompaniesFavorites,
  getCompaniesFavoritesMeta,
  getCompaniesLoading,
} from 'store/ducks/companies/selectors';
import { getFavoriteCompaniesThunk } from 'store/ducks/companies/thunk';
import { Loading } from 'store/types/StoreSlice';
import styled, { css } from 'styled-components';
import Spinner from 'ui/Spinner';
import ArrowSVG from 'assets/images/icons/pagArrow.svg';
import { Link } from 'react-router-dom';
import FavoritesItem from './FavoritesItems';

const FavoritesModalContent: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavoriteCompaniesThunk({ page: 1, limit: limit }));
  }, []);
  const favoritesData = useSelector(getCompaniesFavorites);
  const favoritesMeta = useSelector(getCompaniesFavoritesMeta);
  const favoritesLoading = useSelector(getCompaniesLoading);
  const pageNumbers = [];
  const limit = 6;
  for (
    let i = 1;
    i <= Math.ceil(favoritesMeta.totalItems / Number(favoritesMeta.itemsPerPage));
    i++
  ) {
    pageNumbers.push(i);
  }

  const togglePage = ({ number, action }: { number?: number; action: string }) => {
    switch (action) {
      case 'nextPage':
        Number(favoritesMeta.currentPage) !== favoritesMeta.totalPages &&
          dispatch(
            getFavoriteCompaniesThunk({
              page: Number(favoritesMeta.currentPage) + 1,
              limit: limit,
            })
          );
        break;
      case 'prevPage':
        Number(favoritesMeta.currentPage) !== 1 &&
          dispatch(
            getFavoriteCompaniesThunk({
              page: Number(favoritesMeta.currentPage) - 1,
              limit: limit,
            })
          );
        break;
      case 'numPage':
        number &&
          Number(favoritesMeta.currentPage) !== number &&
          dispatch(getFavoriteCompaniesThunk({ page: number, limit: limit }));
        break;
      default:
        break;
    }
  };
  return (
    <>
      <SearchContainer>
        <Link to="/search">
          <SearchInput searchCSS={searchCSS} showSearchIcon={false} />
        </Link>
      </SearchContainer>
      {favoritesLoading === Loading.pending ? (
        <Spinner />
      ) : (
        favoritesData.map((company) => <FavoritesItem key={company.id} company={company} />)
      )}
      <PageContainer>
        <PaginationPage onClick={() => togglePage({ action: 'prevPage' })}>
          <PrevPage src={ArrowSVG} />
        </PaginationPage>
        {pageNumbers.map((number) => {
          return (
            <PaginationPage
              key={number}
              onClick={() => togglePage({ number: number, action: 'numPage' })}
              className={Number(favoritesMeta.currentPage) === number ? 'active' : ''}
            >
              <span>{number}</span>
            </PaginationPage>
          );
        })}
        <PaginationPage onClick={() => togglePage({ action: 'nextPage' })}>
          <NextPage src={ArrowSVG} />
        </PaginationPage>
      </PageContainer>
    </>
  );
};

export default FavoritesModalContent;

const searchCSS = css`
  box-sizing: border-box;
  background-color: #f2f2f2;
  height: 36px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 15px;
  a {
    width: 100%;
    height: 100%;
  }
`;

const PrevPage = styled.img``;

const NextPage = styled(PrevPage)`
  transform: rotate(180deg);
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PaginationPage = styled.div`
  background: #f2f2f2;
  border-radius: 4px;
  border-color: #122434;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 49px;
  height: 35px;
  margin-right: 5px;
  color: #122434;
  font-size: 16px;
  cursor: pointer;
  &.active {
    background: #caf0ff;
    cursor: not-allowed;
  }
`;
