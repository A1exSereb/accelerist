import React from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { ButtonProps } from 'ui/types';

const ButtonUI: React.FC<ButtonProps> = ({
  content,
  rightChild,
  leftChild,
  wrapperCSS,
  disabled,
  containerCSS,
  buttonCSS,
  ...rest
}: ButtonProps) => {
  return (
    <Wrapper $CSS={wrapperCSS}>
      {leftChild && <div>{leftChild}</div>}
      <ButtonContainer $CSS={containerCSS}>
        <Button disabled={disabled} $CSS={buttonCSS} {...rest}>
          {content}
        </Button>
      </ButtonContainer>
      {rightChild && <div>{rightChild}</div>}
    </Wrapper>
  );
};
export default ButtonUI;
const Wrapper = styled('div')<{ $CSS?: FlattenSimpleInterpolation }>`
  ${(props) => (props.$CSS ? { ...props.$CSS } : {})}
`;

const Button = styled('button')<{ $CSS?: FlattenSimpleInterpolation }>`
  ${(props) => (props.$CSS ? { ...props.$CSS } : {})}
`;

const ButtonContainer = styled('div')<{ $CSS?: FlattenSimpleInterpolation }>`
  ${(props) => (props.$CSS ? { ...props.$CSS } : {})}
`;
