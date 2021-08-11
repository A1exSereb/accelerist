import React from 'react';
import styled from 'styled-components';
import DashboardHeader from './DashboardHeader';

const Favorites: React.FC = () => {
  return (
    <Wrapper>
      <DashboardHeader label="Favorites" />
      <Container>
        <Block>
          <HeaderContainer>
            <Image />
            <TextContainer>
              <Title>Title</Title>
              <Subtitle>Priority Rank 12</Subtitle>
            </TextContainer>
          </HeaderContainer>
          <Footer>
            <Subtitle>CSR Focus</Subtitle>
            <ListContainer>
              <ListItem>Health</ListItem>
              <ListItem>Health</ListItem>
              <ListItem>Health</ListItem>
              <ListItem>Health</ListItem>
            </ListContainer>
          </Footer>
        </Block>
      </Container>
    </Wrapper>
  );
};

export default Favorites;

const Container = styled.div`
  height: 498px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
`;

const Block = styled.div`
  height: 156px;
  width: 48%;
  margin-top: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 50px 24px 24px;
  background-color: #fff;
  border-radius: 6px;
`;

const Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 6px;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  margin-right: 12px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Title = styled.h3`
  margin: 0;
  color: #122434;
  font-size: 12px;
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Subtitle = styled.p`
  margin: 0;
  color: #737373;
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  flex-wrap: nowrap;
`;

const ListItem = styled.p`
  margin: 0;
  color: #122434;
  font-size: 12px;
  font-weight: 500;
  margin-right: 5px;
  overflow: hidden;
  &:not(:first-child) {
    &::before {
      content: '';
      align-self: center;
      text-align: center;
      display: inline-block;
      margin-bottom: 2px;
      width: 4px;
      height: 4px;
      margin-right: 5px;
      -moz-border-radius: 7.5px;
      -webkit-border-radius: 7.5px;
      border-radius: 7.5px;
      background-color: #c4c4c4;
    }
  }
`;