import React from 'react';
import styled, { css } from 'styled-components';
import { Field, Form } from 'react-final-form';
import Button from 'ui/Button';
import TextInput from 'ui/TextInput';
import { useAppDispatch } from 'store/store';
import Spinner from 'ui/Spinner';
import { useSelector } from 'react-redux';
import { authorizationLoading } from 'store/ducks/authorization/selectors';
import { AuthorizationButton } from 'styled/styled';

interface AuthorizationResetFormProps {
  buttonPlaceholder: string;
  request: Function;
  emailEntered: boolean;
  setEmailEntered: React.Dispatch<React.SetStateAction<boolean>>;
}
const AuthorizationResetForm: React.FC<AuthorizationResetFormProps> = ({
  buttonPlaceholder,
  request,
  emailEntered,
  setEmailEntered,
}: AuthorizationResetFormProps) => {
  const authLoading = useSelector(authorizationLoading);
  const dispatch = useAppDispatch();
  const onSubmit = (value: { email: string }) => {
    console.log(value.email);
    dispatch(request(value));
    setEmailEntered(true);
  };
  const required = (value: string) => (value ? undefined : 'Required');
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, pristine, values, form }) => (
        <form style={{ marginTop: 34 }} onSubmit={handleSubmit}>
          <FlexColumnContainer>
            <Field
              component={TextInput}
              wrapperCSS={!emailEntered ? InputWrapper : HidedInput}
              label="Email"
              name="email"
              error={required}
              type="text"
              placeholder="Email"
            />
          </FlexColumnContainer>
          <Button
            buttonCSS={AuthorizationButton}
            containerCSS={ButtonContainer}
            disabled={pristine}
            wrapperCSS={ButtonWrapper}
            content={authLoading ? buttonPlaceholder : Spinner}
            type="submit"
          />
        </form>
      )}
    />
  );
};

export default AuthorizationResetForm;
const HidedInput = css`
  box-sizing: border-box;
  display: none;
`;
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
