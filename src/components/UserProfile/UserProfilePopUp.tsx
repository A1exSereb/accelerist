/* eslint-disable no-unused-vars */
import React from 'react';
import { logout } from 'store/ducks/authorization/slice';
import { useAppDispatch } from 'store/store';
import styled from 'styled-components';

export const UserProfilePopUp: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <Container>
      <ul>
        <ListItem onClick={() => dispatch(logout())}>
          <LogOut>Log out</LogOut>
        </ListItem>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 100%;
  background-color: #fff;
  bottom: -50px;
`;
const ListItem = styled.li`
  color: #122434;
  font-size: 12px;
  list-style: none;
`;
const LogOut = styled.span`
  color: #f05658;
`;
