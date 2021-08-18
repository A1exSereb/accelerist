import React from 'react';
import { css } from 'styled-components';
import SearchInput from 'ui/SearchInput';
import MainSubheader from '../components/Subheader';

const Search = () => {
  return <MainSubheader rightChildren={<SearchInput searchCSS={searchCSS} />} label="Search" />;
};

export default Search;

const searchCSS = css`
  box-sizing: border-box;
  width: 715px;
  margin-left: 100px;
`;
