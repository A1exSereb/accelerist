/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { TextInputProps } from 'ui/types';

/* const Error = ({ name }: { name: string }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span className="error">{error}</span> : null
    }
  />
); */
const TextInput: React.FC<FieldRenderProps<TextInputProps, HTMLElement>> = ({
  label,
  error,
  leftChild,
  rightChild,
  wrapperCSS,
  containerCSS,
  inputCSS,
  ...rest
}: TextInputProps) => {
  return (
    <Wrapper $CSS={wrapperCSS}>
      <Container $CSS={containerCSS}>
        {label && <LabelContainer>{label}</LabelContainer>}
        <div>
          {leftChild && <div>{leftChild}</div>}
          <Input {...rest} $CSS={inputCSS} />
          {rightChild && <div>{rightChild}</div>}
        </div>
        {error && <Error>{error}</Error>}
      </Container>
    </Wrapper>
  );
};
export default TextInput;

const LabelContainer = styled.div`
  font-size: 12px;
  color: #737373;
`;
const Error = styled.div``;
const Wrapper = styled('div')<{ $CSS?: FlattenSimpleInterpolation }>`
  ${(props) => (props.$CSS ? { ...props.$CSS } : {})}
`;

const Container = styled('div')<{ $CSS?: FlattenSimpleInterpolation }>`
  ${(props) => (props.$CSS ? { ...props.$CSS } : {})}
`;

const Input = styled('input')<{ $CSS?: FlattenSimpleInterpolation }>`
  ${(props) => (props.$CSS ? { ...props.$CSS } : {})}
`;
