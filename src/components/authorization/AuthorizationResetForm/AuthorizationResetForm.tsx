import React from 'react';
import styled, { css } from 'styled-components';
import { Field, Form } from 'react-final-form';
import Button from 'ui/Button';
import TextInput from 'ui/TextInput';
import { useAppDispatch } from 'store/store';

interface AuthorizationResetFormProps {
  buttonPlaceholder: string;
  request: Function;
  emailEntered: boolean;
  setEmailEntered: React.Dispatch<React.SetStateAction<boolean>>;
}
const AuthorizationResetForm: React.FC<AuthorizationResetFormProps> = ({
  buttonPlaceholder,
  request,
  setEmailEntered,
}: AuthorizationResetFormProps) => {
  const dispatch = useAppDispatch();
  const onSubmit = (value: { email: string }) => {
    console.log(value.email);
    setEmailEntered(true);
    dispatch(request(value));
  };

  return (
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
        return errors;
      }}
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
          <Button
            buttonCSS={ButtonStyle}
            containerCSS={ButtonContainer}
            wrapperCSS={ButtonWrapper}
            content={buttonPlaceholder}
            type="submit"
          />
        </form>
      )}
    />
  );
};

export default AuthorizationResetForm;
const InputWrapper = css`
  box-sizing: border-box;
  margin-bottom: 15px;
`;
const ButtonWrapper = css`
  box-sizing: border-box;
  height: 46px;
  margin-top: 20px;
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
  @media (max-width: 375px) {
    margin-bottom: 16px;
  }
`;
