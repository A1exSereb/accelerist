import React from 'react';
import styled from 'styled-components';
import { Field, Form } from 'react-final-form';
import { Link } from 'react-router-dom';
import AuthorizationButton from './AuthorizationSubmitButton';
interface AuthorizationInputProps {
  showCheckBox?: boolean;
  buttonPlaceholder: string;
  termsPrivacyShow?: boolean;
}
const AuthorizationInput: React.FC<AuthorizationInputProps> = ({
  showCheckBox = false,
  buttonPlaceholder,
  termsPrivacyShow = false,
}: AuthorizationInputProps) => {
  return (
    <Form
      onSubmit={() => console.log('submited')}
      initialValues={{ stooge: 'larry', employed: false }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form style={{ marginTop: 34 }} onSubmit={handleSubmit}>
          <FlexColumnContainer>
            <InputLabel>Email</InputLabel>
            <Field name="firstName" component="input" type="text" placeholder="First Name" />
          </FlexColumnContainer>
          <FlexColumnContainer>
            <InputLabel>Password</InputLabel>
            <Field name="lastName" component="input" type="text" placeholder="Last Name" />
          </FlexColumnContainer>
          {showCheckBox && (
            <FlexRowContainer>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Field name="employed" component="input" type="checkbox" />
                <CheckBoxLabel>Remember</CheckBoxLabel>
              </div>
              <Link to="/reset">Forgot password?</Link>
            </FlexRowContainer>
          )}
          {termsPrivacyShow && <label> Terms terms terms</label>}

          <ButtonContainer>
            <AuthorizationButton placeholder={buttonPlaceholder} onSubmit={console.log('dsdsd')} />
          </ButtonContainer>
        </form>
      )}
    />
  );
};

export default AuthorizationInput;
const ButtonContainer = styled.div`
  height: 46px;
`;
const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const InputLabel = styled.label`
  font-size: 12px;
  color: #737373;
`;
const CheckBoxLabel = styled.label`
  font-size: 12px;
  color: #737373;
  margin-left: 11px;
`;
