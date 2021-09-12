import React from 'react';
import MainSubheader from '../components/Subheader';
import ArrowIcon from 'assets/images/icons/arrow-down.svg';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import SearchPaginationSwitcher from '../Search/components/SearchPaginationSwitcher';
import { useSelector } from 'react-redux';
import { getCompaniesFavorites, getCompaniesFavoritesMeta } from 'store/ducks/companies/selectors';
import SearchItem from 'components/SearchItem/SearchItems';
import { getFavoriteCompaniesThunk } from 'store/ducks/companies/thunk';
import HeaderBackArrow from 'components/HeaderBackArrow/HeaderBackArrow';

const Favorites = () => {
  const favoritesMeta = useSelector(getCompaniesFavoritesMeta);
  const favoritesData = useSelector(getCompaniesFavorites);
  return (
    <>
      <MainSubheader label="Favorites" leftChildren={<HeaderBackArrow />} />
      <Wrapper>
        <HeaderContainer>
          <HeaderText>{`Found ${favoritesMeta.totalItems} companies`}</HeaderText>
          <SearchPaginationSwitcher
            asyncAction={getFavoriteCompaniesThunk}
            meta={favoritesMeta}
            limit={12}
          />
        </HeaderContainer>
        <ItemContainer>
          {favoritesData.map((company) => (
            <SearchItem key={company.id} company={company} />
          ))}
        </ItemContainer>
      </Wrapper>
    </>
  );
};

export default Favorites;

const Wrapper = styled.div`
  padding: 32px 280px 25px 60px;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const BackArrow = styled(ReactSVG)`
  transform: rotate(90deg);
  margin-right: 8px;
  cursor: pointer;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const HeaderText = styled.p`
  color: #122434;
  font-size: 16px;
  font-weight: 500;
`;
