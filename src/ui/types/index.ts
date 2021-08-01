import { HTMLAttributes, InputHTMLAttributes } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;

  leftChild?: React.ReactNode;
  rightChild?: React.ReactNode;

  wrapperCSS?: FlattenSimpleInterpolation;
  containerCSS?: FlattenSimpleInterpolation;
  inputCSS?: FlattenSimpleInterpolation;
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  content?: string | React.ReactNode;
  type?: 'button' | 'reset' | 'submit' | undefined;
  rightChild?: React.ReactNode;
  leftChild?: React.ReactNode;

  wrapperCSS?: FlattenSimpleInterpolation;
  containerCSS?: FlattenSimpleInterpolation;
  buttonCSS?: FlattenSimpleInterpolation;
}
