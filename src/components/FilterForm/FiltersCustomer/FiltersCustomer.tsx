import {
  ageOptions,
  ethnicityOptions,
  genderOptions,
  incomeOptions,
  relationsOptions,
} from 'constants/customerFilter';
import FiledMultiSelectWithCheckBoxes from 'components/fields/FieldMultiSelect/FieldMultiSelect';
import React from 'react';
import { Field } from 'react-final-form';
import styled from 'styled-components';
import RadioButtons from 'ui/RadioButtons/RadioButtons';

export const FiltersCustomer = () => {
  return (
    <>
      <Label>Customer Demographics</Label>
      <Row>
        <div>
          <Field name="gender" label="Gender" options={genderOptions} component={RadioButtons} />
        </div>
        <div>
          <Field
            name="relations"
            label="Relations"
            component={RadioButtons}
            options={relationsOptions}
          />
        </div>
      </Row>
      <Row>
        <Field
          name="income"
          label="Household Income"
          placeholder="Select.."
          component={FiledMultiSelectWithCheckBoxes}
          options={incomeOptions}
        />
        <Field
          name="ethnicity"
          label="Ethnicity"
          placeholder="Select.."
          component={FiledMultiSelectWithCheckBoxes}
          options={ethnicityOptions}
        />
      </Row>
      <Row>
        <Field
          name="ageRanges"
          label="Age"
          placeholder="Select.."
          component={FiledMultiSelectWithCheckBoxes}
          options={ageOptions}
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

/* const TextInputCss = css`
  box-sizing: border-box;
  height: 49px;
  border: 1px solid #e8e8e8;
  font-size: 16px;
`; */

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > div {
    width: calc(50% - 8px);
  }
`;
