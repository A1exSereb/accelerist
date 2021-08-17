import React from 'react';
import styled from 'styled-components';
import searchIcon from 'assets/images/icons/search.svg';

interface SearchInputProps {
  showSearchIcon?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({ showSearchIcon = true }: SearchInputProps) => {
  return (
    <SearchContainer>
      <Search placeholder="Search" />
      {showSearchIcon && <SearchIcon src={searchIcon} />}
    </SearchContainer>
  );
};

export default SearchInput;

const SearchContainer = styled.div`
  position: relative;
`;

const Search = styled.input`
  width: 100%;
  height: 36px;
  padding: 9px 40px 9px 24px;
  font-size: 12px;
  color: #737373;
  background-color: #f3fcff;
  border-radius: 6px;
  border: none;
  box-sizing: border-box;
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 30%;
  right: 10px;
`;
