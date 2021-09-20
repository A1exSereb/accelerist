import React, { useState } from 'react';
import styled from 'styled-components';
import { Sort } from 'types';
import ShowArrow from 'assets/images/icons/pagArrow.svg';
import { ActionMeta } from 'react-select';
import Select from 'react-select';
import { filtersSelectStyles } from 'styled/styled';
import { SelectOption } from 'ui/types';

interface ProspectFiltersProps {
  sort: Sort;
  setSort: React.Dispatch<React.SetStateAction<Sort>>;
}

const filterOptions = [
  { value: Sort.alphabet, label: Sort.alphabet },
  { value: Sort.available, label: Sort.available },
  { value: Sort['last-activity'], label: Sort['last-activity'] },
];

const ProspectsFilters = ({ sort, setSort }: ProspectFiltersProps) => {
  const toggleSort = (
    inputValue: {
      value: Sort;
      label: Sort;
    } | null,
    {
      action,
    }: ActionMeta<{
      value: Sort;
      label: Sort;
    }>
  ) => {
    inputValue && setSort(inputValue.value);
  };

  return (
    <FiltersContainer>
      <Container>
        <Select
          options={filterOptions}
          components={{ IndicatorSeparator: () => null }}
          onChange={toggleSort}
          placeholder="Sort by"
          styles={filtersSelectStyles}
          isSearchable={false}
        />
        <Select
          options={filterOptions}
          placeholder="Filter by"
          components={{ IndicatorSeparator: () => null }}
          onChange={toggleSort}
          styles={filtersSelectStyles}
          isSearchable={false}
        />
      </Container>
    </FiltersContainer>
  );
};

export default ProspectsFilters;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  align-content: center;
  margin: 0;
`;

const Li = styled.li`
  color: #122434;
  font-size: 12px;
  margin: 5px 0;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;

const ListContainer = styled.div`
  position: absolute;
  background-color: #fff;
  width: 100%;
  padding: 3px;
  left: 0;
  bottom: -70px;
  transition: 0.7s;
  border-radius: 3px;
`;

const FiltersContainer = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
`;

const Text = styled.p`
  margin: 0;
  color: #122434;
  font-size: 12px;
  margin-right: 10px;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 300px;
`;

const Arrow = styled.img`
  transition: 0.7s;
  cursor: pointer;
`;
