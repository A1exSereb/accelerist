import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from 'store/ducks/authorization/selectors';
import styled from 'styled-components';
import UserAvatar from 'assets/images/icons/ava.svg';
import { UserProfilePopUp } from './UserProfilePopUp';

const UserProfile: React.FC = () => {
  const user = useSelector(getUser);
  const [showPopUp, setShowPopUp] = useState(false);
  const iconSource = user?.avatarKey ? user.avatarKey : UserAvatar;
  const userName =
    user?.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : 'No name';
  return (
    <UserProfileContainer onClick={() => setShowPopUp(!showPopUp)}>
      <UserIcon src={iconSource} />
      <UserName>{userName}</UserName>
      {showPopUp && <UserProfilePopUp />}
    </UserProfileContainer>
  );
};

export default UserProfile;

const UserProfileContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100px;
  margin-left: auto;
  cursor: pointer;
  position: relative;
`;

const UserIcon = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 6px;
  margin-right: 10px;
`;

const UserName = styled.p`
  color: #122434;
  font-size: 12px;
`;
