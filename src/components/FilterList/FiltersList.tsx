import React from 'react';
import styled, { css } from 'styled-components';
import { ThirdButton } from 'styled/styled';
import { Filters } from 'types';
import ButtonUI from 'ui/Button';
import { v4 as uuidv4 } from 'uuid';

interface FiltersListProps {
  filters: Filters;
}

type K = keyof Filters;

export const FiltersList: React.FC<FiltersListProps> = ({ filters }: FiltersListProps) => {
  return (
    <>
      <FiltersText>Filters</FiltersText>
      <FiltersContainer>
        {Object.values(filters).length > 0 ? (
          Object.values(filters)
            .slice(0, 4)
            .map((key) => (
              <ButtonUI
                buttonCSS={ThirdButton}
                wrapperCSS={FilerBtnWrapper}
                disabled={false}
                key={uuidv4()}
                content={key}
              />
            ))
        ) : (
          <FiltersText>No filters</FiltersText>
        )}
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
