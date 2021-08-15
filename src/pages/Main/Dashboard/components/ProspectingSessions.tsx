import React from 'react';
import styled, { css } from 'styled-components';
import { ThirdButton } from 'styled/styled';
import ButtonUI from 'ui/Button';
import Avatar from 'assets/images/icons/ava.svg';
import DashboardHeader from './DashboardHeader';

const ProspectingSessions: React.FC = () => {
  const filtersToMap = ['1filer', 'secFilter', 'And another one'];
  return (
    <>
      <DashboardHeader label="Prospecting Sessions" />
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
          <BlockWrapper>
            <Block>
              <BlockText>№ of Prospects Available</BlockText>
              <BlockCount>235</BlockCount>
            </Block>
            <Block>
              <BlockText>№ of Contacts Pursued</BlockText>
              <BlockCount>72</BlockCount>
            </Block>
          </BlockWrapper>
          <Footer>
            <div style={{ display: 'flex' }}>
              <img src={Avatar} style={{ marginRight: 5, borderRadius: 25 }} />
              <NameContainer>
                <BlackText>Cowboy Bibop</BlackText>
                <GrayText>Owner</GrayText>
              </NameContainer>
            </div>
            <DateContainer>
              <GrayText>Last Activity</GrayText>
              <BlackText>1 Jul 2020</BlackText>
            </DateContainer>
          </Footer>
        </PSContainer>
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
          <BlockWrapper>
            <Block>
              <BlockText>№ of Prospects Available</BlockText>
              <BlockCount>235</BlockCount>
            </Block>
            <Block>
              <BlockText>№ of Contacts Pursued</BlockText>
              <BlockCount>72</BlockCount>
            </Block>
          </BlockWrapper>
          <Footer>
            <div style={{ display: 'flex' }}>
              <img src={Avatar} style={{ marginRight: 5, borderRadius: 25 }} />
              <NameContainer>
                <BlackText>Cowboy Bibop</BlackText>
                <GrayText>Owner</GrayText>
              </NameContainer>
            </div>
            <DateContainer>
              <GrayText>Last Activity</GrayText>
              <BlackText>1 Jul 2020</BlackText>
            </DateContainer>
          </Footer>
        </PSContainer>
      </div>
    </>
  );
};

export default ProspectingSessions;

const PSContainer = styled.div`
  width: 49%;
  background-color: #fff;
  border-radius: 6px;
  padding: 24px;
  box-sizing: border-box;
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
  margin-top: 16px;
  margin-top: 6px;
  box-sizing: border-box;
  margin-right: 16px;
`;

const Block = styled.div`
  padding: 5px;
  background-color: #f9f9f9;
  border-radius: 4px;
  width: 47%;
  height: 71px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const BlockText = styled.p`
  margin: 0;
  color: #737373;
  font-weight: 400;
  font-size: 12px;
`;

const BlockCount = styled.p`
  margin: 0;
  color: #122434;
  font-size: 24px;
  font-weight: 500;
`;

const BlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const BlackText = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: #122434;
`;

const GrayText = styled.p`
  margin: 0;
  color: #737373;
  font-size: 12px;
  font-weight: 400;
`;
