import React, { useCallback } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { ISelectProps } from 'react-multi-select-component/dist/lib/interfaces';
import FieldSection from 'components/fields/FieldSection/FieldSection';
import MultiSelectWithCheckBoxes from 'ui/MultiSelectWithCheckbox/MultiSelectWithCheckbox';
import { BaseMultiSelectProps } from 'ui/types';

type Props = BaseMultiSelectProps & ISelectProps & FieldRenderProps<any>;

const FiledMultiSelectWithCheckBoxes = ({ input, label, meta, limit, ...selectProps }: Props) => {
  const handleClick = useCallback(
    (valueType) => {
      input.onChange(valueType);
    },
    [input]
  );

  const disabled = !!(limit && input.value.length > 0 && limit === input.value.length);

  return (
    <FieldSection input={input} meta={meta} label={label}>
      <MultiSelectWithCheckBoxes
        values={input.value || []}
        changeHandler={handleClick}
        disabled={disabled}
        {...selectProps}
      />
    </FieldSection>
  );
};

export default FiledMultiSelectWithCheckBoxes;
