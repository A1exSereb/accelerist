import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Company } from 'types';
import globeIcon from 'assets/images/icons/globe.svg';
import mapPinIcon from 'assets/images/icons/map-pin.svg';
import phoneIcon from 'assets/images/icons/phone.svg';
import CompanyContactsItem from 'components/ContactsItem/ContactsItem';
import Modal from 'components/Modal';

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
    {
      name: 'Ronald Richards',
      type: 'Human Resources',
      phone: '(270) 555-0117',
      mail: 'ronald23@gmail.com',
    },
  ];
  const address =
    company.street +
    '. ' +
    company.city +
    ', ' +
    company.state +
    ', ' +
    company.country +
    ' ' +
    company.zipCode;

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <TitleContainer>
        <Title>Contacts</Title>
        <Seemore onClick={() => setIsModalOpen(true)}>see more</Seemore>
      </TitleContainer>
      <ContactsContainer>
        <CompanyContactsItem contacts={contacts} />
      </ContactsContainer>
      <Title>Company Contacts</Title>
      <CompanyContactsContainer>
        <Container>
          <ContactsIcon src={globeIcon} />
          <A href={`https://${company.website}`}>{company.website}</A>
        </Container>
        <Container>
          <ContactsIcon src={phoneIcon} />
          <A href={`tel:${company.phone}`}>{company.phone}</A>
        </Container>
        <Container>
          <ContactsIcon src={mapPinIcon} />
          <Text>{address}</Text>
        </Container>
      </CompanyContactsContainer>
      {isModalOpen && <Modal onCloseBtnClick={toggleModal} />}
    </>
  );
};

export default CompanyContacts;

const CompanyContactsContainer = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  margin-top: 16px;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 6px;
  justify-content: space-evenly;
`;

const A = styled.a`
  color: #122434;
  font-size: 12px;
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 26px;
`;

const ContactsIcon = styled.img`
  margin-right: 10px;
`;

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
const Text = styled.p`
  color: #122434;
  font-size: 12px;
  text-decoration: none;
`;
const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 16px;
`;
