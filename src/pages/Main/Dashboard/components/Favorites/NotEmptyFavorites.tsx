import React, { useState } from 'react';
import styled from 'styled-components';
import DashboardHeader from '../DashboardHeader';
import Modal from 'ui/Modal';
import FavoritesModalHeader from './components/FavoritesModalHeader';
import FavoritesModalContent from './components/FavoritesModalContent';
import { Company, Meta } from 'types';

interface NotEmptyFavoritesProps {
  favoritesMeta: Meta;
  staticItems: Array<Company | null>;
}

const NotEmptyFavorites: React.FC<NotEmptyFavoritesProps> = ({
  favoritesMeta,
  staticItems,
}: NotEmptyFavoritesProps) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const dashboardHeaderProps = {
    label: 'Favorites',
    onClick: toggleModal,
    seeMore: favoritesMeta.totalItems > 6 ? true : false,
  };
  return (
    <Wrapper>
      <DashboardHeader {...dashboardHeaderProps} />
      <Container>
        {staticItems.map((company) => {
          return (
            <Block key={company?.id}>
              <HeaderContainer>
                <Image src={company?.logo} />
                <TextContainer>
                  <Title>{company?.name}</Title>
                  <Subtitle>Priority Rank {company?.score}</Subtitle>
                </TextContainer>
              </HeaderContainer>
              <Footer>
                <Subtitle>CSR Focus</Subtitle>
                <ListContainer>
                  {company?.crsFocus.map((csr) => {
                    <ListItem>{csr}</ListItem>;
                  })}
                </ListContainer>
              </Footer>
            </Block>
          );
        })}
      </Container>
      {showModal && (
        <Modal
          headerChild={<FavoritesModalHeader title="Sent Pitches" meta={favoritesMeta} />}
          onCloseBtnClick={toggleModal}
        >
          {<FavoritesModalContent />}
        </Modal>
      )}
    </Wrapper>
  );
};

export default NotEmptyFavorites;

const Container = styled.div`
  height: 498px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
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
  margin-bottom: 15px;
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
  display: block;
  border-radius: 6px;
  border: 1px solid #e8e8e8;
  margin-right: 12px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const TextContainer = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: space-evenly;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Title = styled.h3`
  margin: 0;
  color: #122434;
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 500;
  display: block;
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
