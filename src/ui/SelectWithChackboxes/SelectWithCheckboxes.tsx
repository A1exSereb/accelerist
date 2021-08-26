import React from 'react';
import styled from 'styled-components';
import CheckboxUI from 'ui/CheckBox';
import { SelectWithCheckboxProps } from 'ui/types';

const SelectWithCheckbox: React.FC<SelectWithCheckboxProps> = ({
  onClick,
  checked,
  disabled,
  option,
}: SelectWithCheckboxProps) => {
  return (
    <Root onClick={onClick} className={`item-renderer ${disabled && 'disabled'}`}>
      <Item>{option.label}</Item>

      <Checkbox check={checked} disabled={disabled} />
    </Root>
  );
};

export default SelectWithCheckbox;

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--rmsc-p);
`;

const Item = styled.span`
  display: 'inline-block';
  font-weight: normal;
  font-size: 16px;
  line-height: 155%;
  color: var(--black);
`;

const Checkbox = styled(CheckboxUI)`
  margin-right: 2px;
`;
