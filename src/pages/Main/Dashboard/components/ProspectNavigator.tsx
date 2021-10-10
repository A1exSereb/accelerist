import React from 'react';
import styled from 'styled-components';
import DashboardHeader from './DashboardHeader';
import pnImage from 'assets/images/prospect-navigator/img.png';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router';

const ProspectNavigator: React.FC = () => {
  const history = useHistory();
  const prArr = [
    {
      img: pnImage,
      title: 'The Decline of Clothing Retail',
      subtitle: 'The apparel industry’s appeal has been dwindling for a while: “In 1977, clothing ',
      date: '2 Sep 2020, 13:23',
    },
    {
      img: pnImage,
      title: 'The Decline of Clothing Retail',
      subtitle: 'The apparel industry’s appeal has been dwindling for a while: “In 1977, clothing ',
      date: '2 Sep 2020, 13:23',
    },
    {
      img: pnImage,
      title: 'The Decline of Clothing Retail',
      subtitle: 'The apparel industry’s appeal has been dwindling for a while: “In 1977, clothing ',
      date: '2 Sep 2020, 13:23',
    },
    {
      img: pnImage,
      title: 'The Decline of Clothing Retail',
      subtitle: 'The apparel industry’s appeal has been dwindling for a while: “In 1977, clothing ',
      date: '2 Sep 2020, 13:23',
    },
  ];

  const dashboardHeaderProps = {
    label: 'Prospecting Navigator',
  };
  return (
    <>
      <DashboardHeader {...dashboardHeaderProps} />
      <Container>
        {prArr.map((pr) => (
          <Item key={uuidv4()}>
            <ItemImg src={pr.img} />
            <ItemTitle>{pr.title}</ItemTitle>
            <ItemSubtitle>{pr.subtitle}</ItemSubtitle>
            <ItemDate>{pr.date}</ItemDate>
          </Item>
        ))}
      </Container>
    </>
  );
};

export default ProspectNavigator;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  width: 256px;
  height: 300px;
  margin-right: 5px;
`;

const ItemImg = styled.img`
  width: 100%;
  height: 187px;
  border-radius: 6px;
`;

const ItemTitle = styled.h4`
  color: #122434;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

const ItemSubtitle = styled(ItemTitle)`
  font-size: 12px;
  font-weight: 400;
`;

const ItemDate = styled.p`
  color: #737373;
  font-size: 12px;
  margin: 0;
`;
