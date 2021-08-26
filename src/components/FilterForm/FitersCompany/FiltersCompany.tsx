import { csrFocus, geoLoc, scopeOptions } from 'constants/companyFilterOptions';
import { goalAlignmentOptions } from 'constants/goalsAllignment';
import FieldMoneyRangeSlider from 'fields/FieldMoneySlider/FieldMoneySlider';
import FiledMultiSelectWithCheckBoxes from 'fields/FieldMultiSelect/FieldMultiSelect';
import FieldSingleSelect from 'fields/FieldSingleSelect.tsc/FieldSingleSelect';
import React, { useMemo } from 'react';
import { Field } from 'react-final-form';
import styled, { css } from 'styled-components';
import TextInput from 'ui/TextInput';
import { formatValueEnum } from 'ui/types';

export const FiltersCompany = () => {
  const goalOptions = useMemo(
    () =>
      Object.values(goalAlignmentOptions).map(({ value, title }) => ({
        value,
        label: title,
      })),
    []
  );
  return (
    <>
      <Label>Company</Label>
      <Row>
        <Field
          name="industry"
          placeholder="Write.."
          label="Industry"
          inputCSS={TextInputCss}
          component={TextInput}
        />
        <Field
          name="location"
          label="Geographic Location"
          component={FiledMultiSelectWithCheckBoxes}
          options={geoLoc}
          placeholder={'Select'}
          disableSearch={false}
          formatValue={formatValueEnum.BASE_ARRAY}
        />
      </Row>
      <Row>
        <Field
          name="affinities"
          label="Scope"
          placeholder="Select.."
          component={FieldSingleSelect}
          options={scopeOptions}
        />
        <Field
          name="sdgGoals"
          label="SDG Goals"
          component={FiledMultiSelectWithCheckBoxes}
          options={goalOptions}
          placeholder={'Select..'}
          formatValue={formatValueEnum.BASE_ARRAY}
        />
      </Row>
      <Row>
        <Field
          name="csrFocusIds"
          label="CDR Focus"
          placeholder={'Select..'}
          component={FiledMultiSelectWithCheckBoxes}
          formatValue={formatValueEnum.BASE_ARRAY}
          options={csrFocus}
        />
        <Field
          name="totalAnnualContributors"
          label="Total Annual Contributions"
          component={FieldSingleSelect}
          options={goalOptions}
          placeholder="Select.."
        />
      </Row>
      <Row>
        <Field
          name="moneySlider"
          label="Revenue"
          initialValue={[1, 25]}
          component={FieldMoneyRangeSlider}
        />
        <div></div>
      </Row>
    </>
  );
};

const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
  color: #122434;
  margin-bottom: 16px;
`;

const TextInputCss = css`
  box-sizing: border-box;
  height: 49px;
  border: 1px solid #e8e8e8;
  font-size: 16px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > div {
    width: calc(50% - 8px);
  }
`;
