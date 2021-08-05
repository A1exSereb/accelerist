/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from 'styled-components';
import bgImage from 'assets/images/icons/authorization/bg.png';
import AuthorizationHeader from './Header';

const AuthorizationLayout: React.FC<{ child: JSX.Element }> = ({
  child,
}: {
  child: JSX.Element;
}) => {
  return (
    <Container>
      <AuthorizationHeader />
      <ModalContainer>{child}</ModalContainer>
    </Container>
  );
};

export default AuthorizationLayout;

const Container = styled.div`
  height: 100vh;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
`;

const ModalContainer = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  margin-top: 75px;
  max-height: 565px;
  width: 454px;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  box-sizing: border-box;
  @media (max-width: 426px) {
    height: 547px;
    margin-top: 20px;
    padding: 24px 14px 30px 14px;
    width: 400px;
  }
  @media (max-width: 376px) {
    height: 547px;
    margin-top: 20px;
    padding: 24px 14px 30px 14px;
    width: 343px;
  }
  @media (max-width: 321px) {
    height: 447px;
    margin-top: 20px;
    padding: 10px 14px 15px 14px;
    width: 300px;
  }
`;
