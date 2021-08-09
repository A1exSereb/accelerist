import { css, keyframes } from 'styled-components';

export const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

export const AuthorizationButton = css`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background-color: #2baee0;
  border-radius: 6px;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  align-items: center;
  color: #fff;
  border-width: 0;
  cursor: pointer;
  margin-bottom: 32px;
  :hover {
    background-color: #51c2ee;
  }
  :focus {
    background-color: #1da7dc;
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

export const ThirdButton = css`
  box-sizing: border-box;
  background-color: #fff;
  font-weight: 400;
  font-size: 12px;
  border-radius: 6px;
  border-color: #2baee0;
  text-align: center;
  align-items: center;
  color: #122434;
  border-width: 1px;
  cursor: pointer;
  border-style: solid;
  box-sizing: border-box;

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
