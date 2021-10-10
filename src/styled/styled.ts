import StateManager, { components, ControlProps, StylesConfig } from 'react-select';
import { css, CSSObject, CSSProperties, keyframes } from 'styled-components';
import { Sort } from 'types';
import { transform } from 'typescript';
import { SelectOption } from 'ui/types';

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
  padding: 5px;
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

export const formSelectStyles: StylesConfig<SelectOption, false> = {
  option: (base, state) => ({
    fontSize: '16px',
    lineHeight: '150%',
    padding: '10px 16px',
    cursor: 'pointer',
    background: state.isFocused ? '#e9f9ff' : '#fff',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    transition: 'all .2s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  }),
  control: (base, state) => ({
    maxWidth: '100%',
    background: '#fff',
    border: '1px solid #e8e8e8',
    boxSizing: 'border-box',
    marginTop: '7px',
    borderRadius: state.selectProps.menuIsOpen ? '8px 8px 0 0' : '8px',
    padding: '10px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    height: '49px',
    position: 'relative',
  }),
  menuList: () => ({
    maxWidth: '100%',
    maxHeight: '180px',
    background: '#fff',
    position: 'absolute',
    zIndex: 9,
    width: '100%',
    top: '-8px',
    left: '0',
    overflowY: 'auto',
    border: '1px solid #e8e8e8',
    borderTop: 0,
    borderRadius: '0px 0px 8px 8px',
  }),
};

export const filtersSelectStyles: StylesConfig<{ value: Sort; label: Sort }, false> = {
  option: (base, state) => ({
    fontSize: '16px',
    lineHeight: '150%',
    padding: '10px 16px',
    cursor: 'pointer',
    background: state.isFocused ? '#e9f9ff' : '#fff',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    transition: 'all .2s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  }),
  control: (base, state) => ({
    background: 'inherit',
    border: '1px solid #e8e8e8',
    fontSize: '12px',
    color: '#122434',
    boxSizing: 'border-box',
    width: '120px',
    marginTop: '7px',
    borderRadius: state.selectProps.menuIsOpen ? '8px 8px 0 0' : '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    height: '49px',
    position: 'relative',
  }),
  placeholder: () => ({
    color: '#122434',
  }),
  menuList: () => ({
    maxWidth: '100%',
    maxHeight: '180px',
    background: '#fff',
    position: 'absolute',
    zIndex: 9,
    width: '100%',
    top: '-8px',
    left: '0',
    overflowY: 'auto',
    border: '1px solid #e8e8e8',
    borderTop: 0,
    borderRadius: '0px 0px 8px 8px',
  }),
};
