import React, { useCallback } from 'react';
import { ReactSVG } from 'react-svg';
import styled, { CSSObject, CSSProp } from 'styled-components';
import Icon from 'assets/images/icons/checkbox.svg';

interface CheckBoxProps {
  handleClick?: (label?: string) => void;
  label?: string;
  check?: boolean;
  disabled?: boolean;
  className?: string;
  labelCss?: CSSObject;
}

const CheckboxUI: React.FC<CheckBoxProps> = ({
  label,
  handleClick,
  check = false,
  disabled,
  className,
  labelCss,
}: CheckBoxProps) => {
  const handleCheckboxClick = useCallback(() => {
    if (!disabled && handleClick) handleClick(label);
  }, [disabled, handleClick, label]);

  return (
    <Root disabled={disabled} onClick={handleCheckboxClick} className={className}>
      <Checkbox check={check} disabled={disabled}>
        {check && <ReactSVG src={Icon} />}
      </Checkbox>
      {label && (
        <Label disabled={disabled} css={labelCss}>
          {label}{' '}
        </Label>
      )}
    </Root>
  );
};

export default CheckboxUI;

const Root = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  ${({ disabled }) => (disabled ? `cursor: no-drop;` : 'cursor: pointer;')}
`;

const Checkbox = styled.div<{ check?: boolean; disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  box-sizing: border-box;
  border: 1px solid #bfbfbf;

  ${({ check }) => check && ` background: var(--secondaryBlue);border-color:transparent;`}

  ${({ check, disabled }) =>
    ((disabled && check) || disabled) &&
    `
      background: #F0F0F0;
      border-color:transparent;
      & > svg path{
        fill: var(--gray);
      }
    `}
`;

const Label = styled.label<{ disabled?: boolean; css?: CSSProp }>`
  font-size: 16px;
  line-height: 155%;
  margin-left: 10px;
  color: var(${({ disabled }) => (disabled ? '--gray' : '--black')});
  cursor: ${({ disabled }) => (disabled ? 'no-drop' : 'pointer')};
  ${({ css }) => css}
`;
