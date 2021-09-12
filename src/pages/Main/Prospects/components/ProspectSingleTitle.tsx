import React from 'react';
import styled, { css } from 'styled-components';
import ButtonUI from 'ui/Button';
import PenImg from 'assets/images/icons/pen.svg';
import { Field, Form } from 'react-final-form';
import { Prospect } from 'types';
import TextInput from 'ui/TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { deleteProspectsThunk, updateSingleProspectThunk } from 'store/ducks/prospects/thunk';
import { useHistory } from 'react-router';

interface ProspectSingleTitleProps {
  prospect: Prospect;
}

const ProspectSingleTitle = ({ prospect }: ProspectSingleTitleProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (values: { name: string }) => {
    const { name } = values;
    if (name !== null)
      dispatch(
        updateSingleProspectThunk({
          filters: prospect.filters,
          name: values.name,
          id: prospect.id,
          prospectsAvailable: prospect.prospectsAvailable,
        })
      );
  };

  return (
    <div style={{ width: '100%' }}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onSubmit={handleSubmit}
            >
              <Field
                /* value={prospect.name} */
                initialValue={prospect.name !== null || undefined ? prospect.name : null}
                placeholder="Enter name here"
                component={TextInput}
                wrapperCSS={WrapperInputCss}
                inputCSS={InputCss}
                name="name"
              />
              <ProspectHeaderButtonContainer>
                <ButtonUI
                  buttonCSS={EditButtonCss}
                  wrapperCSS={WrapperButtonCss}
                  content={
                    <Container onClick={() => handleSubmit()}>
                      <EditImg src={PenImg} />
                      <EditText>Edit</EditText>{' '}
                    </Container>
                  }
                />
                <ButtonUI
                  buttonCSS={DeleteButtonCss}
                  content="Delete"
                  wrapperCSS={WrapperButtonCss}
                  onClick={() => {
                    dispatch(deleteProspectsThunk({ id: prospect.id }));
                    history.push('/prospects');
                  }}
                />
              </ProspectHeaderButtonContainer>
            </form>
          );
        }}
      />
    </div>
  );
};

export default ProspectSingleTitle;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
`;

const ProspectHeaderButtonContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin-right: 286px;
`;

const EditButtonCss = css`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: #fff;
  font-weight: 400;
  font-size: 12px;
  border-radius: 6px;
  border-color: #2baee0;
  padding: 5px;
  text-align: center;
  align-items: center;
  color: #122434;
  cursor: pointer;
  border: 1px solid #caf0ff;
  :hover {
    background-color: #ebf9ff;
    color: #2baee0;
  }
  :focus {
    background-color: #caf0ff;
  }
  :disabled {
    background-color: #ceedf9;
    color: #2baee0;
    cursor: not-allowed;
  }
`;

const DeleteButtonCss = css`
  box-sizing: border-box;
  background-color: #fffafa;
  font-weight: 400;
  font-size: 12px;
  border-radius: 6px;
  padding: 5px;
  text-align: center;
  align-items: center;
  color: #122434;
  cursor: pointer;
  border: none;
  :hover {
    background-color: #fffafa;
    color: #f05658;
  }
  :focus {
    background-color: #fffafa;
  }
  :disabled {
    background-color: #fffafa;
    color: #f05658;
    cursor: not-allowed;
  }
`;
const InputCss = css`
  font-size: 32px;
  border: none;
  outline: none;
  border-radius: 0;
`;

const WrapperInputCss = css`
  box-sizing: border-box;
  width: 80%;
`;
const WrapperButtonCss = css`
  box-sizing: border-box;
  width: 82px;
  height: 36px;
  outline: none;
  &:focus {
    border: none;
    outline: none;
  }
`;

const EditImg = styled.img`
  margin-right: 5px;
`;

const EditText = styled.p`
  color: #122434;
  font-size: 12px;
`;
