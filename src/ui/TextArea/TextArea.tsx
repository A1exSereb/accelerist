import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { TextAreaProps } from 'ui/types';

const TextArea: React.FC<FieldRenderProps<string, HTMLElement>> = ({
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
}: TextAreaProps) => {
  return (
    <Wrapper $CSS={wrapperCSS}>
      <Container $CSS={containerCSS}>
        {label && <LabelContainer>{label}</LabelContainer>}
        <div>
          {leftChild && <div>{leftChild}</div>}
          <Input
            $error={meta.touched && meta.error ? true : false}
            {...input}
            {...rest}
            $CSS={inputCSS}
            wrap="soft"
          />
          {rightChild && <div>{rightChild}</div>}
        </div>
        {meta.touched && meta.error && <ErrorContainer>{error}</ErrorContainer>}
      </Container>
    </Wrapper>
  );
};
export default TextArea;

const LabelContainer = styled.label`
  font-size: 12px;
  color: #737373;
  align-self: flex-start;
`;
const ErrorContainer = styled.div`
  font-size: 12px;
  color: #691616;
`;
const Wrapper = styled('div')<{ $CSS?: FlattenSimpleInterpolation }>`
  width: 100%;
  ${(props) => (props.$CSS ? { ...props.$CSS } : {})}
`;

const Container = styled('div')<{ $CSS?: FlattenSimpleInterpolation }>`
  text-align: left;
  width: 100%;
  ${(props) => (props.$CSS ? { ...props.$CSS } : {})}
`;

const Input = styled('textarea')<{ $CSS?: FlattenSimpleInterpolation; $error: boolean }>`
  width: 100%;
  height: 36px;
  font-weight: 400;
  border-radius: 6px;
  border-width: 1px;
  box-sizing: border-box;
  padding: 10px;
  resize: none;
  background-color: ${(props) => props.$error && '#FFF2F2'};
  border-color: ${(props) => props.$error && '#F05658'};
  ${(props) => (props.$CSS ? { ...props.$CSS } : {})}
`;
