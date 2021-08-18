import React, { ReactChild, useEffect } from 'react';
import styled from 'styled-components';
import closeBtn from 'assets/images/icons/x.svg';

interface ModalProps {
  showCloseBtn?: boolean;
  children?: ReactChild;
  headerChild?: ReactChild;
  onCloseBtnClick?: Function;
}
const Modal: React.FC<ModalProps> = ({
  showCloseBtn = true,
  children,
  headerChild,
  onCloseBtnClick,
}: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, []);
  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalHeader>
          {showCloseBtn && (
            <CloseModalBtn onClick={() => onCloseBtnClick && onCloseBtnClick()} src={closeBtn} />
          )}
          {headerChild}
        </ModalHeader>
        <ChildContainer>{children}</ChildContainer>
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
  max-width: 70%;
  max-height: 90%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 6px;
  margin: 0 auto;
  overflow: auto;
`;

const ChildContainer = styled.div`
  box-sizing: border-box;
  padding: 40px;
  padding-top: 15px;
`;

const ModalHeader = styled.div`
  top: 0;
  background: #f2f2f2;
  border-radius: 6px 6px 0px 0px;
  padding: 30px;
  box-sizing: border-box;
`;

const CloseModalBtn = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: #f2f2f2;
  top: 4px;
  right: 4px;
`;
