import Modal from 'components/Modal';
import FieldSingleSelect from 'components/fields/FieldSingleSelect.tsc/FieldSingleSelect';
import { SupportOptionsEnum } from 'pages/Main/types';
import React from 'react';
import { Field, Form } from 'react-final-form';
import styled, { css } from 'styled-components';
import { AuthorizationButton } from 'styled/styled';
import Button from 'ui/Button';
import TextArea from 'ui/TextArea';
interface SupportFormProps {
  onClose: Function;
}

export const SupportModal: React.FC<SupportFormProps> = ({ onClose }: SupportFormProps) => {
  const supportOptions = [
    { label: 'Profile Update Request', value: 'Profile Update Request' },
    { label: 'System Bug', value: 'System Bug' },
  ];
  const onSubmit = (value: { text: string; reason: SupportOptionsEnum }) => {
    console.log(value);
    onClose();
  };
  const required = (value: string) => (value ? undefined : 'Required');
  return (
    <Modal headerChild={<HeaderTitle>Write to Support</HeaderTitle>} onCloseBtnClick={onClose}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, pristine }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="reason"
              label="Reason"
              component={FieldSingleSelect}
              options={supportOptions}
            />
            <Field
              name="text"
              label="Text"
              validate={required}
              error="Required"
              wrapperCSS={InputWrapper}
              inputCSS={Input}
              component={TextArea}
            />
            <Button
              buttonCSS={AuthorizationButton}
              disabled={pristine}
              containerCSS={ButtonContainer}
              wrapperCSS={ButtonWrapper}
              content="Send"
              type="submit"
            />
          </form>
        )}
      />
    </Modal>
  );
};

const HeaderTitle = styled.h3`
  color: #122434;
  font-size: 24px;
  margin: 0;
`;

const InputWrapper = css`
  box-sizing: border-box;
  margin-bottom: 15px;
  margin-top: 15px;
`;
const Input = css`
  box-sizing: border-box;
  height: 90px;
  padding: 10px 16px;
  font-size: 16px;
`;
const ButtonWrapper = css`
  box-sizing: border-box;
  height: 36px;
  width: 367px;
`;
const ButtonContainer = css`
  box-sizing: border-box;
  height: 100%;
`;
