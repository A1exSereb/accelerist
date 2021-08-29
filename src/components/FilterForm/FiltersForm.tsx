import React, { useEffect } from 'react';
import { Field, Form } from 'react-final-form';
import { setFilters } from 'store/ducks/companies/slice';
import { useAppDispatch } from 'store/store';
import styled, { css } from 'styled-components';
import { Filters } from 'types';
import ButtonUI from 'ui/Button';
import RadioButtons from 'ui/RadioButtons/RadioButtons';
import { FiltersCustomer } from './FiltersCustomer/FiltersCustomer';
import FiltersCompany from './FitersCompany';

interface FiltersFormProps {
  onClose: Function;
}

const options = [
  { label: 'Advanced', value: 'advanced' },
  { label: 'Customize', value: 'customize' },
];

const FiltersForm: React.FC<FiltersFormProps> = ({ onClose }: FiltersFormProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    return () => {
      dispatch(setFilters({}));
    };
  }, [dispatch]);
  const onSubmit = (values: Filters) => {
    console.log(values);
    dispatch(setFilters(values));
  };
  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Title>Filters</Title>
            <TabContainer>
              <Field name="variantForm" options={options} component={RadioButtons} />
            </TabContainer>
            <FiltersCompany />
            <FiltersCustomer />
            <ButtonsGroup>
              <ButtonUI
                content="Cancel"
                wrapperCSS={WrapperCss}
                buttonCSS={CancelBtnCss}
                onClick={() => {
                  onClose();
                }}
              />
              <ButtonUI
                type="submit"
                content="Search"
                wrapperCSS={WrapperCss}
                buttonCSS={SubmitBtn}
              />
            </ButtonsGroup>
          </form>
        )}
      />
    </Container>
  );
};

export default FiltersForm;

const TabContainer = styled.div`
  margin: 10px 0;
`;

const WrapperCss = css`
  box-sizing: border-box;
  width: 49%;
`;

const SubmitBtn = css`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background-color: #2baee0;
  border-radius: 6px;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  align-items: center;
  color: #fff;
  border-width: 0;
  cursor: pointer;
  margin-bottom: 32px;
  :hover {
    background-color: #51c2ee;
  }
  :focus {
    background-color: #1da7dc;
  }
  :disabled {
    background-color: #ceedf9;
    color: #2baee0;
    cursor: not-allowed;
  }
  @media (max-width: 375px) {
    margin-bottom: 16px;
  }
  font-size: 16px;
`;

const CancelBtnCss = css`
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 6px;
  font-size: 16px;
  text-align: center;
  color: #122434;
  width: 100%;
  height: 100%;
  border: 1px solid #e8e8e8;
  cursor: pointer;
`;

const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 6px;
`;

const Title = styled.h2`
  margin: 0;
  color: #122434;
  font-size: 24px;
  font-weight: 500;
`;
const ButtonsGroup = styled.div`
  margin-top: 16px;
  display: flex;
  width: 308px;
  justify-content: space-between;
`;
/* const TabText = styled.p`
  margin: 0;
  color: #122434;
`; */
