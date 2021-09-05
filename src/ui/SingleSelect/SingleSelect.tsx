import React, { useCallback } from 'react';
import { ReactSVG } from 'react-svg';
import ArrowDownIcon from 'assets/images/icons/arrow-down.svg';
import CloseIcon from 'assets/images/icons/x.svg';
import { SingleSelectProps, SelectOption } from '../types';
import styled from 'styled-components';
import useDropdown from 'hooks/useDropdown';

const SingleSelect: React.FC<SingleSelectProps> = ({
  options,
  placeholder,
  value,
  handleSelect,
  disabled = false,
  isClearable = true,
}: SingleSelectProps) => {
  const [containerRef, isOpen, open, close] = useDropdown();

  const selectedOption =
    options.find((option: SelectOption) => option.value === value) || ({} as typeof options[0]);

  const { label } = selectedOption;

  const addItem = (item: SelectOption) => {
    handleSelect(item);
    close();
  };

  const toggleDropdown = useCallback(() => {
    if (disabled) return;

    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [disabled, isOpen, open, close]);

  return (
    <Root className="uiSelect__wrapper" ref={containerRef}>
      <Trigger onClick={toggleDropdown} open={isOpen} disabled={disabled}>
        {label ? (
          <Value disabled={disabled}>{label}</Value>
        ) : (
          <Placeholder disabled={disabled}>{placeholder}</Placeholder>
        )}

        <ArrowWrapper>
          {isClearable && value && (
            <Clear
              src={CloseIcon}
              onClick={(e: Event) => {
                e.stopPropagation();
                handleSelect(null);
              }}
            />
          )}
          <Arrow src={ArrowDownIcon} open={isOpen} disabled={disabled} />
        </ArrowWrapper>
      </Trigger>
      {isOpen && (
        <ListWrapper>
          {options && options.length > 0 ? (
            <ul style={{ paddingLeft: 0 }}>
              {options
                .filter((item) => !(item.value === selectedOption.value))
                .map((item, index) => {
                  const { label: optionLabel } = item;
                  return (
                    <Item key={index} onClick={() => addItem(item)}>
                      {optionLabel}
                    </Item>
                  );
                })}
            </ul>
          ) : (
            <p className="uiSelect__empty">Empty list</p>
          )}
        </ListWrapper>
      )}
    </Root>
  );
};

export default SingleSelect;

const Root = styled.div`
  width: 100%;
  position: relative;

  .uiSelect__empty {
    padding: 20px 10px;
    text-align: center;
  }
`;

const Trigger = styled.div<{ open?: boolean; disabled?: boolean }>`
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 49px;

  ${({ open }) => open && `border-radius: 8px 8px 0 0; border-bottom: 1px solid transparent;`}
  ${({ disabled }) => disabled && `background: #F9F9F9; border-color: #F9F9F9; cursor: no-drop;`}
`;

const Arrow = styled(ReactSVG)<{ open?: boolean; disabled?: boolean }>`
  transition: all 0.2s ease;
  ${({ open }) => open && `transform: rotate(-180deg);`}
  ${({ disabled }) => disabled && `svg path { stroke: #BFBFBF }`}
`;

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Clear = styled(ReactSVG)`
  margin: 0 5px;
  & svg {
    path {
      stroke: #122434;
    }
  }
`;

const Value = styled.p<{ disabled?: boolean }>`
  font-size: 16px;
  line-height: 150%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ disabled }) => disabled && `color: #BFBFBF;`}
`;

const Placeholder = styled(Value)<{ disabled?: boolean }>`
  color: #737373;
  ${({ disabled }) => disabled && `color: #BFBFBF;`}
`;

const ListWrapper = styled.div`
  max-width: 100%;
  max-height: 180px;
  background: #ffffff;
  position: absolute;
  z-index: 9;
  width: 100%;
  top: 45px;
  left: 0;
  overflow-y: auto;
  border: 1px solid #e8e8e8;
  border-top: 0;
  border-radius: 0px 0px 8px 8px;
  list-style: none;
`;

const Item = styled.li`
  font-size: 16px;
  line-height: 150%;
  padding: 10px 16px;
  transition: all 0.2s ease;
  list-style: none;
  &:hover {
    cursor: pointer;
    background: #e9f9ff;
  }
`;
