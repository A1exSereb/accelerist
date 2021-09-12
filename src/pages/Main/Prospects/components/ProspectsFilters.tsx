import React, { useState } from 'react';
import styled from 'styled-components';
import { Sort } from 'types';
import ShowArrow from 'assets/images/icons/pagArrow.svg';

interface ProspectFiltersProps {
  sort: Sort;
  setSort: React.Dispatch<React.SetStateAction<Sort>>;
}

const ProspectsFilters = ({ sort, setSort }: ProspectFiltersProps) => {
  const [showSort, setShowSort] = useState(false);

  const toggleSort = (sortBy: Sort) => {
    setSort(sortBy);
    setShowSort(false);
  };

  return (
    <FiltersContainer>
      <Container>
        <Text>Sort by</Text>
        <Arrow src={ShowArrow} onClick={() => setShowSort(!showSort)} active={showSort} />
        {showSort && (
          <ListContainer>
            <Ul>
              <Li
                onClick={() => {
                  toggleSort(Sort.alphabet);
                }}
              >
                {Sort.alphabet}
              </Li>
              <Li onClick={() => toggleSort(Sort.available)}>{Sort.available}</Li>
              <Li onClick={() => toggleSort(Sort['last-activity'])}>{Sort['last-activity']}</Li>
            </Ul>
          </ListContainer>
        )}
      </Container>
      <Container>
        <Text>Filter By</Text>
        <Arrow src={ShowArrow} onClick={() => setShowSort(!showSort)} active={showSort} />
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
  width: 82px;
`;

const Arrow = styled.img<{ active: boolean }>`
  transform: ${(props) => (props.active ? 'rotate(90deg)' : 'rotate(-90deg)')};
  transition: 0.7s;
  cursor: pointer;
`;
