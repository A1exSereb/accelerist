import React, { useMemo, useState } from 'react';
import ReactMultiSelect from 'react-multi-select-component';

import {
  Option,
  ISelectProps as InjectedProps,
} from 'react-multi-select-component/dist/lib/interfaces';
import styled from 'styled-components';
import { BaseMultiSelectProps as BaseProps, formatValueEnum } from '../types';
import SelectWithCheckbox from 'ui/SelectWithChackboxes/SelectWithCheckboxes';

type Props = BaseProps & Partial<InjectedProps>;

const MultiSelectWithCheckBoxes: React.FC<Props> = ({
  labelledBy = 'Select..',
  options = [],
  values = [],
  changeHandler,
  disableSearch = true,
  hasSelectAll = false,
  visibleNumberToTooltip = 4,
  formatValue,
  disabled = false,
  ...rest
}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const initialOptions =
    formatValue === formatValueEnum.BASE_ARRAY
      ? options.filter(({ value }) => values.includes(value))
      : values;

  const handleChange = (options: Option[]) => {
    if (formatValue === formatValueEnum.BASE_ARRAY) {
      return changeHandler?.(options.map(({ value }) => value));
    }
    changeHandler?.(options);
  };
  const selectedInput = useMemo(
    () =>
      (formatValue === formatValueEnum.BASE_ARRAY
        ? options.filter(({ value }) => values.includes(value)).map(({ label }) => label)
        : values.map(({ label }) => label)
      ).join(', '),
    [values]
  );

  const customValueRenderer = (selected: Option[], _: Option[]) => {
    return selected.length ? selectedInput : labelledBy;
  };

  return (
    <MTooltip>
      {values.length >= visibleNumberToTooltip && (
        <>
          <MTooltipContent className="p-tooltip-content">{selectedInput}</MTooltipContent>
          <MTooltipArrow className="p-tooltip-arrow" />
        </>
      )}

      <ReactMultiSelectStyled
        $isMenuOpen={isMenuOpen}
        options={options}
        value={initialOptions}
        onChange={handleChange}
        labelledBy={labelledBy}
        hasSelectAll={hasSelectAll}
        disableSearch={disableSearch}
        valueRenderer={customValueRenderer}
        disabled={disabled}
        onMenuToggle={setIsMenuOpen}
        ItemRenderer={SelectWithCheckbox}
        {...rest}
      />
    </MTooltip>
  );
};

export default MultiSelectWithCheckBoxes;

const MTooltip = styled.div`
  position: relative;

  &:hover .p-tooltip-arrow,
  &:hover .p-tooltip-content {
    visibility: visible;
  }
`;

const MTooltipArrow = styled.div`
  visibility: hidden;
  border: 8px solid transparent;
  border-top-color: #e8e8e8;
  bottom: 100%;
  left: 8%;
  position: absolute;
  transform: translate(-8%, 8px);
  height: 0;
  width: 0;
  z-index: 10;
`;

const MTooltipContent = styled.div`
  visibility: hidden;
  padding: 16px 6px 16px 12px;
  bottom: 100%;
  position: absolute;
  transform: translate(0, -8px);
  background: #e8e8e8;
  border-radius: 8px;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  box-shadow: 0px 20px 20px rgba(40, 31, 61, 0.02);
  z-index: 10;
`;

const ReactMultiSelectStyled = styled(ReactMultiSelect)<{
  $isMenuOpen: boolean;
  disabled?: boolean;
}>`
  --rmsc-main: #e8e8e8;
  --rmsc-hover: #e9f9ff;
  --rmsc-selected: none;
  --rmsc-border: #e8e8e8;
  --rmsc-gray: #122434;
  --rmsc-bg: #fff;
  --rmsc-p: 16px;
  --rmsc-radius: 6px;
  --rmsc-h: 46px;
  cursor: pointer;

  & > div {
    &:focus-within {
      box-shadow: none;
    }

    border-radius: var(--rmsc-radius) var(--rmsc-radius)
      ${({ $isMenuOpen }) => (!$isMenuOpen ? 'var(--rmsc-radius) var(--rmsc-radius)' : '0 0')};
    border-right: 1px solid var(--rmsc-border);
    border-left: 1px solid var(--rmsc-border);
    border-top: 1px solid var(--rmsc-border);
    border-bottom: ${({ $isMenuOpen }) =>
      !$isMenuOpen ? '1px solid var(--rmsc-border)' : '1px solid transparent'};

    ${({ disabled }) =>
      disabled &&
      `
        background: #F9F9F9;
        border-color: #F9F9F9;
        cursor: no-drop;
        border-color: transparent;
    `}
  }

  & .dropdown-heading-value {
    .gray {
      color: #737373;
    }

    span {
      font-weight: normal;
      line-height: 155%;

      ${({ disabled }) => disabled && `color: var(--gray);`}
    }
  }

  & .dropdown-heading-dropdown-arrow {
    ${({ disabled }) => disabled && `color: var(--gray);`}
  }

  & .dropdown-content {
    padding-top: 0;

    .panel-content {
      border-radius: 0 0 var(--rmsc-radius) var(--rmsc-radius);
      box-shadow: 0 0 0 1px var(--rmsc-border), 0 0 1px var(--rmsc-border);
      clip-path: inset(0px -1px -1px -1px);
      max-height: 181px;
    }
  }

  & .select-item {
    padding: 0;
  }
`;
