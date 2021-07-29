import React from 'react';
import AuthorizationInput from './AuthInput';
import styled from 'styled-components';

const AuthorizationReset: React.FC = () => {
  return (
    <div style={{ textAlign: 'left' }}>
      <TextContainer>
        <h1>Password Reset</h1>
        <div>Enter your email to receive instructions on how to reset your password.</div>
      </TextContainer>
      <AuthorizationInput buttonPlaceholder={'Reset'} signup={true} />
    </div>
  );
};

export default AuthorizationReset;

const TextContainer = styled.div`
  align-items: flex-start;
  color: #122434;
  font-size: 16px;
  width: 338px;
  margin-bottom: 30px;
  h1 {
    font-size: 24px;
    margin: 0;
    margin-bottom: 8px;
    font-weight: 500;
  }
`;
