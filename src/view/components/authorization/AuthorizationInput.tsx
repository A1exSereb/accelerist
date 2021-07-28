import React, { useState } from 'react';
import styled from 'styled-components';
import { Field, Form } from 'react-final-form';
import { Link } from 'react-router-dom';
import hidePassword from 'assets/images/icons/hidepassword.svg';

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
  const [showPassword, setShowPassword] = useState(true);
  const required = (value: string) => (value ? undefined : 'Required');

  const onSubmit = (value: { email: string; password: string; remember?: boolean }) => {
    console.log(value.email);
    console.log(value.password);
  };

  const Error = ({ name }: { name: string }) => (
    <Field
      name={name}
      subscription={{ touched: true, error: true }}
      render={({ meta: { touched, error } }) =>
        touched && error ? <span className="error">{error}</span> : null
      }
    />
  );

  return (
    <Style>
      <Form
        onSubmit={onSubmit}
        initialValues={{ stooge: 'larry', employed: false }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form style={{ marginTop: 34 }} onSubmit={handleSubmit}>
            <FlexColumnContainer>
              <InputLabel>Email</InputLabel>
              <Error name="email" />
              <Field
                name="email"
                validate={required}
                component="input"
                type="text"
                placeholder="Email"
              />
            </FlexColumnContainer>
            <FlexColumnContainer>
              <InputLabel>Password</InputLabel>
              <Error name="password" />
              <div style={{ width: '100%', position: 'relative' }}>
                <Field
                  name="password"
                  validate={required}
                  component="input"
                  type={showPassword ? 'password' : 'text'}
                  placeholder="Password"
                />
                <PasswordImg src={hidePassword} onClick={() => setShowPassword(!showPassword)} />
              </div>
            </FlexColumnContainer>
            {showCheckBox && (
              <FlexRowContainer>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Field name="remember" component="input" type="checkbox" />
                  <CheckBoxLabel>Remember</CheckBoxLabel>
                </div>
                <Link className="reset" to="/reset">
                  Forgot password?
                </Link>
              </FlexRowContainer>
            )}
            {termsPrivacyShow && <label> Terms terms terms</label>}

            <ButtonContainer>
              <Button type="submit">{buttonPlaceholder}</Button>
            </ButtonContainer>
          </form>
        )}
      />
    </Style>
  );
};

export default AuthorizationInput;

const Style = styled.div`
  input {
    width: 100%;
    height: 36px;
    font-weight: 400;
    border-radius: 6px;
    border-width: 1px;
    box-sizing: border-box;
    padding: 10px;
  }
  .reset {
    color: #737373;
    font-size: 12px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  input[name='email'] {
    margin-bottom: 24px;
  }
  input[name='password'] {
    padding-right: 25px;
    box-sizing: border-box;
  }
  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    margin-left: 0;
  }
  .error {
    display: flex;
    color: #800;
    flex-flow: row nowrap;
    justify-content: center;
  }
`;
const PasswordImg = styled.img`
  position: absolute;
  top: 8px;
  right: 10px;
`;
const ButtonContainer = styled.div`
  height: 46px;
`;
const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Button = styled.button`
  height: 100%;
  width: 100%;
  background-color: #2baee0;
  border-radius: 6px;
  text-align: center;
  align-items: center;
  color: #fff;
  border-width: 0;
  cursor: pointer;
  margin-bottom: 32px;
  @media (max-width: 375px) {
    margin-bottom: 16px;
  }
`;
const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 61px;
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
