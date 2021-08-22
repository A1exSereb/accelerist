import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { SelectorProps } from 'ui/types';

const Selector: React.FC<FieldRenderProps<string, HTMLElement>> = ({
  label,
  input,
  meta,
  containerCSS,
  inputCSS,
  ...rest
}: SelectorProps) => {
  return (
    <Container $CSS={containerCSS}>
      {label && <LabelContainer>{label}</LabelContainer>}
      <Select $CSS={inputCSS} {...input} {...meta} {...rest} />
    </Container>
  );
};

export default Selector;

const LabelContainer = styled.label`
  font-size: 12px;
  color: #737373;
  align-self: flex-start;
`;

const Container = styled('div')<{ $CSS?: FlattenSimpleInterpolation }>`
  width: 100%;
  ${(props) => (props.$CSS ? { ...props.$CSS } : {})}
`;

const Select = styled('select')<{ $CSS?: FlattenSimpleInterpolation }>`
  width: 100%;
  width: 100%;
  height: 36px;
  font-weight: 400;
  border-radius: 6px;
  border-width: 1px;
  box-sizing: border-box;
  padding: 5px;
  &li :hover {
    cursor: pointer;
    background: rgb(233, 249, 255);
  }
  ${(props) => (props.$CSS ? { ...props.$CSS } : {})}
`;
