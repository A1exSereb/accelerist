import React from 'react';
import styled, { css } from 'styled-components';
import { ThirdButton } from 'styled/styled';
import ButtonUI from 'ui/Button';

const ProspectingSessions: React.FC = () => {
  const filtersToMap = ['1filer', 'secFilter', 'And another one'];
  return (
    <>
      <HeaderContainer>
        <HeaderTitle>Prospecting Sessions</HeaderTitle>
        <HeaderText>see more</HeaderText>
      </HeaderContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <PSContainer>
          <PSTitle>Race for the Cure</PSTitle>
          <Separator />
          <FiltersText>Filters</FiltersText>
          <FiltersContainer>
            {filtersToMap.map((filter) => (
              <ButtonUI
                buttonCSS={ThirdButton}
                wrapperCSS={FilerBtnWrapper}
                disabled={false}
                key={filter}
                content={filter}
              />
            ))}
          </FiltersContainer>
        </PSContainer>
        <PSContainer>
          <PSTitle>Race for the Cure</PSTitle>
        </PSContainer>
      </div>
    </>
  );
};

export default ProspectingSessions;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h2`
  color: #122434;
  font-size: 24px;
  font-weight: 500;
`;

const HeaderText = styled.p`
  color: #2baee0;
  font-size: 12px;
`;

const PSContainer = styled.div`
  width: 536px;
  height: 312px;
  background-color: #fff;
  border-radius: 6px;
  padding: 24px;
`;

const PSTitle = styled.h2`
  color: #122434;
  font-size: 16px;
  font-weight: 500;
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e8e8e8;
  margin-bottom: 16px;
`;
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
  box-sizing: border-box;
  margin-right: 16px;
`;
