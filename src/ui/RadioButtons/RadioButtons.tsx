import React, { useEffect, useState } from 'react';
import { FieldRenderProps } from 'react-final-form';
import styled from 'styled-components';

interface SelectOption {
  label: string;
  value: string;
}

interface RadioButtonsProps {
  options: SelectOption[];
  label?: string;
}

type Props = RadioButtonsProps & FieldRenderProps<string>;

const RadioButtons = ({ options, input, label }: Props) => {
  const [checkedIndex, setCheckedIndex] = useState(0);

  useEffect(() => {
    const currentIndex = options.findIndex((option) => option.value === input.value);

    if (currentIndex >= 0) {
      setCheckedIndex(currentIndex);
    }
  }, []);

  const handleClick = (nexValue: string | undefined | number, index: number) => {
    input.onChange?.(nexValue);
    setCheckedIndex(index);
  };

  return (
    <>
      <Label>{label}</Label>
      <List>
        {options.map((option, index) => (
          <Item key={index}>
            <Button
              isActive={index === checkedIndex}
              onClick={() => handleClick(option.value, index)}
              type="button"
            >
              {option.label}
            </Button>
          </Item>
        ))}
      </List>
    </>
  );
};

export default RadioButtons;

const Label = styled.p`
  margin: 0;
  color: #737373;
  font-size: 12px;
`;

const List = styled.ul`
  background: #f8f8f8;
  border-radius: 6px;
  width: 100%;
  display: flex;
  margin: 0;
  padding: 1px 3px;
`;

const Item = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.button<{ isActive: boolean }>`
  height: 36px;
  width: 100%;
  border-radius: 6px;
  border: none;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: var(--darkGray);

  ${({ isActive }) =>
    isActive &&
    `background: #D4F3FF;
     border-radius: 6px;
     color: var(--black);
     transition: 0.3s ease-in;
  `}
`;
