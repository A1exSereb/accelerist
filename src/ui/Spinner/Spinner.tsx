import React from 'react';
import styled from 'styled-components';
import spinnerImg from 'assets/images/icons/spinner.svg';
import { rotate } from 'styled/styled';

const Spinner: React.FC = () => {
  return <SpinnerContainer src={spinnerImg} />;
};
export default Spinner;
const SpinnerContainer = styled.img`
  animation: ${rotate} 2s linear infinite;
  margin: 0 auto;
  display: block;
  align-self: center;
`;
