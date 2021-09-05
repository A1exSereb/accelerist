import React from 'react';
import styled, { css } from 'styled-components';
import ButtonUI from 'ui/Button';

interface CompanyContactsItemProps {
  contacts: {
    name: string;
    type: string;
    phone: string;
    mail: string;
  }[];
}

const CompanyContactsItem: React.FC<CompanyContactsItemProps> = ({
  contacts,
}: CompanyContactsItemProps) => {
  return (
    <>
      {contacts.map((contact) => (
        <ContactsItemContainer key={contact.name}>
          <ColumnContainer>
            <ContactsItemTitle>{contact.name}</ContactsItemTitle>
            <ContactsItemSubtitle>{contact.type}</ContactsItemSubtitle>
          </ColumnContainer>
          <ContactsItemText>{contact.phone}</ContactsItemText>
          <ContactsItemText>{contact.mail}</ContactsItemText>
          <ButtonUI buttonCSS={ButtonCss} content="Pitch" />
        </ContactsItemContainer>
      ))}
    </>
  );
};

export default CompanyContactsItem;

const ContactsItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ebebeb;
  height: 59px;
  align-items: center;
  &:last-child {
    border: none;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactsItemTitle = styled.h4`
  color: #122434;
  margin: 0;
  font-weight: 500;
  font-size: 12px;
`;

const ContactsItemSubtitle = styled.p`
  color: #737373;
  margin: 0;
  font-size: 12px;
`;

const ContactsItemText = styled.p`
  color: #122434;
  font-size: 12px;
`;

const ButtonCss = css`
  box-sizing: border-box;
  border: 1px solid #2baee0;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: inherit;
  padding: 5px 33px;
  color: #122434;
  cursor: pointer;
`;
