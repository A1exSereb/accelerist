import React, { useCallback } from 'react';
import { FieldRenderProps } from 'react-final-form';
import styled from 'styled-components';
import SingleSelect from 'ui/SingleSelect/SingleSelect';
import { SingleSelectProps } from 'ui/types';

interface FieldSelectProps
  extends SingleSelectProps,
    FieldRenderProps<string | number | { value: string | number } | null> {
  objectField: boolean;
}

const FieldSingleSelect = ({
  input,
  label,
  meta,
  objectField = false,
  ...selectProps
}: FieldSelectProps) => {
  const handleClick = useCallback(
    (valueType) => {
      if (!valueType) {
        return input.onChange(null);
      }
      return input.onChange(objectField ? valueType : valueType.value);
    },
    [input]
  );

  const val = typeof input.value == 'object' ? (input.value as any).value : input.value;

  return (
    <Field>
      {label && <Label>{label}</Label>}
      <SingleSelect {...selectProps} value={val} handleSelect={handleClick} />
    </Field>
  );
};

export default FieldSingleSelect;

const Field = styled.div`
  margin-bottom: 24px;
  width: 100%;
  position: relative;
`;

const Label = styled.label`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  margin-bottom: 4px;
`;
