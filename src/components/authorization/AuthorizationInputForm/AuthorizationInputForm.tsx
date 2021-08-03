import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Field, Form } from 'react-final-form';
import { Link } from 'react-router-dom';
import hidePassword from 'assets/images/icons/hidepassword.svg';
import linkedIn from 'assets/images/icons/linkedInIcon.svg';
import Button from 'ui/Button';
import TextInput from 'ui/TextInput';
import { useAppDispatch } from 'store/store';
import { useSelector } from 'react-redux';
import { authorizationLoading } from 'store/ducks/authorization/selectors';
import Spinner from 'ui/Spinner';

interface AuthorizationInputFormProps {
  login?: boolean;
  buttonPlaceholder: string;
  signup?: boolean;
  reset?: boolean;
  request: Function;
}
const AuthorizationInputForm: React.FC<AuthorizationInputFormProps> = ({
  login = false,
  buttonPlaceholder,
  signup = false,
  reset = false,
  request,
}: AuthorizationInputFormProps) => {
  const [showPassword, setShowPassword] = useState(true);
  const authLoading = useSelector(authorizationLoading);
  /*   const required = (value: string) => (value ? undefined : 'Required');
   */ const dispatch = useAppDispatch();
  const onSubmit = (value: { email: string; password: string; remember: boolean }) => {
    console.log(value.email);
    console.log(value.password);
    console.log(value.remember);
    dispatch(request(value));
  };

  return (
    <Style>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors: {
            email?: string;
            password?: string;
          } = {};
          if (!values.email) {
            errors.email = 'Required';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          return errors;
        }}
        initialValues={{ remember: false }}
        render={({ handleSubmit }) => (
          <form style={{ marginTop: 34 }} onSubmit={handleSubmit}>
            <FlexColumnContainer>
              <Field
                component={TextInput}
                wrapperCSS={InputWrapper}
                label="Email"
                name="email"
                type="text"
                placeholder="Email"
              />
            </FlexColumnContainer>
            <FlexColumnContainer>
              <div style={{ width: '100%', position: 'relative' }}>
                <Field
                  name="password"
                  component={TextInput}
                  inputCSS={PasswordInput}
                  label="Password"
                  rightChild={
                    <PasswordImg
                      src={hidePassword}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  }
                  type={showPassword ? 'password' : 'text'}
                  placeholder="Password"
                />
                <PasswordImg src={hidePassword} onClick={() => setShowPassword(!showPassword)} />
              </div>
            </FlexColumnContainer>
            {login && (
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
            {signup && (
              <TermsOfPrivacy>
                I agree that by clicking <span>“Registration”</span> I accept the{' '}
                <Link to="/login">Terms Of Service</Link> and{' '}
                <Link to="/login">Privacy Policy</Link>
              </TermsOfPrivacy>
            )}

            <Button
              buttonCSS={ButtonStyle}
              containerCSS={ButtonContainer}
              wrapperCSS={ButtonWrapper}
              content={!authLoading ? buttonPlaceholder : Spinner}
              type="submit"
            />
          </form>
        )}
      />
      <Footer>
        <div>or continue with</div>
        <FooterImg src={linkedIn} />
      </Footer>
    </Style>
  );
};

export default AuthorizationInputForm;
const Footer = styled.div`
  align-items: center;
  text-align: center;
  font-size: 12px;
  color: #737373;
  margin-top: 32px;
`;
const FooterImg = styled.img`
  margin-top: 20px;
`;
const PasswordInput = css`
  box-sizing: border-box;
  padding-right: 30px;
`;
const InputWrapper = css`
  box-sizing: border-box;
  margin-bottom: 15px;
`;
const Style = styled.div`
  .reset {
    color: #737373;
    font-size: 12px;
    text-decoration: none;
    &:hover {
      color: #000;
    }
  }
`;
const TermsOfPrivacy = styled.div`
  margin-top: 40px;
  margin-bottom: 16px;
  color: #737373;
  font-size: 12px;
  font-weight: 400;
  span {
    color: #000;
    font-weight: 600;
  }
  a {
    color: #000;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const PasswordImg = styled.img`
  position: absolute;
  top: 22px;
  right: 10px;
`;
const ButtonWrapper = css`
  box-sizing: border-box;
  height: 46px;
`;
const ButtonContainer = css`
  box-sizing: border-box;
  height: 100%;
`;
const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ButtonStyle = css`
  box-sizing: border-box;
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
  :hover {
    background-color: #51c2ee;
  }
  :focus {
    background-color: #1da7dc;
  }
  :disabled {
    background-color: #ceedf9;
    color: #2baee0;
    cursor: not-allowed;
  }
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
  margin-bottom: 31px;
`;
const CheckBoxLabel = styled.label`
  font-size: 12px;
  color: #737373;
  margin-left: 11px;
`;
