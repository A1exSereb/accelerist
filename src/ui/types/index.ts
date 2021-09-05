/* eslint-disable no-unused-vars */
import { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { Option as MultiSelectOption } from 'react-multi-select-component/dist/lib/interfaces';
import { FieldInputProps, FieldMetaState } from 'react-final-form';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  input: FieldInputProps<string, HTMLInputElement>;
  meta: FieldMetaState<string>;
  leftChild?: React.ReactNode;
  rightChild?: React.ReactNode;

  wrapperCSS?: FlattenSimpleInterpolation;
  containerCSS?: FlattenSimpleInterpolation;
  inputCSS?: FlattenSimpleInterpolation;
}

export interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  input: FieldInputProps<string, HTMLTextAreaElement>;
  meta: FieldMetaState<string>;
  leftChild?: React.ReactNode;
  rightChild?: React.ReactNode;

  wrapperCSS?: FlattenSimpleInterpolation;
  containerCSS?: FlattenSimpleInterpolation;
  inputCSS?: FlattenSimpleInterpolation;
}

export interface SelectWithCheckboxProps extends InputHTMLAttributes<HTMLSelectElement> {
  checked: boolean;
  option: MultiSelectOption;
  disabled?: boolean;
  input: FieldInputProps<string[], HTMLSelectElement>;
  meta: FieldMetaState<string[]>;
  onClick: any;
}
export interface SelectOption {
  value: string | number;
  label: string;
}
export interface SingleSelectProps {
  handleSelect: (value: SelectOption | null) => void;
  options: SelectOption[];
  children?: Node;
  value?: string | null | number;
  placeholder: string;
  disabled?: boolean;
  isClearable?: boolean;
}
export interface SelectorProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  input?: FieldInputProps<string[], HTMLSelectElement>;
  options?: string[];
  meta?: FieldMetaState<string[]>;
  containerCSS?: FlattenSimpleInterpolation;
  inputCSS?: FlattenSimpleInterpolation;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content?: string | React.ReactNode;
  disabled?: boolean;
  rightChild?: React.ReactNode;
  leftChild?: React.ReactNode;

  wrapperCSS?: FlattenSimpleInterpolation;
  containerCSS?: FlattenSimpleInterpolation;
  buttonCSS?: FlattenSimpleInterpolation;
}

export enum formatValueEnum {
  OPTION_ARRAY,
  BASE_ARRAY,
}

export interface BaseMultiSelectProps {
  values?: MultiSelectOption[];
  changeHandler?: (values: any) => void;
  visibleNumberToTooltip?: number;
  formatValue?: formatValueEnum;
  limit?: number;
  disabled?: boolean;
}

export interface RangeSliderProps {
  defaultValues?: number[];
}
