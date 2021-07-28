import React from 'react';
import styled from 'styled-components';
interface AuthorizationButtonProps {
  onSubmit: void;
  placeholder: string;
}
const AuthorizationReset: React.FC<AuthorizationButtonProps> = ({
  onSubmit,
  placeholder,
}: AuthorizationButtonProps) => {
  return <Button onSubmit={() => onSubmit}>{placeholder}</Button>;
};
export default AuthorizationReset;
const Button = styled.button`
  height: 100%;
  width: 100%;
  background-color: #2baee0;
  border-radius: 6px;
  text-align: center;
  align-items: center;
  color: #fff;
  border-width: 0;
  margin-bottom: 32px;
  @media (max-width: 375px) {
    margin-bottom: 16px;
  }
`;
