import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import styled, { CSSProp } from 'styled-components';

interface BaseProps {
  labelCss?: CSSProp;
  label?: string;
}

type Props = BaseProps & FieldRenderProps<string | number | boolean | number[] | string[]>;

const FieldSection = ({ label, children, labelCss }: Props) => {
  return (
    <Field>
      {label && <Label css={labelCss}>{label}</Label>}
      {children}
    </Field>
  );
};

export default FieldSection;

const Field = styled.div`
  margin-bottom: 24px;
  width: 100%;
  position: relative;
`;

const Label = styled.label<{ css?: CSSProp }>`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  margin-bottom: 4px;

  ${({ css }) => css}
`;
