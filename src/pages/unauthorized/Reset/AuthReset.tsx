import React, { useState } from 'react';
import styled from 'styled-components';
import AuthorizationResetForm from 'pages/unauthorized/Reset/components/AuthorizationResetForm';
import { Link } from 'react-router-dom';
import { passwordChangeRequestThunk } from 'store/ducks/authorization/thunk';
/* import { Link } from 'react-router-dom';
 */
const AuthorizationReset: React.FC = () => {
  const [emailEntered, setEmailEntered] = useState(false);

  return (
    <>
      <div style={{ textAlign: 'left', position: 'relative' }}>
        <TextContainer>
          <h1>Password Reset</h1>
          <div>
            {emailEntered
              ? 'A link was sent to your email to confirm password reset and create a new one'
              : 'Enter your email to receive instructions on how to reset your password.'}
          </div>
        </TextContainer>
        <AuthorizationResetForm
          buttonPlaceholder={'Reset'}
          emailEntered={emailEntered}
          request={passwordChangeRequestThunk}
          setEmailEntered={setEmailEntered}
        />
        {emailEntered && <SupportButton>Contact Support</SupportButton>}
      </div>
      <ReturnButton>
        <Link to="/login">Return to Login</Link>
      </ReturnButton>
    </>
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
const ReturnButton = styled.button`
  box-sizing: border-box;
  background: rgba(18, 36, 52, 0.15);
  border-radius: 6px;
  border: none;
  color: #fff;
  padding: 9px 14px;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 28px;
  a {
    text-decoration: none;
    color: #fff;
  }
`;

const SupportButton = styled(ReturnButton)`
  bottom: -88px;
`;
