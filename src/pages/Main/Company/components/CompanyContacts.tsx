import React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Company } from 'types';
import ButtonUI from 'ui/Button';

interface CompanyContactsProps {
  company: Company;
}

const CompanyContacts: React.FC<CompanyContactsProps> = ({ company }: CompanyContactsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contacts = [
    {
      name: 'Ronald Richards',
      type: 'Human Resources',
      phone: '(270) 555-0117',
      mail: 'ronald23@gmail.com',
    },
  ];
  return (
    <>
      <TitleContainer>
        <Title>Contacts</Title>
        <Seemore onClick={() => setIsModalOpen(true)}>see more</Seemore>
      </TitleContainer>
      <ContactsContainer>
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
      </ContactsContainer>
    </>
  );
};

export default CompanyContacts;

const Title = styled.h3`
  color: #122434;
  font-weight: 500;
  margin: 0;
  font-size: 16px;
`;

const Seemore = styled.p`
  color: #2baee0;
  font-size: 12px;
  cursor: pointer;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContactsItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ebebeb;
  height: 59px;
  align-items: center;
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
