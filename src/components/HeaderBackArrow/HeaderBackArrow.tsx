import React from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import ArrowIcon from 'assets/images/icons/arrow-down.svg';

const HeaderBackArrow = () => {
  return <BackArrow src={ArrowIcon} onClick={() => history.back()} />;
};

export default HeaderBackArrow;

const BackArrow = styled(ReactSVG)`
  transform: rotate(90deg);
  margin-right: 8px;
  cursor: pointer;
`;
