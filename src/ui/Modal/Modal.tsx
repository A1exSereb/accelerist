import React, { ReactChild } from 'react';
import styled from 'styled-components';
import closeBtn from 'assets/images/icons/x.svg';

interface ModalProps {
  showCloseBtn?: boolean;
  child?: ReactChild;
  headerChild?: ReactChild;
}
const Modal: React.FC<ModalProps> = ({ showCloseBtn = true, child, headerChild }: ModalProps) => {
  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalHeader>
          {showCloseBtn && <CloseModalBtn src={closeBtn} />}
          {headerChild}
        </ModalHeader>
        {child}
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 40px;
  margin: 0 auto;
`;

const ModalHeader = styled.div`
  top: 0;
  background: #f2f2f2;
  border-radius: 6px 6px 0px 0px;
`;

const CloseModalBtn = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  right: 0;
`;
