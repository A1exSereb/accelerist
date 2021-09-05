import React from 'react';
import styled, { css } from 'styled-components';
import Modal from '..';
import BlockIcon from 'assets/images/icons/block.svg';
import ButtonUI from 'ui/Button';
import { AuthorizationButton } from 'styled/styled';

interface CompanyBlockModalProps {
  onClose: () => void;
  id: string;
  companyName: string;
}

export const CompanyBlockModal: React.FC<CompanyBlockModalProps> = ({
  onClose,
  id,
  companyName,
}: CompanyBlockModalProps) => {
  return (
    <Modal showCloseBtn={false} headerChild={<BlockImage src={BlockIcon} />}>
      <>
        <TextContainer>
          <BoldText>Locked</BoldText>
          <Text>{`${companyName} was added to the list of blocked companies`}</Text>
        </TextContainer>
        <ButtonContainer>
          <ButtonUI
            content="OK"
            wrapperCSS={BtnWrapperCss}
            buttonCSS={AuthorizationButton}
            onClick={() => onClose()}
          />
          <ButtonUI
            content="Cancel"
            wrapperCSS={BtnWrapperCss}
            buttonCSS={CancelBtnCss}
            onClick={() => onClose()}
          />
        </ButtonContainer>
      </>
    </Modal>
  );
};

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-aligin: center;
  align-items: center;
  word-wrap: wrap;
`;

const BlockImage = styled.img`
  display: block;
  margin: auto auto;
  align-self: center;
`;
const CancelBtnCss = css`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: 6px;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  align-items: center;
  color: #f05658;
  border-width: 0;
  cursor: pointer;
  border: 1px solid #e8e8e8;
  margin-bottom: 32px;
  :hover {
    background-color: #e8e8e8;
  }
  :focus {
    background-color: #e8e8e8;
  }
  :disabled {
    background-color: #ceedf9;
    color: #2baee0;
    cursor: not-allowed;
  }
  @media (max-width: 375px) {
    margin-bottom: 16px;
  }
`;

const BtnWrapperCss = css`
  color: black;
  width: 48%;
`;

const Text = styled.p`
  color: #122434;
  font-size: 12px;
  margin: 0;
  margin-bottom: 20px;
`;

const BoldText = styled(Text)`
  font-size: 16px;
  margin-top: 0;
  font-weight: 500;
  margin: 0;
  margin-bottom: 8px;
  margin-top: 18px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
