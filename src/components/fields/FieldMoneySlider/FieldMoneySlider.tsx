import React from 'react';
import { css } from 'styled-components';
import { FieldRenderProps } from 'react-final-form';

import { IProps } from 'react-range/lib/types';
import FieldSection from 'components/fields/FieldSection/FieldSection';
import MoneyRangeSlider from 'ui/MoneyRangeSlider/MoneyRangeSlider';

type Props = Partial<IProps> & FieldRenderProps<number[]>;

const labelCss = css`
  margin-bottom: 12px;
  display: block;
`;

const FieldMoneyRangeSlider: React.FC<Props> = ({ input, label, meta, ...selectProps }: Props) => {
  return (
    <FieldSection labelCss={labelCss} input={input} meta={meta} label={label}>
      <MoneyRangeSlider {...selectProps} values={input.value} onChange={input.onChange} />
    </FieldSection>
  );
};

export default FieldMoneyRangeSlider;
