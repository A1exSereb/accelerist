import React, { ReactNode } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import searchIcon from 'assets/images/icons/search.svg';
import { FieldRenderProps } from 'react-final-form';

interface SearchInputProps {
  showSearchIcon?: boolean;
  searchCSS?: FlattenSimpleInterpolation;
  rightChild?: ReactNode;
  onBlur?: Function;
  input?: any;
  meta?: any;
}

const SearchInput: React.FC<FieldRenderProps<string, HTMLElement> | SearchInputProps> = ({
  showSearchIcon = true,
  searchCSS,
  rightChild,
  onBlur,
  meta,
  input,
  ...rest
}: SearchInputProps) => {
  return (
    <SearchContainer>
      <Search
        onBlur={() => onBlur && onBlur()}
        {...input}
        {...rest}
        $CSS={searchCSS}
        placeholder="Search"
      />
      {showSearchIcon && <SearchIcon src={searchIcon} />}
      {rightChild}
    </SearchContainer>
  );
};

export default SearchInput;

const SearchContainer = styled.div`
  position: relative;
`;

const Search = styled('input')<{ $CSS?: FlattenSimpleInterpolation }>`
  width: 100%;
  height: 36px;
  padding: 9px 40px 9px 24px;
  font-size: 12px;
  color: #737373;
  background-color: #f3fcff;
  border-radius: 6px;
  border: none;
  box-sizing: border-box;
  ${(props) => (props.$CSS ? { ...props.$CSS } : {})}
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 30%;
  right: 10px;
`;
