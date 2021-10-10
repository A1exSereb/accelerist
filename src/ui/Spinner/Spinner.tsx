import React from 'react';
import styled from 'styled-components';
import spinnerImg from 'assets/images/icons/spinner.svg';
import { rotate } from 'styled/styled';

const Spinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <SpinnerImg src={spinnerImg} />
    </SpinnerContainer>
  );
};
export default Spinner;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const SpinnerImg = styled.img`
  animation: ${rotate} 2s linear infinite;
  width: 50px;
  height: 50px;
  margin: 0 auto;
  display: block;
  align-self: center;
`;
