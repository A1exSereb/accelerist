import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import Select, { components, IndicatorProps, ValueType } from 'react-select';
import styled from 'styled-components';
import { SelectOption } from 'ui/types';
import Arrow from 'assets/images/icons/arrow-down.svg';

const ReactSelect = ({ input, options, ...rest }: FieldRenderProps<string, HTMLElement>) => {
  const handleChange = (option: ValueType<SelectOption, false>) => {
    input.onChange(option?.value);
  };
  const DropdownIndicator = (props: IndicatorProps<SelectOption, false>) => {
    return (
      <components.DropdownIndicator {...props}>
        <DropdownArrow src={Arrow} />
      </components.DropdownIndicator>
    );
  };
  return (
    <Select
      {...input}
      {...rest}
      onChange={handleChange}
      options={options}
      components={{ IndicatorSeparator: () => null, DropdownIndicator }}
      value={options ? options.find((option: SelectOption) => option.value === input.value) : ''}
    />
  );
};

export default ReactSelect;

const DropdownArrow = styled.img``;
