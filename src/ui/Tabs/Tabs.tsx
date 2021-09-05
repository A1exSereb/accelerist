import React, { ReactNodeArray } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
interface TabsProps {
  childs: ReactNodeArray;
  label?: string;
}

const Tabs: React.FC<TabsProps> = ({ childs, label }: TabsProps) => {
  return (
    <TabsContainer>
      {label && <LabelContainer>{label}</LabelContainer>}
      {childs.map((child) => (
        <Tab key={uuidv4()}>{child}</Tab>
      ))}
    </TabsContainer>
  );
};

export default Tabs;

const LabelContainer = styled.label`
  font-size: 12px;
  color: #737373;
  align-self: flex-start;
`;

const TabsContainer = styled.div`
  text-align: 'center';
  width: 100%;
  height: 40px;
  padding: 4px;
  display: flex;
  justify-content: space-around;
  background-color: #f8f8f8;
  border-radius: 6px;
`;
const Tab = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-width: 0;
  color: #737373;
  font-size: 12px;
  font-weight: 400;
  background-color: inherit;
  cursor: pointer;
  a {
    display: flex;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #737373;
    &:hover {
      color: #000;
    }
    div {
      width: 100%;
      height: 100%;
    }
  }
  &:hover {
    color: #000;
  }
  .active {
    background-color: #caf0ff;
    color: #000;
    border-radius: 6px;
    text-align: center;
    border-width: 0;
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
    &:disabled {
      background-color: #dcf5ff;
      cursor: not-allowed;
    }
    &:hover {
      color: #000;
    }
  }
`;
