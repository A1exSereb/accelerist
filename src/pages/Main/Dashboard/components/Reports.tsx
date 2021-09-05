import React from 'react';
import styled from 'styled-components';
import DashboardHeader from './DashboardHeader';
import greenpeaceLogo from 'assets/images/reports-logo/greenpeace.png';
import nasaLogo from 'assets/images/reports-logo/nasa.png';
import bankLogo from 'assets/images/reports-logo/bank.png';
import samsungLogo from 'assets/images/reports-logo/logo01.png';

const Reports: React.FC = () => {
  const logoArr = [greenpeaceLogo, nasaLogo, bankLogo, samsungLogo];
  const lastLoginArr = [
    { img: samsungLogo, name: 'Frank Lampard', date: '12 Aug 2020' },
    { img: samsungLogo, name: 'Frank Lampard', date: '12 Aug 2020' },
    { img: samsungLogo, name: 'Frank Lampard', date: '12 Aug 2020' },
  ];
  return (
    <Wrapper>
      <DashboardHeader label="Reports" seeMore={false} />
      <Container>
        <BlockWrapper>
          <BlockContainer>
            <Title>Search Sessions</Title>
            <Block>
              <BlockText>Total</BlockText>
              <BlockCount>43</BlockCount>
            </Block>
          </BlockContainer>
          <BlockContainer>
            <Title>Sent Pitches</Title>
            <Block>
              <BlockText>Company</BlockText>
              <BlockCount>44</BlockCount>
            </Block>
          </BlockContainer>
        </BlockWrapper>
        <div>
          <Title>Top Matched</Title>
          <TopMatchedContainer>
            {logoArr.map((logo) => (
              <TopMatchedItem key={logo} src={logo} />
            ))}
          </TopMatchedContainer>
        </div>
        <div>
          <Title>Last Login</Title>
          <LastLoginContainer>
            {lastLoginArr.map((user) => (
              <LastLoginItem key={user.name}>
                <LastLoginImg src={user.img} />
                <LastLoginTextContainer>
                  <LastLoginName>{user.name}</LastLoginName>
                  <LastLoginDate>{user.date}</LastLoginDate>
                </LastLoginTextContainer>
              </LastLoginItem>
            ))}
          </LastLoginContainer>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Reports;

const Container = styled.div`
  height: 498px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 6px;
  padding: 24px;
<<<<<<< HEAD
=======
  overflow: hidden;
>>>>>>> feature/company
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h4`
  color: #122434;
  font-size: 16px;
  font-weight: 500;
  margin-top: 0;
`;

const BlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BlockContainer = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
`;

const Block = styled.div`
  padding: 5px;
  width: 100%;
  background-color: #f9f9f9;
  border-radius: 4px;
  height: 71px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0;
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

const TopMatchedContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const TopMatchedItem = styled.img`
  height: 83px;
  width: 83px;
  border-radius: 6px;
  border: 1px solid #ebebeb;
  margin-right: 5px;
`;

const LastLoginContainer = styled.div``;

const LastLoginItem = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
`;

const LastLoginTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeee;
  align-items: center;
`;

const LastLoginImg = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 25px;
  margin-right: 10px;
`;

const LastLoginName = styled.p`
  color: #122434;
  font-size: 12px;
  font-weight: 500;
`;

const LastLoginDate = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #737373;
  align-self: flex-end;
`;
