import React from 'react';
import styled from 'styled-components';
import DashboardHeader from './DashboardHeader';

const Reports = () => {
  return (
    <Wrapper>
      <DashboardHeader label="Reports" seeMore={false} />
      <Container></Container>
    </Wrapper>
  );
};

export default Reports;

const Container = styled.div`
  height: 498px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 6px;
  padding: 119px 146px;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
`;
