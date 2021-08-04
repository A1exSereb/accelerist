import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { TextInputProps } from 'ui/types';

const TextInput: React.FC<FieldRenderProps<string, HTMLInputElement>> = ({
  label,
  error,
  leftChild,
  rightChild,
  wrapperCSS,
  containerCSS,
  inputCSS,
  meta,
  input,
  ...rest
}: TextInputProps) => {
  return (
    <Wrapper $CSS={wrapperCSS}>
      <Container $CSS={containerCSS}>
        {label && <LabelContainer>{label}</LabelContainer>}
        <div>
          {leftChild && <div>{leftChild}</div>}
          <Input {...input} {...rest} $CSS={inputCSS} />
          {rightChild && <div>{rightChild}</div>}
        </div>
        {meta.touched && meta.error && <ErrorContainer>{error}</ErrorContainer>}
      </Container>
    </Wrapper>
  );
};
export default TextInput;

const LabelContainer = styled.div`
  font-size: 12px;
  color: #737373;
  align-self: flex-start;
`;
const ErrorContainer = styled.div`
  font-size: 12px;
  color: #691616;
`;
/* const Error = styled.div``;
 */ const Wrapper = styled('div')<{ $CSS?: FlattenSimpleInterpolation }>`
  width: 100%;
  ${(props) => (props.$CSS ? { ...props.$CSS } : {})}
`;

const Container = styled('div')<{ $CSS?: FlattenSimpleInterpolation }>`
  text-align: left;
  width: 100%;
  ${(props) => (props.$CSS ? { ...props.$CSS } : {})}
`;

const Input = styled('input')<{ $CSS?: FlattenSimpleInterpolation }>`
  width: 100%;
  height: 36px;
  font-weight: 400;
  border-radius: 6px;
  border-width: 1px;
  box-sizing: border-box;
  padding: 10px;
  ${(props) => (props.$CSS ? { ...props.$CSS } : {})}
`;
