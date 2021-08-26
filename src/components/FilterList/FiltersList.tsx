import React from 'react';
import styled, { css } from 'styled-components';
import { ThirdButton } from 'styled/styled';
import ButtonUI from 'ui/Button';

interface FiltersListProps {
  filters: string[];
}

export const FiltersList: React.FC<FiltersListProps> = ({ filters }: FiltersListProps) => {
  return (
    <>
      <FiltersText>Filters</FiltersText>
      <FiltersContainer>
        {filters.map((filter) => (
          <ButtonUI
            buttonCSS={ThirdButton}
            wrapperCSS={FilerBtnWrapper}
            disabled={false}
            key={filter}
            content={filter}
          />
        ))}
      </FiltersContainer>
    </>
  );
};

const FiltersText = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #737373;
  margin: 0;
`;
const FiltersContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const FilerBtnWrapper = css`
  margin-top: 16px;
  margin-top: 6px;
  box-sizing: border-box;
  margin-right: 16px;
`;
