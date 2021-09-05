import React from 'react';
import styled from 'styled-components';
interface IconSignatureProps {
  label: string;
  iconSource: string;
  onClick?: Function;
}
const IconSignature: React.FC<IconSignatureProps> = ({
  iconSource,
  label,
  onClick,
}: IconSignatureProps) => {
  return (
    <Container onClick={() => onClick && onClick()}>
      <Icon src={iconSource} />
      <Text>{label}</Text>
    </Container>
  );
};

export default IconSignature;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Text = styled.p`
  margin: 0;
  margin-left: 5px;
  color: #122434;
  font-size: 12px;
`;
