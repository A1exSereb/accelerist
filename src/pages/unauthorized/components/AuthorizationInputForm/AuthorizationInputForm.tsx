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
import { AuthorizationButton } from 'styled/styled';
import { Loading } from 'store/types/StoreSlice';

interface AuthorizationInputFormProps {
  login?: boolean;
  buttonPlaceholder: string;
  signup?: boolean;
  request: Function;
}
const AuthorizationInputForm: React.FC<AuthorizationInputFormProps> = ({
  login = false,
  buttonPlaceholder,
  signup = false,
  request,
}: AuthorizationInputFormProps) => {
  const [showPassword, setShowPassword] = useState(true);
  const authLoading = useSelector(authorizationLoading);
  const required = (value: string) => (value ? undefined : 'Required');
  const dispatch = useAppDispatch();
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
        initialValues={{ remember: false }}
        render={({ handleSubmit, pristine, values }) => (
          <form style={{ marginTop: 34 }} onSubmit={handleSubmit}>
            <FlexColumnContainer>
              <Field
                component={TextInput}
                wrapperCSS={InputWrapper}
                label="Email"
                name="email"
                type="text"
                error="Required"
                validate={required}
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
                  validate={required}
                  error="Required"
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
              buttonCSS={AuthorizationButton}
              containerCSS={ButtonContainer}
              wrapperCSS={ButtonWrapper}
              disabled={pristine}
              content={authLoading === Loading.pending ? Spinner : buttonPlaceholder}
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
  top: 27px;
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
