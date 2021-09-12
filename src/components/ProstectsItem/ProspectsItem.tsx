import React from 'react';
import styled from 'styled-components';
import FiltersList from 'components/FilterList';
import Avatar from 'assets/images/icons/ava.svg';
import { Prospect } from 'types';
import dateformat from 'dateformat';
import { Link } from 'react-router-dom';

export const ProspectsItem: React.FC<{ prospect: Prospect }> = ({
  prospect,
}: {
  prospect: Prospect;
}) => {
  const getAuthorName = () => {
    if (prospect.lastAuthor.firstName && prospect.lastAuthor.lastName)
      return `${prospect.lastAuthor.firstName} ${prospect.lastAuthor.lastName}`;
    return 'No Name';
  };
  return (
    <PSContainer>
      <PSTitle to={`/prospects/${prospect.id}`}>
        {prospect.name ? prospect.name : 'No Name'}
      </PSTitle>
      <Separator />
      <FiltersList filters={prospect.filters} />
      <BlockWrapper>
        <Block>
          <BlockText>№ of Prospects Available</BlockText>
          <BlockCount>{prospect.prospectsAvailable}</BlockCount>
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
            <BlackText>{getAuthorName()}</BlackText>
            <GrayText>
              {prospect.lastAuthor.role[0].toUpperCase() + prospect.lastAuthor.role.slice(1)}
            </GrayText>
          </NameContainer>
        </div>
        <DateContainer>
          <GrayText>Last Activity</GrayText>
          <BlackText>{dateformat(prospect.lastAuthor.loggedInAt, 'd mmm yyyy')}</BlackText>
        </DateContainer>
      </Footer>
    </PSContainer>
  );
};

const PSContainer = styled.div`
  width: 49%;
  background-color: #fff;
  border-radius: 6px;
  padding: 24px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const PSTitle = styled(Link)`
  color: #122434;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e8e8e8;
  margin-bottom: 16px;
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
