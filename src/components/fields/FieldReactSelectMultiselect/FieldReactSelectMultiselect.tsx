import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import styled from 'styled-components';
import ReactSelect from 'ui/ReactSelect';

interface FieldReactSelectProps extends FieldRenderProps<string, HTMLElement> {
  label: string;
}

const FieldReactSelect = ({ label, options, ...rest }: FieldReactSelectProps) => {
  return (
    <Field>
      {label && <Label>{label}</Label>}
      <ReactSelect options={options} {...rest} />
    </Field>
  );
};

export default FieldReactSelect;

const Label = styled.p`
  margin: 0;
  color: #737373;
  font-size: 12px;
`;

const Field = styled.div`
  margin-bottom: 24px;
  width: 100%;
  position: relative;
`;
